import React, { ReactNode } from 'react';
import Header from './Header';
import styles from './index.module.css';

interface LayoutProps {
  children: ReactNode; 
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.topNav}>
        <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.childrenDiv}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
