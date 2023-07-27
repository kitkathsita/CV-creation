import { BsFillPlusSquareFill } from "react-icons/bs";

export default function SectionTitle({ sectionName }) {
  return (
    <>
      <div className="sectionName">
        <h1>{sectionName}</h1>
        <BsFillPlusSquareFill></BsFillPlusSquareFill>
      </div>
    </>
  )
}