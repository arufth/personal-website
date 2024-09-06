import { Divider, Header } from '../components'

import './Home.css'

export const Home: React.FC = () => {
  return (
    <>
      <main className='main-home'>
        <Header
          title="Welcome to my website, I'm Aru!"
          subtitle='a computer scientist and web developer'
        />

        <section className='mainText'>
          <p>
            Here you can see my current active projects, found my social medias if you're interestred in my hobbies and thoughts, and a bunch of photos of my day-by-day. Enjoy them :p
          </p>
        </section>

        <section className='useful-links'>
          <p>If you're just interested in work-wise, here are some useful and quick links:</p>
          <div>
            <a
              href='https://github.com/carlitosdummy' rel='noreferrer'
              target='blank'
            >GitHub
            </a>
            <a
              href='#' rel='noreferrer' target='blank'
            >CV
            </a>
            <a
              href='https://www.linkedin.com/in/carlitosdummy/' rel='noreferrer'
              target='blank'
            >Linkedin
            </a>
          </div>
        </section>

        <Divider />
      </main>
    </>
  )
}
