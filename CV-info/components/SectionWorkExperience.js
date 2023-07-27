import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";

export default function SectionWorkExperience({ position, company, date, description='', task=''}) {
  return (
    <div className="WEInfo">
      <div className="WEInfo_">
        <div>{position} - {company}</div>
        <div>{date}</div>
        <div>{description}</div>
        <div>{task}</div>
      </div>
      <BsFillTrash3Fill className="IconTrash"/>
      <BsPencilSquare className="IconEdit"/>
    </div>
  )
}