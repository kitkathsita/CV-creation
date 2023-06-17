import Header from './header'
import Section from './section'
import './globals.css'

export default function Home() {
  return (
    <>
    <Header Name={'Katherin Paola Gómez'} Location={'Bucaramanga, Colombia'} github={'@kitkathsita'} linkedIn={'kitkathsita'} email={'katherinpgr@gmail.com'} cellphone={'+57 30107995846'}></Header>
    <Section sectionName={'PROFILE'}></Section>
    <Section sectionName={'WORK EXPERIENCE'}></Section>
    <Section sectionName={'LANGUAGES'}></Section>
    <Section sectionName={'EDUCATION'}></Section>
    </>
  )
}
