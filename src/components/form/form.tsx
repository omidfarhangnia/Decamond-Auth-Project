"use client";

import styles from "@/components/form/form.module.scss";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "../button/button";
import Input from "../input/input";

export default function Form() {
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      router.push("/dashboard");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isTelValid(tel)) {
      console.log("validation failed");
      setTel("");
      setError("شماره تلفن نامعتبر است");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");

      if (!res.ok) {
        throw new Error("دریافت اطلاعات با خطا مواجه شد");
      }

      const data = await res.json();
      const user = data.results[0];

      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      setError("خطایی رخ داد. لطفا دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>احراز هویت</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input tel={tel} loading={loading} setTel={setTel} />
        <p className={styles.errorMessage}>{error}</p>
        <Button loading={loading} />
      </form>
    </div>
  );
}

function isTelValid(tel: string): boolean {
  const telRegex = /^(98|0)?9\d{9}$/;
  return telRegex.test(tel);
}
