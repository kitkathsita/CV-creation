import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faGitHub, faLinkedIn, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header({ Name, Location, github, linkedIn, email, cellphone }) {
	return (
		<div className='header'>
			<div id="name">{Name}</div>
			<div className='location'>
				<FontAwesomeIcon icon={faLocationDot} id='iconLoc' />
				<div id='loc'>{Location}</div>
			</div>
			<div id='contactInfo'>
				<FontAwesomeIcon icon={faGitHub} />
				<div>{github}</div>
				<FontAwesomeIcon icon={faLinkedIn} />
				<div>{linkedIn}</div>
				<FontAwesomeIcon icon={faEnvelope} />
				<div>{email}</div>
				<FontAwesomeIcon icon={faPhone} />
				<div>{cellphone}</div>
			</div>
		</div>
	)
}