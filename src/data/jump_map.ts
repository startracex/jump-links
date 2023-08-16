import type { RouteDataFunc } from '@solidjs/router';
import jp from "./jump_map.json";

const mapper: RouteDataFunc = () => {
  return jp;
};

export default mapper;