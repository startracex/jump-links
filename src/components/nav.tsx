import "./nav.css";
import { useI18n } from "@solid-primitives/i18n";
import { Link, useNavigate } from "@solidjs/router";
import Theme from "./theme";
export default function Nav() {
  const [t] = useI18n();
  const navigate = useNavigate();
  return <header>
    <nav>
      <a onClick={() => navigate(-1)}>
        {t("back")}
      </a>
      <Link href="/about">
        {t("about")}
      </Link>
      <Theme></Theme>
    </nav>
  </header >;
}