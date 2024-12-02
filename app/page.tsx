"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "nUBoard 질문봇": "nuboard",
    "nUDR 질문봇": "nudr",
    // "Function calling": "function-calling",
    // "File search": "file-search",
    // All: "all",
  };

  return (
    <main className={styles.main}>
      <div className={styles.titles}>
        <div className={styles.title}>
          안녕하세요? 저는 보드봇이에요.<br/>
        </div>
        <div className={styles.subtitle}>
          친절하게 설명드릴게요 :)
        </div>
      </div>
      <div className={styles.container}>        
        <a
          key={"nUBoard 질문봇"}
          className={styles.category} href={`/dashboard/nuboard`}>
          {"nUBoard 질문하기"}
        </a>
        <a
          key={"nUDR 질문봇"}
          className={styles.category} href={`/dashboard/nudr`}>
          {"nUDR 질문하기"}
        </a>
      </div>
    </main>
  );
};

export default Home;
