import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import axios from 'axios';
import qs from 'qs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useRef, useState } from 'react';
import { siteSettings } from 'src/contexts/site.settings';
import { useSettings } from 'src/contexts/settings.context';
import Gauge from 'src/components/gauge';
import Buttons from 'src/components/button';
import { GetStaticProps } from 'next';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl } from '@mui/material';
const columns: GridColDef[] = [
  { field: `id`, headerName: `ID`, width: 90 },
  {
    field: `firstName`,
    headerName: `First name`,
    width: 150,
    editable: true,
  },
  {
    field: `lastName`,
    headerName: `Last name`,
    width: 150,
    editable: true,
  },
  {
    field: `age`,
    headerName: `Age`,
    type: `number`,
    width: 110,
    editable: true,
  },
  {
    field: `fullName`,
    headerName: `Full name`,
    description: `This column has a value getter and is not sortable.`,
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ``} ${params.row.lastName || ``}`,
  },
];

export default function Home({ userPermissions }: { userPermissions: any }) {
  const [textChange, setTextChange] = useState(null);
  const [formstate, setFormState] = useState([]);
  const [rowstate, setRowState] = useState([]);
  const reftext = useRef(null);
  const { logo, siteTitle } = useSettings();
  const handleClick = (e: any) => {
    e.preventDefault();
  };
  const onChange = (e: any) => {
    const NameInput = e.target.name;
    if (NameInput === 'name') {
      setTextChange(e.target.value);
    }
    console.log(`NameInput`, NameInput);
    console.log(`onChange`, e.target.value);
  };
  const [hidden, setHidden] = useState(false);
  const hiddenclick = () => {
    setHidden(!hidden);
  };
  const callDatagrid = () => {
    axios
      .get(process.env.NEXT_PUBLIC_REST_API_ENDPOINT + `/datagrid`)
      .then((response) => {
        setRowState(response.data);
        return response.data;
      });
  };
  useEffect(() => {
    callDatagrid();
    console.log(userPermissions);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TextField name="name" onChange={onChange} />
        <TextField name="lastname" onChange={onChange} />
        <Box sx={{ height: 400, width: `100%` }} className={styles.card}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell align="right">firstname</TableCell>
                  <TableCell align="right">Lastname</TableCell>
                  <TableCell align="right">Age</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowstate.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.firstName ? row.firstName : "ไม่มีข้อมูล"}
                    </TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <DataGrid
            ref={reftext}
            rows={rowstate}
            columns={columns}
            editMode="row"
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={(e: any) => {
              console.log(e);
            }}
            onEditRowsModelChange={(e: any) => {
              console.log(e);
              (reftext.current as any).setEditCellValue({
                id: 111,
                firstName: 'tes5',
              });
            }}
          />
        </Box>
      </main>

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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await axios
    .get(`/api/datagrid`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return false;
    });
  return {
    props: {
      userPermissions: res,
    },
  };
};
