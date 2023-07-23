'use client'
import React, { useState, useRef } from 'react';
import TitlePage from './components/TitlePage';
import SectionInfo from './components/SectionInfo';

export default function CVInfo() {
  return (
    <div id='infoContainer'>
      <TitlePage></TitlePage>
      <SectionInfo></SectionInfo>
    </div>
  )
}