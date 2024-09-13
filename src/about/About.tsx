// TODO: create sectios for each 'section' lol

import { Divider, Header } from '../components'
import { Link } from 'react-router-dom'

import './About.css'

export const About: React.FC = () => {
  return (
    <>
      <main className='main-about'>
        <Header
          title='But, Who Am I?'
          subtitle='What Do I Do in My Day-to-Day?'
        />

        <section className='mainText-about'>
          <div className='social-medias'>
            <p>
              These are my 'social media':
            </p>
            <div className='social-media-links'>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.instagram.com/carlitosdummy'
              >Instagram
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.x.com/carlitosdummy'
              >X (Twitter)
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.github.com/carlitosdummy'
              >GitHub
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://leetcode.com/u/carlitosdummy/'
              >LeetCode
              </a>
            </div>
          </div>

          <Divider />

          <p>
            Well, my (real) name is <label className='myname'>Carlos</label>, but you can call me either <label className='myname'>Aru</label> or <label className='myname'>Dummy</label> (now 'carlitosdummy' makes sense, doesn't it?)
          </p>
          <p>
            I'm a 20-year-old Software Engineering student, but I'm also really into everything related to <label className='cs'>Computer Science</label>; I fell in love with how things work under the hood.
          </p>
          <p>
            My favorite language is <label className='rust'>Rust</label>, and as you can imagine, that's the reason for that cute, tiny, eye-catching crab moving side to side at the top of the page. Although, I usually program in:
          </p>
          <div className='languages'>
            <p className='ts'>TypeScript</p>
            <p className='java'>Java</p>
            <p className='python'>Python</p>
            <p className='js'>JavaScript</p>
            <p className='hkll'>Haskell</p>
          </div>
          <p>Also, I'd like to learn:</p>
          <div className='languages'>
            <p className='c'>C</p>
            <p className='zig'>Zig</p>
            <p className='go'>Go</p>
          </div>
          <Divider />
          <p className='logical-problems'>
            One of the things I enjoy the most is solving logic problems. I'm sure you're familiar with platforms like <label className='leetcode'>LeetCode</label> (my favorite btw ☝🏽🤓), <label className='hackerrank'>HackerRank</label>, <label className='codesignal'>CodeSignal</label>, <label className='codeforces'>CodeForces</label>, and so on. I spend around 2 hours a day solving these kinds of problems.
          </p>
          <p>If you want to check out my profile, here's my LeetCode:</p>
          <div className='leetcode-profile'>
            <img src='/public/leetcode.png' alt='A screenshot of my LeetCode profile' />
            <a
              rel='noreferrer'
              target='_blank'
              href='https://leetcode.com/u/carlitosdummy/'
            >LeetCode
            </a>
            <small>I'm a newbie, don't judge me :p</small>
          </div>

          <Divider />
          <p>
            Yup, I've talked about my current studies, my favorite languages, and my obsession with LeetCode, but what do I do when I'm not programming? Do I play LoL like an average CS or SWE?
          </p>
          <Divider />

          <p className='gardering-text'>I love <label className='gardering-label'>gardening</label>. For a few months now, I've been growing various veggies in my garden. My dad grew up in a rural area, so he knows a lot about this wonderful world.</p>
          <p>Actually ☝🏽🤓, that's the reason I developed a garden organizer, which you can view in the <Link to='/projects'>Projects</Link> tab.</p>
          <p className='gardering-text'>At the moment, I'm growing <label className='waterm'>watermelon</label>, <label className='tomato'>tomato</label>, <label className='cucumber'>cucumber</label>, <label className='corn'>corn</label>, <label className='carrot'>carrot</label>, and a couple more veggies. In the <Link to='/life'>Life</Link> tab, you'll find some photos I've taken so far.</p>
          <div className='gardering'>
            <img src='/public/radish.jpg' alt='A photo of radishes' />
            <small>This is the first one I took c:</small>
          </div>
        </section>

      </main>
    </>
  )
}
