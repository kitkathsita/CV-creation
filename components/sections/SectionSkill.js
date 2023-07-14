function Skills({ group, skills }) {
    return (
        <div className="groupin">
            <div className="group">{group}</div>
            <div className="skill">{skills}</div>
        </div>
    )
}

export default function SectionSkill({sectionName, group, skills }) {
    return (
        <>
            <div id="section">{sectionName}</div>
            <Skills group={group} skills={skills}></Skills>
        </>
    )
}
