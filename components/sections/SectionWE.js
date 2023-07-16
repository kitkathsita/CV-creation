function WorkExperience({ position, company, period, jobDescription='', tasks=[], place}) {
	return (
		<>
		<PosEnterprise position={position} company={company} period={period}></PosEnterprise>
		<Location loc={place}></Location>
		<JobDescription description={jobDescription}></JobDescription>
		<TasksOfJob taskList={tasks}></TasksOfJob>
		</>
	)
}

function PosEnterprise({ position, company, period }) {
	return (
		<div className='datePos'>
			<div className='posEnter'>{position} - {company}</div>
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

function TasksOfJob({ taskList }) {
	return (
		<ol className="taskJob">
			{taskList.map(task => {
				return <li>{task}</li>
			})
			}
		</ol>
	)
}

export default function SectionWE({sectionName, role }) {
	let i = 0
	return (
		<>
			<div id="section">{sectionName}</div>
			{
				role.map(job => {
					i++
					return <WorkExperience position={job.position} company={job.company} period={job.period} jobDescription={job.jobDescription} tasks={job.task} place={job.place}></WorkExperience>
				})
			}
		</>
	)
}