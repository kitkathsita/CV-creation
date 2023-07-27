function Skills({ group, skills }) {
	let a = skills.length
	let k = 0
	return (
		<div className="groupin">
			<div className="group">{group}</div>
			{
				skills.map(skill_ => {
					k++
					return k === a ? <div key={k+'sks'} className="skill">{skill_}&nbsp;</div> : <div key={k+'sks'} className="skill">{skill_},&nbsp;</div>
				})
			}
		</div>
	)
}

export default function SectionSkill({ skills }) {
	let i = 0
	return (
		<>
			{
				skills.map(skill => {
					i++;
					return <Skills key={i+'sk'} group={skill.group} skills={skill.skill}></Skills>
				})
			}
		</>
	)
}
