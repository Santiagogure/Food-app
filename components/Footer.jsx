import Image from "next/image";
import GithubIcon from "../public/img/github-mark-white.png";
import LinkedinIcon from "../public/img/LI-In-Bug.png";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>ORDER NOW!</h1>
          <h3 className={styles.motto}>Numbers:</h3>
          <h2 className={styles.motto}>4360-8403</h2>
          <h2 className={styles.motto}>4034-4230</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Calle Uruguay 765
            <br /> Ciudad Autónoma de Buenos Aires,
            <br /> C1015ASN
          </p>
          <p className={styles.text}>
            Avenida San Martín 1250
            <br /> Mendoza, 85022
            <br /> 5500
          </p>
          <p className={styles.text}>
            Calle Mitre 950 S2000ARH
            <br /> Rosario, Santa Fe
            <br /> S2000ARH
          </p>
          <p className={styles.text}>
            Avenida Colón 651
            <br /> Mar del Plata, Buenos Aires,
            <br /> B7600FTJ
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10:30 – 23:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 23:00
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CONTACT</h1>
          <div className={styles.icons}>
            <Link href="https://github.com/Santiagogure" passHref>
              <Image className={styles.icon} src={GithubIcon} alt="github" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/santiago-gurevich/"
              passHref
            >
              <Image
                className={styles.icon}
                src={LinkedinIcon}
                alt="linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
