"use client";
import { usePathname } from "next/navigation";

import styles from "./nav-item.module.css";
import Link from "next/link";

type NavItemProps = {
  title: string;
  link: string;
};

export default function NavItem({ title, link }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      className={`${styles.wrapper} ${
        pathname === link ? styles.clicked : null
      }`}
      href={link}
    >
      {title}
    </Link>
  );
}
