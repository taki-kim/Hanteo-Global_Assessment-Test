import styles from "./header.module.css";

import headerNavList from "@/lib/header-nav-list";
import NavItem from "./nav-item/nav-item";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      {headerNavList.map((item) => (
        <NavItem
          title={item.title}
          link={item.link}
          key={item.title + item.link}
        />
      ))}
    </div>
  );
}
