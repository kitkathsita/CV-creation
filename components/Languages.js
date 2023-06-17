export default function Languages({ language, level }) {
    return (
        <div className="idiom">
            <div className="language">{language}</div>
            <div className="level">{level}</div>
        </div>
    )
}