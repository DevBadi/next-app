import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default About;

function About() {
  return (
    <>
      <Head>
        <title>About | Next App</title>
        <meta name="description" content="About | Next App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/about.tsx</code>
          </p>
        </div>

        <div className={styles.grid}>
          <Link href="/" className={styles.card} rel="noopener noreferrer">
            <h3 className={inter.className}>
              Home <span>-&gt;</span>
            </h3>
          </Link>
        </div>
      </main>
    </>
  );
}
