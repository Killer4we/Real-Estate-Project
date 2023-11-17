import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../redux/authSlice'
import { request } from '../../util/fetchAPI'
import { AiOutlineClose, AiOutlineFileImage } from 'react-icons/ai'

const Navbar = () => {
  const [showForm, setShowForm] = useState(false)
  const [state, setState] = useState({})
  const [photo, setPhoto] = useState("")
  const {user, token} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleState = (e) => {
    setState(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  
  const handleCloseForm = () => {
    setShowForm(false)
    setPhoto(null)
    setState({})
  }

  const handleListProperty = async (e) => {
    e.preventDefault()
    let filename = null
    if (photo) {
      const formData = new FormData()
      filename = crypto.randomUUID() + photo.name
      formData.append('filename', filename)
      formData.append('image', photo)

      await request("/upload/image", 'POST', {}, formData, true)
    } else {
      return
    }
    try {

      const options = {
        "Authorization": `Bearer ${token}`,
        "Content-Type": 'application/json'
      }

      const data = await request("/property", 'POST', options, { ...state, img: filename })
      console.log(data)
      handleCloseForm()
      //navigate(`/signin`) //propertyDetail/${newProperty._id}
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          StellarSpace
        </Link>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#section1">Properties</a></li>
          <li><a href="#section2">Featured</a></li>
          <li><a href="#section3">View</a></li>
          <li><a href="#contact">Account</a></li>
        </ul>
        <div className='signinup'>
          {
          !user ?
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>
          : 
          <>
            <span>{user.username}</span>
            <Link onClick={() => setShowForm(true)} className='addProp'>Add</Link>
            <span onClick={handleLogout} className='logout'>Log Out</span>
          </>
          }
        </div>
      </div>
      {showForm && (
  <div
    id="listPropertyForm"
    onClick={handleCloseForm}
  >
    <div
      id="listPropertyWrapper"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>List Property</h2>
      <form onSubmit={handleListProperty}>
        <input
          value={state?.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleState}
        />
        <input
          value={state?.type}
          type="text"
          placeholder="Type"
          name="type"
          onChange={handleState}
        />
        <input
          value={state?.desc}
          type="text"
          placeholder="Desc"
          name="desc"
          onChange={handleState}
        />
        <input
          value={state?.continent}
          type="text"
          placeholder="Continent"
          name="continent"
          onChange={handleState}
        />
        <input
          value={state?.price}
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleState}
        />
        <input
          value={state?.sqmeters}
          type="number"
          placeholder="Sq. meters"
          name="sqmeters"
          onChange={handleState}
        />
        <input
          value={state?.beds}
          type="number"
          placeholder="Beds"
          name="beds"
          step={1}
          min={1}
          onChange={handleState}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '50%' }}>
          <label htmlFor="photo">Property picture <AiOutlineFileImage /></label>
          <input
            type="file"
            id="photo"
            style={{ display: 'none' }}
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          {photo && <p>{photo.name}</p>}
        </div>
        <button>List property</button>
      </form>
      <AiOutlineClose onClick={handleCloseForm} id="removeIcon" />
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
