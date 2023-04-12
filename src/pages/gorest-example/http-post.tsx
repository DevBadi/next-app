import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { FormEvent, useState } from "react";

export default PageWithJSbasedForm;

function PageWithJSbasedForm() {
  const [loginStatus, setLoginStatus] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // handles the submit event on form submit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      // stop the form from submitting and refreshing the page
      event.preventDefault();

      // get data from the form
      const target = event.target as typeof event.target & {
        email: { value: string };
        password: { value: string };
      };
      const data = {
        email: target.email.value,
        password: target.password.value,
      };

      // send the data to the server in JSON format
      const JSONdata = JSON.stringify(data);

      // API endpoint where we send form data
      const endpoint = "/api/gorest-example-login";

      // form the request for sending data to the server
      const options = {
        // the method is POST because we are sending data
        method: "POST",
        // tell the server we're sending JSON
        headers: {
          "Content-Type": "application/json",
        },
        // body of the request is the JSON data we created above
        body: JSONdata,
      };

      // send the form data to our forms API on Vercel and get a response
      const response = await fetch(endpoint, options);
      setFormSubmitted(true);
      console.log(response.status);

      // get the response data from server as JSON
      // if server returns the name submitted, that means the form works
      const result = await response.json();
      console.log(result);

      // check loginStatus
      if (response.status === 200) {
        setLoginStatus("success");
      } else if (response.status === 401) {
        setLoginStatus("failed");
      } else {
        setLoginStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // render data
  return (
    <>
      <Head>
        <title>Send login data to gorest example API</title>
        <meta
          name="description"
          content="Send login data to gorest example API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          {formSubmitted && loginStatus === "success" && (
            <p>
              Login Successful!
              <br></br>
              <br></br>
            </p>
          )}
          {formSubmitted && loginStatus === "failed" && (
            <p>
              Login Failed! Please check your email and password.
              <br></br>
              <br></br>
            </p>
          )}

          {/* basic HTML form */}
          {(!formSubmitted || loginStatus === "failed") && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" required />
              <br></br>
              <br></br>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={5}
                title="Please enter a password that is at least 5 characters long."
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
                // title="Please enter a password that contains at least one digit, one lowercase letter, one uppercase letter, and one symbol, and is at least 8 characters long."
              />
              <br></br>
              <br></br>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
