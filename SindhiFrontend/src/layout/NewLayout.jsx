import React , {useEffect} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function NewLayout({ children }) {
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

export default NewLayout;
