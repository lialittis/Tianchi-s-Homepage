import React, { Component } from "react";
import styles from "./experience.module.scss";
import { Link } from "react-router-dom";

export default ({ dataSource }) => {
  return (
    <div className={styles.experience}>
      <ul>
        {dataSource &&
          dataSource.map((item, id) => (
            <li key={id}>
              {/* <a> */}
              <div className={styles.logo}>
                <img src={item.logo} />
              </div>

              <div className={styles.brief}>
                <h3>{item.institut}</h3>
                <h4>{item.role}</h4>
                <p>{item.brief}</p>
                <div className={styles.labels}>
                  {item.labels &&
                    item.labels.map((i) => <span key={i}>{i}</span>)}
                </div>
              </div>
              {/* </a> */}
            </li>
          ))}
      </ul>
    </div>
  );
};
