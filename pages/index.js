import Head from "next/head";
import Timer from "./components/timer";
import Quote from "./components/quote";

export default function Home() {
  return (
    <div className="container">
      <Head>
            <title>Impromptu Timer</title>
            {/* <link rel="icon" href="/home.png" /> */}
      </Head>


      <main>

        <p className="header">
          IMPROMPTU <strong>TIMER</strong>
        </p>
        <Quote />
        <Timer />
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
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .header {
          color: #181533;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          background-color: #778bd9;
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
