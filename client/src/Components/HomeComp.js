import { Fragment } from "react";
import Navbar from "../Components/jsx/Navbar";
import Footer from "../Components/jsx/Footer";
// import Newsletter from "./jsx/Newsletter";
// import PopularProperties from "./jsx/PopularProperties";
// import FeaturedProperties from "./jsx/FeaturedProperties";
// This section is for home page

const HomeComp = () =>{
    return(
        <Fragment>
            <Navbar/>
            {/* <PopularProperties/> */}
            {/* <div><h1>HELLO THERE</h1></div> */}
            {/* <FeaturedProperties/> */}
            {/* <Newsletter/> */}
            <Footer/>
        </Fragment>
    );
}
export default HomeComp;