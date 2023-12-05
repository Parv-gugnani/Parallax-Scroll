"use client";
import { useEffect } from "react";
// import styles from
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { images } from "@/next.config";

const Images = [
  "1.jpg",

  "2.jpg",

  "3.jpg",

  "4.jpg",

  "5.jpg",

  "6.jpg",

  "7.jpg",

  "8.jpg",

  "9.jpg",

  "10.jpg",

  "11.jpg",

  "12.jpg",
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={StyleSheet.main}>
      <div className={styles.spacer}></div>
      <div className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column Images={[images[0], images[1], images[2]]} />
          <Column Images={[images[0], images[1], images[2]]} />
          <Column Images={[images[0], images[1], images[2]]} />
        </div>
      </div>
    </main>
  );
}
