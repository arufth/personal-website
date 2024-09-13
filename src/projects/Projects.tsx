import { ProjectList } from '.'
import { Header } from '../components'

import './Projects.css'

export const Projects: React.FC = () => {
  return (
    <>
      <main className='main-projects'>
        <Header title='These are my current side projects :)' subtitle='from web development apps to a ray tracer' />

        <ProjectList />

      </main>
    </>
  )
}
