import React, { FC } from 'react';
import styles from '../switchButton/SwitchButton.module.css';

interface Props {
  text: string;
  fileSize: string;
}

export const SwitchButton: FC<Props> = ({ text, fileSize }) => {
  return (
    <div className={styles.offline}>
      <div>
        <span>{text}</span>
        <div>{fileSize}</div>
      </div>
      <input type="checkbox" name="switch" id="switch" />
      <label className={styles.switchLabel} htmlFor="switch"></label>
    </div>
  )
}