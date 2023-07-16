import SectionDesc from '@/components/sections/SectionDesc';
import SectionEduc from '@/components/sections/SectionEduc';
import SectionLangue from '@/components/sections/SectionLangue';
import SectionSkill from '@/components/sections/SectionSkill';
import SectionWE from '@/components/sections/SectionWE';

export default function Section({ section, information }) {
	const { profileDescription:desc, languages:languagesSpoken, skills, workExperience:experience, education:educationDegrees } = information

	switch (section) {
		case 'PROFILE':
			return <SectionDesc sectionName={'PROFILE'} profile={desc}></SectionDesc>
			break
		case 'WORK EXPERIENCE':
			return <SectionWE sectionName={'WORK EXPERIENCE'} position={'Customer service agent'} role={experience}></SectionWE>
			break
		case 'LANGUAGES':
			return <SectionLangue sectionName={'LANGUAGES'} languages={languagesSpoken}></SectionLangue>
			break
		case 'EDUCATION':
			return <SectionEduc sectionName={'EDUCATION'} education={educationDegrees}></SectionEduc>
			break 
		case 'SKILLS':
			return <SectionSkill sectionName={'SKILLS'} skills={skills}></SectionSkill>
			break 		
	}
}
    