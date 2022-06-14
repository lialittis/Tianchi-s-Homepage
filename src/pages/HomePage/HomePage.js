import React, { Component } from "react";
import styles from "./home.module.scss";
import WorkLists from "../../components/WorkLists";
import workData from "../works.json";
import experienceData from "../experience.json";
import Experience from "../../components/Experience";

const HomePage = () => {
  return (
    <div className={styles.wrap}>
      {/* Personal Profile */}

      <section className={styles.brief}>
        <img src={require("../../assets/images/brief.jpg")} />
        <h2>Tianchi YU</h2>
        <ul>
          <li>security researcher</li>
          <li>software engineer</li>
          <li>machine learning lover</li>
        </ul>

        <p>
          I research privacy-preserving computing, cryprography and data
          privacy/security.
        </p>
        <p>
          I love using technology in creative contents and I like developing
          softwares.
        </p>
        <p>
          I am doing final year internship and my master thesis in SAP Labs
          France, on the topic of{" "}
          <b>Security of Distributed Machine Learning</b>
        </p>
        <p>Contact me at firstname.lastname@sap.com</p>
      </section>

      {/* Education Background and Some experience */}
      <section className={styles.experience}>
        <div className={styles.title}>
          <h3>Background & Experience </h3>
          <p>Brief Education and Professional Experience </p>
        </div>

        <Experience dataSource={experienceData.data} />
      </section>

      {/* A List of Work */}
      <section className={styles.works}>
        <div className={styles.title}>
          <h3>A selection of work</h3>
          <p>You can find more in the work overview.</p>
        </div>

        <WorkLists dataSource={workData.data} />
      </section>
    </div>
  );
};

export default HomePage;
