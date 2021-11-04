import Nav from "components/Nav";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Component {...pageProps} />
      <footer className="h-20 bg-indigo-500"></footer>
    </div>
  );
}

export default MyApp;
