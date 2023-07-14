function WorkExperience({ position, enterprise, period, jobDescription='', tasks='', place}) {
    return (
        <>
        <PosEnterprise position={position} enterprise={enterprise} period={period}></PosEnterprise>
        <Location loc={place}></Location>
        <JobDescription description={jobDescription}></JobDescription>
        </>
    )
}

function PosEnterprise({ position, enterprise, period }) {
    return (
        <div className='datePos'>
            <div className='posEnter'>{position} - {enterprise}</div>
            <div className='date'>{period}</div>
        </div>
    )
}

function Location({ loc }) {
    return (
        <div className='loc'>{loc}</div>
    )
}

function JobDescription({ description }) {
    return (
        <div className='description'>{description}</div>
    )
}

export default function SectionWE({sectionName, position, enterprise, period, jobDescription, tasks, place}) {
    return (
        <>
            <div id="section">{sectionName}</div>
            <WorkExperience position={position} enterprise={enterprise} period={period} jobDescription={jobDescription} tasks={tasks} place={place}></WorkExperience>
        </>
    )
}