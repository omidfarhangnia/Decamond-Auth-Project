import styles from "@/components/input/input.module.scss";

export default function Input({ tel, loading, setTel }: { tel: string , loading: boolean, setTel: (value: string) => void }) {
  return (
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
  );
}
