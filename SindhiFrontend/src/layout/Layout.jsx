import React , {useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  useEffect (() => {
   window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
