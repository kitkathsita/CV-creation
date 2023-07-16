function Description({ profile }) {
	return (
		<>
			<div className="description">{profile}</div>
		</>
	)
}

export default function SectionDesc({ sectionName, profile }) {
	return (
		<>
			<div id="section">{sectionName}</div>
			<Description profile={profile}></Description>
		</>
	)
}