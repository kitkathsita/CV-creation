import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faGitHub, faLinkedIn, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { GithubIcon } from '../public/github.svg'

export default function Header({ Name, Location, github, linkedIn, email, cellphone }) {
	return (
		<div className='header'>
			<div id="name">{Name}</div>
			<div className='location'>
			<i class="fi fi-ss-marker"></i>
				<div id='loc'>{Location}</div>
			</div>
			<div id='contactInfo'>
				<div>{github}</div>
				<div>{linkedIn}</div>
				<div>{email}</div>
				<div>{cellphone}</div>
			</div>
		</div>
	)
}