'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import SectionDesc from '@/components/sections/SectionDesc';
import SectionEduc from '@/components/sections/SectionEduc';
import SectionLangue from '@/components/sections/SectionLangue';
import SectionSkill from '@/components/sections/SectionSkill';
import SectionWE from '@/components/sections/SectionWE';
import Languages from '@/components/Languages';
import Skills from '@/components/Skills';
import AddButton from '@/components/AddButton';
import './globals.css';

const sectionMock = ["PROFILE", 'WORK EXPERIENCE', 'LANGUAGES', 'EDUCATION'];

const desc = "I'm a very passionate person, who loves helping others and learning new things. I like experimenting with new things that can improve my skills in life. I like cooking and baking, and my most recent passion is front-end development. I also like programming, reading and exercising. I'm learning react and next.js, and soon I will be starting a course for C\#."
const jobDesc = "Take calls from amazon customers and help them solving any issue related to services offered by Amazon. Escalate petitions and issues to managers. "
const task = ['Help students', 'Inventory of the lab material', 'Support teachers in the experiments', 'Make the different montages for the experiments']
const languagesSpoken = [
  {
    language: 'Spanish',
    level: 'Native'
  },
  {
    language: 'English',
    level: 'C1'
  },
  {
    language: 'French',
    level: 'A1'
  }
]

const skills = [
  {
    group: 'programming',
    skill: 'python, fortran, javascript'
  },
  {
    group:'microsoft',
    skill: 'word, excel, powerPoint'
  },
  {
    group:'Data Analysis',
    skill: 'matplotlib, pandas'
  }
]

const experience = [
  {
    position: 'Customer service agent',
    company: 'Amazon',
    period: 'Oct 2022 - Dec 2022',
    place: 'Bucaramanga',
    jobDescription: jobDesc
  },
  {
    position: 'Laboratory assistant',
    company: 'Universidad Industrial de Santander',
    period: 'Jul 2022 - Sep 2022',
    place: 'Bucaramanga',
    task: task
  },
]

const educationDegrees = [
  {
    year: '2023',
    degree: 'Physicist',
    school: 'Universidad Industrial de Santander'
  },
  {
    year: '2016',
    degree: 'Administrative Assitance',
    school: 'SENA'
  }
]

export default function Home() {
  let i = 0
  return (
    <>
    <Header Name={'Katherin Paola Gómez'} Location={'Bucaramanga, Colombia'} github={'@kitkathsita'} linkedIn={'kitkathsita'} email={'katherinpgr@gmail.com'} cellphone={'+57 3017995846'}></Header>
    <SectionDesc sectionName={'PROFILE'} profile={desc}></SectionDesc>
    <SectionWE sectionName={'WORK EXPERIENCE'} position={'Customer service agent'} role={experience}></SectionWE>
    <SectionLangue sectionName={'LANGUAGES'} languages={languagesSpoken}></SectionLangue>
    <SectionEduc sectionName={'EDUCATION'} education={educationDegrees}></SectionEduc>
    <SectionSkill sectionName={'SKILLS'} skills={skills}></SectionSkill>
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

