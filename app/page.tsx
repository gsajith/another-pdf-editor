"use client";
import Dropzone from '@/components/Dropzone'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [bytesRead, setBytesRead] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    console.log(bytesRead);
  }, [bytesRead]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Hello
        <Dropzone bytesRead={setBytesRead} />
      </div>
    </main>
  )
}
