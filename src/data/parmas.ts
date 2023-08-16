const SearchParams = new URLSearchParams(window.location.search);
export type themeType = "dark" | "light" | null;
export type parmasType = {
  target: string | null;
  lang?: string | null;
  type?: string | null;
  delay?: string | number | null;
  message?: string | null;
  theme?: themeType | null;
};
const params: parmasType = {
  target: SearchParams.get("target"),
  lang: SearchParams.get("lang"),
  type: SearchParams.get("type"),
  delay: SearchParams.get("delay"),
  message: SearchParams.get("message"),
  theme: SearchParams.get("theme") as themeType,
};
export default params;