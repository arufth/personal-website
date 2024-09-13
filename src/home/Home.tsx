import { Divider, Header } from '../components'

import './Home.css'

export const Home: React.FC = () => {
  return (
    <>
      <main className='main-home'>
        <Header
          title="Welcome to my website, I'm Aru!"
          subtitle='a computer scientist and web developer.'
        />

        <section className='mainText'>
          <p>
            Here you can see my current active projects, find my social media if you're interested in my hobbies and thoughts, and view a bunch of photos from my day-to-day life. Enjoy them. :p
          </p>
        </section>

        <section className='useful-links'>
          <p>If you're just interested in work-related matters, here are some useful and quick links:</p>
          <div>
            <a
              href='https://github.com/carlitosdummy' rel='noreferrer'
              target='_blank'
            >GitHub
            </a>
            <a
              href='#' rel='noreferrer' target='_blank'
            >CV
            </a>
            <a
              href='https://www.linkedin.com/in/carlitosdummy/' rel='noreferrer'
              target='_blank'
            >Linkedin
            </a>
          </div>
          <p>This is my email:</p>
          <div>
            <a href='mailto:carlos256800@gmail.com'>carlos256800@gmail.com</a>
          </div>
        </section>

        <Divider />
      </main>
    </>
  )
}
