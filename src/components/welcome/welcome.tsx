"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/components/welcome/welcome.module.scss";

export default function Welcome() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/auth");
    } else {
      setLoading(false);
    }
  }, [router]);

  return (
    <div className={styles.container}>
      {!loading && <div>به صفحه داشبورد خوش آمدید</div>}
    </div>
  );
}
