"use client"

import styles from './page.module.css';

export default function Button({clase, text}) {
    return(
        <button type="button" className={styles.button} onClick={clase}>{text}</button>
    )
}