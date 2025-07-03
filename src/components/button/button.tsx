import styles from "@/components/button/button.module.scss";

export default function Button({ loading }: { loading: boolean }) {
  return (
    <button className={styles.submitBtn} type="submit" disabled={loading}>
      {loading ? "در حال ثبت" : "ثبت"}
    </button>
  );
}
