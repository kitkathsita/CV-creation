function Skills({ group, skills }) {
    return (
        <div className="groupin">
            <div className="group">{group}</div>
            <div className="skill">{skills}</div>
        </div>
    )
}

export default function SectionSkill({sectionName, skills }) {
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
