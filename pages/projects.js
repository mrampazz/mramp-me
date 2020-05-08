import Head from 'next/head'
import Menu from '../components/Menu'
import { Project } from '../components/Project'

const projects = [
  {id: 0, title: 'PainPoint', link:'https://painpoint.apiplant.com/', img:'' ,desc:'Project being developed with framp. Showcasing dev problems that normal users have and providing a platform to create connections between users and developers. '},
  {id: 1, title: 'Grafana Prediction', link:'https://github.com/VRAM-Software/grafana_prediction', img:'' ,desc:'Web application developed for Zucchetti. This app trains  data taken from servers using SVM and RL algorithms to then predict when a problem in the machine might occur through Grafana.'},
  {id: 2, title: 'Jacques Durand website', link:'https://jacquesdurand.com/#/', img:'' ,desc:'Brand website I built in collaboration with danieljamestronca, for the french stylist Jacques Durand to showcase his glasses.'},
]

export default function Projects() {
    return (
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Poppins|Quicksand&display=swap" rel="stylesheet"></link>
        </Head>
  
        <header>
          <Menu />
        </header>
  
        <main>
          <div className='projects-container'>
          {projects.map(i => (
            <Project title={i.title} desc={i.desc} img={i.img} link={i.link} id={i.id} />
          ))}
          </div>
          
        </main>
      </div>
    )
  }
  