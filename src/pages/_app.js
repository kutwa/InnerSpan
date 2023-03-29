import { useRouter } from 'next/router';
import Navbar from "./components/navbar.jsx";
import '../styles/style.css';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Component router={router} {...pageProps} />
    </Layout>
  );
}

export default App;
