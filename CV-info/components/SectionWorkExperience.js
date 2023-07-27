import { BsFillTrash3Fill } from "react-icons/bs";

export default function SectionWorkExperience({ position, company, date, description='', task=''}) {
  return (
    <div className="WEInfo">
      <div className="WEInfo_">
        <div>{position}-{company}</div>
        <div>{date}</div>
        <div>{description}</div>
        <div>{task}</div>
      </div>
      <div className="WEInfoIcons">
        <BsFillTrash3Fill/>
      </div>
    </div>
  )
}