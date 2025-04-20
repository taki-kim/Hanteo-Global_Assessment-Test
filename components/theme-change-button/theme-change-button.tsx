"use client";

import { useEffect, useState } from "react";

import { getThemeCookie, setThemeCookie } from "@/utils/cookies";
import { COOkIE_DATA_THEME } from "@/constants";
import styles from "./theme-change-button.module.scss";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeChangeButton() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = getThemeCookie(COOkIE_DATA_THEME);
    document.body.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  const changeTheme = () => {
    const oppositeTheme = theme === "dark" ? "light" : "dark";
    document.body.classList.add(oppositeTheme);
    document.body.classList.remove(theme);
    setThemeCookie(oppositeTheme);
    setTheme(oppositeTheme);
  };

  return (
    <div className={styles["wrapper"]} onClick={changeTheme}>
      {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </div>
  );
}
