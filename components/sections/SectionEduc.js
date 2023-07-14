function Education({ year, degree, school }) {
    return (
        <div className="addEducation">
            <div className="year">{year}</div>
            <div className="degree">{degree} - </div>
            <div className="school">{school}</div>
        </div>
    )
}

export default function SectionEduc({sectionName, year, degree, school}) {
    return (
        <>
            <div id="section">{sectionName}</div>
            <Education year={year} degree={degree} school={school}></Education>
        </>
    )
}