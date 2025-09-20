import React , {useEffect} from "react";
// import Navbar from "./Navbar";
import Footer from "./Footer";
import NewNavbar from "./NewNavbar";

function Layout({ children }) {
  useEffect (() => {
   window.scrollTo(0,0)
  },[])
  return (
    <div>
      {/* <Navbar /> */}
      <NewNavbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
