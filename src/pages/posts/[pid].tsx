import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default Post;

function Post() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>{`{pid} | Next App`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Post ID:&nbsp;
            <code className={styles.code}>{pid}</code>
          </p>
        </div>

        <div className={styles.grid}>
          <Link href="/" className={styles.card} rel="noopener noreferrer">
            <h3 className={inter.className}>
              Home <span>-&gt;</span>
            </h3>
          </Link>
          <Link href="/about" className={styles.card} rel="noopener noreferrer">
            <h3 className={inter.className}>
              About <span>-&gt;</span>
            </h3>
          </Link>
        </div>
      </main>
    </>
  );
}
