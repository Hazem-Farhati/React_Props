import React from 'react'
import PropTypes from "prop-types";
import './Profile.css'
export const Profile = (props) => {
  const handleClick = (props) => {
    alert('hello'+ props.fullName)
  }
 
  return (
<div className='background'>
<h1 className='fullName'>{props.fullName}</h1>
<h5 className='bio'>{props.bio}</h5>
<h2 className='profession'>{props.profession}</h2> 
<br/><br/>
<button className='button' onClick={handleClick}>Affiche name</button>

</div>  
)
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}

export const Image = (props) => {
  return (
    
<image >{props.children}</image>
  )
}
