import React from 'react'
import PropTypes from "prop-types";
import './Profile.css'
export const Profile = (props) => {

 
  return (
<div className='background'>
<h1 style={{color:"white", textAlign:'center'}}>{props.fullName}</h1>
<h5 className='bio'>{props.bio}</h5>
<h2 className='profession'>{props.profession}</h2> 
{props.children}
<br/><br/>
{props.btnShow ? <button className='button' onClick={()=>props.hazem(props.fullName)}>Affiche name</button> : null}


</div>  
)
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
}


