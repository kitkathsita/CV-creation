'use client'
import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import './globals.css';
import Info from '../info.json';
import ReactToPrint from "react-to-print";


const sectionMock = ["PROFILE", 'WORK EXPERIENCE', 'LANGUAGES', 'EDUCATION', 'SKILLS'];

const { name, lastName, location } = Info
const { gitHub:github , linkedIn, cellPhoneNumber:cellphone, email } = Info.contactInfo

export default function Home() {
  let i = 0
  let componentRef = useRef();
  return (
    <>
      <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef}
      />
      <div id='page' ref={(el) => (componentRef = el)}>
        <div id='margin'>
          <Header Name={name+' '+lastName} Location={location} github={github} linkedIn={linkedIn} email={email} cellphone={cellphone}></Header>
          {
          sectionMock.map(section => {
            return <Section section={section} information={Info}></Section>
          })
          }
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

