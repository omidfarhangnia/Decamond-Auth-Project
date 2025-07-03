import Link from "next/link";
import styles from "@/components/home/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>خوش آمدید</h1>
      <nav className={styles.navbar}>
        <Link className={styles.links} href={"/dashboard"}>داشبورد</Link>
        <Link className={styles.links} href={"/auth"}>ثبت نام</Link>
      </nav>
    </div>
  );
}
