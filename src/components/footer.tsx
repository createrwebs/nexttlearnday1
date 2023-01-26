import React from 'react';
import Image from 'next/image';

export const footercomponent = () => {
  return (
    <div>
      <a
        href="https://vercel.com?utm_source=typescript-nextjs-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{` `}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </div>
  );
};
