import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";

function Skills({ group, skills }) {
	let a = skills.length
	let k = 0
	return (
		<div className="groupin2">
			<div className="group2">{group}</div>
			{
				skills.map(skill_ => {
					k++
					return k === a ? <div key={k+'sks'} className="skill">{skill_}&nbsp;</div> : <div key={k+'sks'} className="skill">{skill_},&nbsp;</div>
				})
			}
		</div>
	)
}

export default function SectionSkill({ sectionName, skills }) {
  let i = 0
  return (
    <div className="InfoCont">
      <div className="WEInfo_">
        <div>{sectionName}</div>
        {
          skills.map(skill => {
            i++;
            return <Skills key={i+'sk'} group={skill.group} skills={skill.skill}></Skills>
          })
        }
      </div>
      <BsFillTrash3Fill className="IconTrash"/>
      <BsPencilSquare className="IconEdit"/>
    </div>
  )
}