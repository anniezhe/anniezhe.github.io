import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Image
            src="/annie_logo.svg"
            alt="Annie He's Logo"
            className={styles.vercelLogo}
            width={100}
            height={70}
            priority
          />
        </div>
      </div>

      <div className={styles.center}>
        <h1>COMING SOON!</h1>
      </div>
        <div className={styles.grid}>
          <a
            href="https://www.linkedin.com/in/anniezhe0"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p>View all of my developments including my website.</p>
          </a>

          <a
            href="https://github.com/anniezhe0/anniezhe0.github.io"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              GitHub <span>-&gt;</span>
            </h2>
            <p>View my progress for building my website.</p>
          </a>
        </div>
    </main>
  );
}
