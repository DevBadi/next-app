import Head from "next/head";
import useSWR from "swr";
import styles from "@/styles/Home.module.css";

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => {
  return fetch(...args).then((res) => res.json());
};

export default AllPosts;

type MyObject = {
  postID: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
};

function AllPosts() {
  const { data, error } = useSWR("/api/gorest-example-posts", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return (
    <>
      <Head>
        <title>All posts from gorest example API</title>
        <meta name="description" content="All posts from gorest example API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <p>{JSON.stringify(data)}</p>
          <br></br>
          <br></br>

          {data.message.map((obj: MyObject) => (
            <div key={obj.postID}>
              {" "}
              {obj.postID} | {obj.title} <pre>{obj.body}</pre>{" "}
              <pre>createdAt: {obj.createdAt}</pre>{" "}
              <pre>updatedAt: {obj.updatedAt}</pre>
              <br></br>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
