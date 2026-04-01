import styles from '@components/DefaultLayout.module.css';

import * as React from 'react';

export default function App(props) {
  return (
    <div className={styles.body}>
      <img className={styles.pixel} src={props.previewPixelSRC} alt={''} />
      {props.children}
    </div>
  );
}
