export default function Education({ year, degree, school }) {
    return (
        <div className="addEducation">
            <div className="year">{year}</div>
            <div className="degree">{degree} - </div>
            <div className="school">{school}</div>
        </div>
    )
}