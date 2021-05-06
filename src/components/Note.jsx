import React from "react";
import styles from "./Note.module.css";

import { FaPencilAlt } from "react-icons/fa";

const Note = ({ children, title }) => {
  return (
    <div className={styles.noteContainer}>
      <div className={styles.noteHeader}>
        <FaPencilAlt />
        <span className={styles.noteTitle}>{title ? title : 'NOTE'}</span>
      </div>
      <div className={styles.noteContents}>{children}</div>
    </div>
  );
};

export default Note;
