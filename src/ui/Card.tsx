
import * as React from 'react';
import { CardProps } from '../types/types';
import classes from './Card.module.css'


export default function Card(props: CardProps) {
  return (
    <div className={classes.card}>
      {props.children}
    </div>
  );
}
