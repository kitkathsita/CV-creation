'use client'
import React, { useState, useRef } from 'react';
import SectionInfo from './components/SectionInfo';
import SectionTitle from './components/SectionTitle';
import SectionWorkExperience from './components/SectionWorkExperience';
import SectionSkill from './components/SectionSkills';
import Info from '../info.json';

const { profileDescription:desc, languages:languagesSpoken, skills, workExperience:experience, education:educationDegrees } = Info

export default function CVInfo() {
  return (
    <div id='infoContainer'>
      <SectionTitle sectionName={'Profile'}></SectionTitle>
      <SectionInfo profile={"I'm a very passionate person, who loves helping others and learning new things. I like experimenting with new things that can improve my skills in life. I like cooking and baking, and my most recent passion is front-end development. I also like programming, reading and exercising. I'm learning react and next.js, and soon I will be starting a course for C#"}></SectionInfo>
      <SectionTitle sectionName={'Work experience'}></SectionTitle>
      <SectionWorkExperience position={'Customer Service Agent'} company={'Amazon'} date={'Oct 2022-Dec 2022'} description={'Take calls from amazon customers and help them solving any issue related to services offered by Amazon. Escalate petitions and issues to managers. '}></SectionWorkExperience>
      <SectionTitle sectionName={'Skill'}></SectionTitle>
    <SectionSkill skills={skills}></SectionSkill>
    </div>
  )
}