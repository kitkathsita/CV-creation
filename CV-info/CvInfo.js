'use client'
import React, { useState, useRef } from 'react';
import SectionInfo from './components/SectionInfo';
import SectionTitle from './components/SectionTitle';
import SectionWorkExperience from './components/SectionWorkExperience';

export default function CVInfo() {
  return (
    <div id='infoContainer'>
      <SectionTitle sectionName={'Work experience'}></SectionTitle>
      <SectionWorkExperience position={'customer service agent'} company={'amazon'} date={'Oct 2022-Dec 2022'}></SectionWorkExperience>
    </div>
  )
}