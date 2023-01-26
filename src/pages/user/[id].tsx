import React from 'react';
import { useRouter } from 'next/router';
const Iduser = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>post:{id}</div>;
};
export default Iduser
