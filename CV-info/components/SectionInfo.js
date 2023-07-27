import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";

export default function SectionInfo({ profile }) {
  return (
    <div className="InfoCont">
      <div className="WEInfo_">
      <div>{profile}</div>
      </div>
      <BsFillTrash3Fill className="IconTrash"/>
      <BsPencilSquare className="IconEdit"/>
    </div>
  )
}