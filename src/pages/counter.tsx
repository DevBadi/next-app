import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  counterValue,
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/slices/counterSlice";

const inter = Inter({ subsets: ["latin"] });

export default Counter;

function Counter() {
  const count = useSelector(counterValue);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Counter | Next App</title>
        <meta name="description" content="Counter | Next App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/counter.tsx</code>
          </p>
        </div>

        <div className={styles.content}>
          <p>Current value of the counter is: {count}</p>
          <br></br>
          <br></br>
          <button onClick={() => dispatch(increment())}>
            &nbsp;&nbsp;Increment&nbsp;&nbsp;
          </button>
          &nbsp;&nbsp;
          <button onClick={() => dispatch(decrement())}>
            &nbsp;&nbsp;Decrement&nbsp;&nbsp;
          </button>
          <br></br>
          <br></br>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            &nbsp;&nbsp;Increment By 5&nbsp;&nbsp;
          </button>
          &nbsp;&nbsp;
          <button onClick={() => dispatch(incrementByAmount(-5))}>
            &nbsp;&nbsp;Decrement By 5&nbsp;&nbsp;
          </button>
          <br></br>
          <br></br>
          <button onClick={() => dispatch(reset())}>
            &nbsp;&nbsp;Reset&nbsp;&nbsp;
          </button>
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
