function Languages({ language, level }) {
	return (
		<div className="idiom">
			<div className="language">{language}</div>
			<div className="level">{level}</div>
		</div>
	)
}

export default function SectionLangue({ sectionName, languages }) {
	let i = 0
	return (
		<>
			<div id="section">{sectionName}</div>
			{
				languages.map(lang => {
					i++
					return <Languages key={i} language={lang.language} level={lang.level}></Languages>
				})
			}
		</>
	)
}   
