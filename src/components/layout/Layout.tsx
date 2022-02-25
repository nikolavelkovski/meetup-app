import * as React from 'react';
import { MainNavigation } from './MainNavigation';
import classes from './Layout.module.css'
import { LayoutProps } from '../../types/types';

export function Layout(props: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}
