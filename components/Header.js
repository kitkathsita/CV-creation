import React from 'react'
import { BsFillGeoFill, BsEnvelopeAtFill, BsTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header({ Name, Location, github, linkedIn, email, cellphone }) {
	return (
		<div className='header'>
			<div id="name">{Name}</div>
			<div className='location'>
				<div className='iconContainer'>
					<BsFillGeoFill className='icon'></BsFillGeoFill>
				</div>
				<div id='loc'>{Location}</div>
			</div>
			<div id='contactInfo'>
				<div className='iconContainer'>
					<BsGithub className='icon'></BsGithub>
				</div>
				<div className='infoCont'>{github}</div>
				<div className='iconContainer'>
					<BsLinkedin className='icon'></BsLinkedin>	
				</div>
				<div className='infoCont'>{linkedIn}</div>
				<div className='iconContainer'>
					<BsEnvelopeAtFill className='icon'></BsEnvelopeAtFill>
				</div>
				<div className='infoCont'>{email}</div>
				<div className='iconContainer'>
					<BsTelephoneFill className='icon'></BsTelephoneFill>
				</div>
				<div className='infoCont'>{cellphone}</div>
			</div>
		</div>
	)
}