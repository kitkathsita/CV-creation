function Languages({ language, level }) {
    return (
        <div className="idiom">
            <div className="language">{language}</div>
            <div className="level">{level}</div>
        </div>
    )
}

export default function SectionLangue({ language, level, sectionName }) {
    return (
        <>
            <div id="section">{sectionName}</div>
            <Languages language={language} level={level}></Languages>
        </>
    )
}