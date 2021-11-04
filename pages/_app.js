import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
