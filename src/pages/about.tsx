import { useRouteData } from '@solidjs/router';

export default function About() {
  const mapper = useRouteData<any>() as () => string;
  return (
    <section>
      jump_map.json
      <hr />
      <pre>{JSON.stringify(mapper, undefined, 4)}</pre>
    </section>
  );
}
