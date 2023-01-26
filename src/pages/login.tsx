import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';
import axios from 'axios';
export default function Login() {
  const [number, Setnumber] = useState(0);
  const [someValue, SetsomeValue] = useState(0);
  const [timeshow, Settimeshow] = useState(``);
  const getTimestamp = () => {
    Settimeshow(new Date().getTime().toString());
    return new Date().getTime();
  };
  const getwithMemo = useMemo(() => {
    return new Date().getTime().toString();
  }, [someValue]);
  const getwithoutmemo = () => {
    return new Date().getTime().toString();
  };
  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      fetch(`api/hello`, {
        method: `GET`,
      }).then((response: any) => {
        if (response.status) {
          console.log(`res :>> `, response.json());
        }
      });
    },
    [someValue],
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
      <div>
        <p>ใช้ useMemo {getwithMemo}</p>
        <p>
          ไม่ใช้ useMemo {getwithoutmemo} {someValue}
        </p>
        <button
          onClick={() => {
            SetsomeValue((prev) => ++prev);
          }}
        >
          เพิ่ม
        </button>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            onClick={() => {
              SetsomeValue(6);
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
