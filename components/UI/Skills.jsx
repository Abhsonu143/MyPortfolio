import React from 'react';
import styles from "../../styles/Skills.module.css";
import programming from "../data/programming";
import development from '../data/devlopment';
import database from '../data/database';
import tool from '../data/tool';
import skill from '../data/skill';
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.category}><h3 className={styles.header}>Soft</h3></div>
            <div className={styles.skillcontainer}>
                {skill.map((item)=>(
                    <SkillCard key={item.id} title={item.title} img={item.img}/>
                ))}
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.category}><h3 className={styles.header}>Programming</h3></div>
            <div className={styles.skillcontainer}>
                {programming.map((item)=>(
                    <SkillCard key={item.id} title={item.title} img={item.img}/>
                ))}
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.category}><h3 className={styles.header}>Development</h3></div>
            <div className={styles.skillcontainer}>
                {development.map((item)=>(
                    <SkillCard key={item.id} title={item.title} img={item.img}/>
                ))}
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.category}><h3 className={styles.header}>DataBase</h3></div>
            <div className={styles.skillcontainer}>
                {database.map((item)=>(
                    <SkillCard key={item.id} title={item.title} img={item.img}/>
                ))}
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.category}><h3 className={styles.header}>Tool</h3></div>
            <div className={styles.skillcontainer}>
                {tool.map((item)=>(
                    <SkillCard key={item.id} title={item.title} img={item.img}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills;