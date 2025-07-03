"use client";

import styles from "@/components/form/form.module.scss";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Form() {
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

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
        <div className={styles.inputContainer}>
          <input
            id="tel"
            required
            className={styles.input}
            type="tel"
            value={tel}
            disabled={loading}
            placeholder="09123456789"
            onChange={(e) => setTel(e.target.value)}
          />
          <label className={styles.label} htmlFor="tel">
            شماره تلفن
          </label>
        </div>
        <p className={styles.errorMessage}>{error}</p>
        <input
          className={styles.submitBtn}
          type="submit"
          value={loading ? "در حال ثبت" : "ثبت"}
        />
      </form>
    </div>
  );
}

function isTelValid(tel: string): boolean {
  const telRegex = /^(\+98|0)?9\d{9}$/;
  return telRegex.test(tel);
}
