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
  const iframe = location.href.indexOf("#") > -1;
  if (val) {
    if (iframe) {
      document.documentElement.setAttribute("data-iframe", "true");
      return <iframe src={val} style="width:100%;height:100%;border:none;"></iframe>;
    }
    window.location.href = val;
    return <Card target={val} message={message}></Card>;
  } else {
    return <Card target={null} type="info" message={message}></Card>;
  }
};