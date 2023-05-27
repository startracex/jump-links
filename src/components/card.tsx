import { useI18n } from "@solid-primitives/i18n";
import { type parmasType } from "../data/parmas";
import { Link } from "@solidjs/router";
import Icons from "./icons";
import "./card.css";
export default function Card(props: parmasType) {
  const [t] = useI18n();
  if (props.target && props.delay) {
    const delay = parseInt(props.delay as string) || 0;
    if (delay > 0 && delay < 3000) {
      setTimeout(() => {
        window.location.href = props.target;
      }, delay * 1000);
    }
    if (delay >= 3000) {
      setTimeout(() => {
        window.location.href = props.target;
      }, delay);
    }
  }
  return <div class="card">
    <Icons type={props.type}></Icons>
    <hr />
    <section>
      {props.message}
    </section>
    <aside>
      <Link href={props.target || "/about"}>
        {t("jump")}
      </Link>
    </aside>
  </div>;
}