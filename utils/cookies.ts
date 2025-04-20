import { COOkIE_DATA_THEME } from "@/constants";

export function getThemeCookie(name: string) {
  const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : "light";
}

export function setThemeCookie(theme: string) {
  document.cookie = `${COOkIE_DATA_THEME}=${theme}; path=/; max-age=${
    3600 * 24 * 400
  }`;
}
