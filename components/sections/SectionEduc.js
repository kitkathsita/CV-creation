function Education({ year, degree, school }) {
	return (
		<div className="addEducation">
			<div className="year">{year}</div>
			<div className="degree">{degree} - </div>
			<div className="school">{school}</div>
		</div>
	)
}

export default function SectionEduc({ sectionName, education }) {
	let i = 0
	return (
		<>
			<div id="section">{sectionName}</div>
			{
				education.map(degree => {
					i++
					return <Education year={degree.year} degree={degree.degree} school={degree.school}></Education>
				})
			}
		</>
	)
}   