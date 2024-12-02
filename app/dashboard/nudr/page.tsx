"use client";

import React from "react";
import styles from "../page.module.css";

const Home = () => {
  const categories = {
    "위젯": "widget",
    All: "all",
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        nUDR 장애대응시스템이 궁금하시군요!
      </div>
      <div className={styles.subtitle}>
        그 중 자세히 알고싶은 항목을 선택해주세요 :)
      </div>
      <div className={styles.container}>        
      <a
            key={"위젯"}
            className={styles.category} href={`/dashboard/nudr/widget`}>
            {"nUDR 위젯 종류, 설명이 필요해요."}
          </a>
          <a
            key={"nUBoard 질문봇"}
            className={styles.category} href={`/dashboard/nuboard`}>
            {"nUBoard 질문봇을 불러주세요!"}
          </a>
      </div>
    </main>
  );
};

export default Home;
