import Image from 'next/image';

import Earth from '@/public/earth.svg';
import { Title } from './hello-world.css';
import { getDictionary } from '../../app/dictionaries';

export const HelloWorld = async ({ name = 'World' }) => {
  const dict = await getDictionary('en');
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
