import Link from "next/link";
import styles from "./link-button.module.scss";

type LinkButtonProps = {
  buttonSize: "small" | "medium" | "large";
  buttonText: string;
  link: string;
};

export default function LinkButton({
  buttonSize,
  buttonText,
  link,
}: LinkButtonProps) {
  return (
    <Link
      className={`${styles["wrapper"]} ${styles[buttonSize]}`}
      href={link}
      target="_blank"
    >
      {buttonText}
    </Link>
  );
}
