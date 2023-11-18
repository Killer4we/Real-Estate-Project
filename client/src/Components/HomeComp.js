import { Fragment } from "react";
import Navbar from "../Components/jsx/Navbar";
import Footer from "../Components/jsx/Footer";
import Newsletter from "./jsx/Newsletter";
import HomePage from "./jsx/HomePage";
import PopularProperties from "./jsx/PopularProperties";
import FeaturedProperties from "./jsx/FeaturedProperties";
// This section is for home page

const HomeComp = () =>{
    return(
        <Fragment>
            <Navbar/>
            <HomePage/>
            <PopularProperties/>
            <FeaturedProperties/>
            <Newsletter/>
            <Footer/>
        </Fragment>
    );
}
export default HomeComp;