import React, { Component, useEffect } from 'react';
interface IGauge {
  children: any;
  percent: string;
  arcsLength: string;
  setgauge: (open: boolean) => void;
  hidden: boolean;
}


const Gauge = (props: IGauge) => {

  const onclick = () => {

    props.setgauge(false);


  }
  return (
    <div key={props.children}>
      <p>{props.percent}</p>
      <p> {props.arcsLength}</p>
      <p> {props.hidden}</p>

    </div>
  );
};
export default Gauge;
