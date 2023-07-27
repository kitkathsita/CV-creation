'use client'
import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import '../app/globals.css';
import Info from '../info.json';
import ReactToPrint from "react-to-print";
import { BsPrinter, BsDownload } from "react-icons/bs";


const sectionMock = ["PROFILE", 'WORK EXPERIENCE', 'LANGUAGES', 'EDUCATION', 'SKILLS'];

const { name, lastName, location } = Info
const { gitHub:github , linkedIn, cellPhoneNumber:cellphone, email } = Info.contactInfo

export default function CVRender() {
  let i = 0
  let componentRef = useRef();
  return (
    <>
      <div id='cvContainer'>
        <ReactToPrint
            trigger={() => <button id='printButton'><BsDownload className='printer'></BsDownload></button>}
            content={() => componentRef}
            />
        <div id='page' ref={(el) => (componentRef = el)}>
          <div id='margin'>
            <Header Name={name+' '+lastName} Location={location} github={github} linkedIn={linkedIn} email={email} cellphone={cellphone}></Header>
            {
              sectionMock.map(section => {
                i++
                return <Section key={i+'s'} section={section} information={Info}></Section>
              })
            }
          </div>
        </div>  
      </div>
    </>
  )
}

/* export default function Home() {
  let i = 0;
  const [sections, setSections] = useState(sectionMock);

  const addSection = () => {
    const newSection = 'NEW SECTION';
    setSections(prevSections => [...prevSections, newSection]);
  }
  
  return (
    <>
      <Header
        Name={'Katherin Paola Gómez'}
        Location={'Bucaramanga, Colombia'}
        github={'@kitkathsita'}
        linkedIn={'kitkathsita'}
        email={'katherinpgr@gmail.com'}
        cellphone={'+57 30107995846'}
      />
      {sections.map(section => {
        i++;
        return <Section key={i} sectionName={section} />;
      })}
      <AddButton clickFunction={addSection} />
    </>
  );
} */

