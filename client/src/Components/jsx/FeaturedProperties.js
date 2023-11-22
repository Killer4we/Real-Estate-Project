import { Fragment, useState,useEffect } from "react";
import {Link} from "react-router-dom";
import imag from "../../images/background.jpg"
import {FaBed,FaSquareFull} from "react-icons/fa";
import {request} from "../../util/fetchAPI";
import "../css/featuredProperties.css";
function FeaturedProperties(){
    const [featuredProperties,setFeaturedProperties] = useState([])
    useEffect(()=>{
        const fetchFeatured = async()=> {
            try{
                const data = await request('/property/find/featured','GET')
                setFeaturedProperties(data)
            }
            catch(error){
                console.error(error.message);
            }
        }
        fetchFeatured();
        console.log(featuredProperties);
    },[])
    return (
        <Fragment>
            {/* <h1>This is the section for Featured Properties</h1> */}
            <div className="container">
                <div className="wrapper">
                    <div className="titles">
                        <h5>Properties you may like</h5>
                        <h2>Our Featured Properties</h2>
                    </div>
                    <div className="featuredProperties">
                        {featuredProperties?.map((property)=>(
                            <div key={property.to_id} className="featuredProperty">
                                <Link to={`/propertyDetail/${property._id}`} className="imgContainer" >
                                    <img src={property.img ? `http://localhost:5000/images/${property.img}`: imag} alt="random-image"/>
                                </Link>
                                <div className="details">
                                    <div className="priceAndOwner">
                                        <span className="price">${property?.price}</span>
                                    </div>
                                    <div className="moreDetails">
                                        <span>{property?.bed} beds<FaBed className = "icon"/></span>
                                        <span>{property?.sqmeters} square meters<FaSquareFull className = "icon"/></span>
                                    </div>
                                    <div className="desc">
                                        {property?.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default FeaturedProperties;