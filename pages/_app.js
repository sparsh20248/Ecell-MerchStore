import "../styles/globals.css";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import React from "react";

// eslint-disable-next-line
import "swiper/css/bundle";
import "../styles/productpage.css";
function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="bg-black text-white">
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
