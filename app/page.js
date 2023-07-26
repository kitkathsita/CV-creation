'use client'
import React, { useState, useRef } from 'react';
import './globals.css';
import Info from '../info.json';
import CVRender from '@/CV-render/CvRender';
import CVInfo from '@/CV-info/CvInfo';
import TitlePage from '@/app/TitlePage';

export default function Home() {
  return (
    <>
    <div id='bigContainer'>
      <TitlePage/>
      <CVInfo></CVInfo>
      <CVRender></CVRender>
    </div>
    </>
  )
}


