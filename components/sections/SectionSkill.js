function Skills({ group, skills }) {
	return (
		<div className="groupin">
			<div className="group">{group}</div>
			{
				skills.map(skill_ => {
					return <div className="skill">{skill_}-</div>
				})
			}
		</div>
	)
}

export default function SectionSkill({ sectionName, skills }) {
	let i = 0
	return (
		<>
			<div id="section">{sectionName}</div>
			{
				skills.map(skill => {
					i++;
					return <Skills key={i} group={skill.group} skills={skill.skill}></Skills>
				})
			}
		</>
	)
}
