import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      hello
      <style jsx global>{`
        body {
          background-color: #aaaaaa;
        }
      `}</style>
    </>
  );
}
