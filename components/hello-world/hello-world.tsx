import Image from 'next/image';

import Earth from '@/public/earth.svg';

export const HelloWorld = ({ name = 'World' }) => (
  <>
    <h1>Hello {name}!</h1>
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
