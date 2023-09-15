import Image from 'next/image';

import Earth from '@/public/earth.svg';
import { Title } from './hello-world.css';

export const HelloWorld = ({ name = 'World' }) => (
  <>
    <h1 className={Title}>Hello {name}!</h1>
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
