import type { RouteDataFunc } from '@solidjs/router';
// import { createResource } from 'solid-js';
import jp from "../../public/jump_map.json";

const mapper: RouteDataFunc = () => {
  return jp;
};

export default mapper;