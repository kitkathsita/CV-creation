import SectionDesc from '@/components/sections/SectionDesc';
import SectionEduc from '@/components/sections/SectionEduc';
import SectionLangue from '@/components/sections/SectionLangue';
import SectionSkill from '@/components/sections/SectionSkill';
import SectionWE from '@/components/sections/SectionWE';
import Info from '../info.json';

export default function Section({ section }) {
	const desc = Info.profileDescription
	const languagesSpoken = Info.languages
	const skills = Info.skills
	const experience = Info.workExperience
	const educationDegrees = Info.education

	if (section === 'PROFILE') {
		return <SectionDesc sectionName={'PROFILE'} profile={desc}></SectionDesc>
	} else if (section === 'WORK EXPERIENCE') {
		return <SectionWE sectionName={'WORK EXPERIENCE'} position={'Customer service agent'} role={experience}></SectionWE>
	} else if (section === 'LANGUAGES') {
		return <SectionLangue sectionName={'LANGUAGES'} languages={languagesSpoken}></SectionLangue>
	} else if (section === 'EDUCATION') {
		return <SectionEduc sectionName={'EDUCATION'} education={educationDegrees}></SectionEduc>
	} else if (section === 'SKILLS') {
		return <SectionSkill sectionName={'SKILLS'} skills={skills}></SectionSkill>
	}
}
    