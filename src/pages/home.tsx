import Card from '../components/card';
import params from '../data/parmas';
import { useI18n } from '@solid-primitives/i18n';
export default function Home() {
  const [t] = useI18n();
  if (params.delay === null) {
    params.delay = 3000;
  }
  if (params.message === null) {
    params.message = t('jump_to', {
      url: params.target || '/about',
    });
  }
  return <Card {...params}></Card>;
}
