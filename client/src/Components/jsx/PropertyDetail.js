import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { request } from '../../util/fetchAPI';
import { Link, useParams } from 'react-router-dom';
import '../css/propertyDetail.css';
import { FaBed, FaSquareFull } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';

const PropertyDetail = () => {
  const { token, user } = useSelector((state) => state.auth)
  const [propertyDetail, setPropertyDetail] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const { id } = useParams();
  const formRef = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await request(`/property/find/${id}`, 'GET');
        setPropertyDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleCloseForm = () => {
    setShowForm(false)
    setTitle("")
    setDesc("")
  }

  const handleContactOwner = async(e) => {
    e.preventDefault()

    //to send email logic
    emailjs.sendForm('service_bc94kbe', 'template_q10xplb', formRef.current, '4yXeJZOqig0kxqEVF')
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
    setShowForm(false);
  
  }

  const handleDelete = async () => {
    try {
      await request(`/property/${id}`, 'DELETE', { 'Authorization': `Bearer ${token}` })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          {propertyDetail && (
              <img className='imgg' src={`http://localhost:5000/images/${propertyDetail?.img}`} />
          )}
        </div>
        <div className="right">
          <h3 className='title'>
            Title: {`${propertyDetail?.title}`}
            {user?._id === propertyDetail?.currentOwner?._id && (
              <div className='controls'>
                <Link to={`/updateProperty/${id}`}>Update</Link>
                <button className='delete' onClick={handleDelete}>Delete</button>
              </div>)
            }
          </h3>
          <div className='details'>
            <div className='typeAndContinent'>
                <div>Type: <span>{`${propertyDetail?.type}`}</span></div>
                <div>Continent: <span>{`${propertyDetail?.continent}`}</span></div>
            </div>
            <div className='priceAndOwner'> 
                <span className='price'><span>Price: $ </span>{`${propertyDetail?.price}`}</span>
            </div>
            <div className='moreDetails'>
              <span>{propertyDetail?.bed} beds<FaBed className='icon' /></span>
              <span>{propertyDetail?.sqmeters} square meters <FaSquareFull className='icon' /></span>
            </div>
          </div>
          <p className='desc'>
            Desc: <span>{`${propertyDetail?.desc}`}</span>
          </p>
          <button onClick={() => setShowForm(true)} className='contactOwner'>
            Contact Owner
          </button>
        </div>
      </div>
      {
        showForm && (
          <div className='contactForm' onClick={handleCloseForm}>
            <div className='contactFormWrapper' onClick={(e) => e.stopPropagation()}>
              <h2>Send Email to Owner</h2>
              <form onSubmit={handleContactOwner} ref={formRef}>
                <input type="text" name="from_name" placeholder='Name'/>
                <input type="email" name="from_email" placeholder='Email'/>
                <input type="text" name="message" placeholder='Message'/>
                <input className='submit-btn' type="submit" value="Contact Us" />
              </form>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default PropertyDetail;
