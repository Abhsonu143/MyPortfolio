import styles from "../../styles/SkillCard.module.css";
import Image from "next/image";


const SkillCard = ({title,img}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imgItem}>
            <Image src={img} alt="skill" width="80px" height="80px"/>
        </div>
        <div className={styles.title}>
            {title}
        </div>
    </div>
  )
}

export default SkillCard