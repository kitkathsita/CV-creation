import React from 'react'
import { BsFillGeoFill, BsEnvelopeAtFill, BsTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header({ Name, Location, github, linkedIn, email, cellphone }) {
	return (
		<div className='header'>
			<div id="name">{Name}</div>
			<div className='location'>
				<BsFillGeoFill className='icon'></BsFillGeoFill>
				<div id='loc'>{Location}</div>
			</div>
			<div id='contactInfo'>
				<BsGithub className='icon'></BsGithub>
				<div>{github}</div>
				<BsLinkedin className='icon'></BsLinkedin>
				<div>{linkedIn}</div>
				<BsEnvelopeAtFill className='icon'></BsEnvelopeAtFill>
				<div>{email}</div>
				<BsTelephoneFill className='icon'></BsTelephoneFill>
				<div>{cellphone}</div>
			</div>
		</div>
	)
}