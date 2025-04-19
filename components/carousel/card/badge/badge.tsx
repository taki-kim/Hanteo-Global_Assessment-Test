import styles from "./badge.module.scss";

type BadgeProps = {
  statusText: string;
};

export default function Badge({ statusText }: BadgeProps) {
  return <div className={styles["wrapper"]}>{statusText}</div>;
}
