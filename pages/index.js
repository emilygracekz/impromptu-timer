import Head from "next/head";
import Timer from "./components/timer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Impromptu Timer</title>
        <link rel="icon" href="/home.png" />
      </Head>

      <main>
        <p className="header">
          IMPROMPTU <strong>TIMER</strong>
          <Timer />
        </p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .app {
          text-align: center;
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }

        .time {
          font-size: 3rem;
          padding: 2rem;
        }

        .button {
          padding: 0.6rem 1.5rem;
          margin: 0.4rem;
          border-radius: 3px;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.8rem;
          border-style: groove;
          background-color: #fc9292;

        }

        .button:focus {
          outline-width: 0;
        }

        .button-primary:hover {
          background-color: #2641d4;
          border: 1px solid #1b1f2b;
        }

        .button-primary-active {
          border: 1px solid #152684;
          background-color: #fc9292;

        }

        .button-primary-inactive {
          border: 1px solid #152684;
          background-color: #fc9292;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header {
          padding-top: 20px;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #d6e06b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
