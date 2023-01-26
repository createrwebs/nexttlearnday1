import React, { useState } from 'react';
import { useRouter } from 'next/router';
const Iduser = () => {
  const router = useRouter();
  const [count, setCount] = useState(10);
  const { pid } = router.query;
  const code = router.query.code;
  const name = router.query.name;
  setTimeout(() => {
    router.push(`/`);
  }, count * 1000);
  setTimeout(() => {
    setCount(count - 1);
  }, 1000);
  return (
    <div>
      <div>post:{pid}</div>
      <div>{count}</div>
      <div>{code}</div>
      <div>{name}</div>
    </div>
  );
};
export default Iduser;
