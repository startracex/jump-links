import { createSignal } from "solid-js";
import params, { type themeType } from "../data/parmas";
const lightIcon = <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
  <path d="M9.15039 9.15088L11.3778 11.3783" stroke="currentColor" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M3 24H6.15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M9.15039 38.8495L11.3778 36.6221" stroke="currentColor" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M38.8495 38.8495L36.6221 36.6221" stroke="currentColor" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M44.9996 24H41.8496" stroke="currentColor" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M38.8495 9.15088L36.6221 11.3783" stroke="currentColor" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round" />
  <path d="M24 3V6.15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
    fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
  <path d="M24 45.0001V41.8501" stroke="currentColor" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>;
const darkIcon = <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
  <path
    d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"
    fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
</svg>;
export default function Theme() {
  let signal: themeType;
  if (params.theme && ["dark", "light"].includes(params.theme)) {
    signal = params.theme;
  } else {
    signal = localStorage.getItem("theme") || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  const [theme, setTheme] = createSignal(signal);
  const changeTheme = (theme: themeType) => {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };
  return <a onclick={() => {
    if (theme() === "light")
      changeTheme("dark");
    else
      changeTheme("light");
  }}>
    {theme() === "light" ? lightIcon : darkIcon}
  </a>;
}