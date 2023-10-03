import Image from 'next/image';

import Earth from '@/public/earth.svg';
import { getDictionary } from '@/dictionaries/index';
import type { Locales } from '@/types/locales';

import { Title } from './hello-world.css';

export const HelloWorld = async ({
  name,
  lang = 'en',
}: {
  name: string;
  lang: Locales;
}) => {
  const dict = await getDictionary(lang);
  return (
    <>
      <h1 className={Title}>
        {dict.hello} {name}!
      </h1>
      <Image
        src={Earth}
        alt="Earth image"
        className="dark:invert"
        width={100}
        height={100}
        priority
      />
    </>
  );
};
