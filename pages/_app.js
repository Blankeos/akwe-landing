import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="h-20 bg-red-200 sticky top-0">NAV</nav>
      <Component {...pageProps} />
      <footer className="h-20 bg-indigo-500"></footer>
    </div>
  );
}

export default MyApp;
