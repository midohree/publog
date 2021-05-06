import React from 'react';
import styles from './Columns.module.css'

function Columns({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.columnImage}>{children[0]}</div>
        <div className={styles.desc}>{children[1]}</div>
      </div>
      <div className={styles.empty}></div>
      <div className={styles.wrapper}>
        <div className={styles.columnImage}>{children[2]}</div>
        <div className={styles.desc}>{children[3]}</div>
      </div>
    </div>
  )
}

export default Columns;
