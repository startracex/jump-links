import { useParams } from "@solidjs/router";
import { useRouteData } from '@solidjs/router';
import Card from "../../components/card";
import { useI18n } from "@solid-primitives/i18n";
export default () => {
  const [t] = useI18n();
  const params = useParams();
  const mapper = useRouteData<any>();
  const val = mapper[params.auto];
  const message = t("jump_to", {
    url: val || "/about",
  });
  if (val) {
    window.location.href = val;
    return <Card target={val} message={message}></Card>;
  } else {
    return <Card target={null} type="info" message={message}></Card>;
  }
};