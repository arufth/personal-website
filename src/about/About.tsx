// TODO: create sectios for each 'section' lol

import { Divider, Header } from '../components'
import { Link } from 'react-router-dom'

import './About.css'

export const About: React.FC = () => {
  return (
    <>
      <main className='main-about'>
        <Header
          title='But, How am I?'
          subtitle='why do I do in my da-to-day?'
        />

        <section className='mainText-about'>
          <div className='social-medias'>
            <p>
              These are my social medias:
            </p>
            <div className='social-media-links'>
              <a href='#'>Instagram</a>
              <a href='#'>X (Twitter)</a>
            </div>
          </div>

          <Divider />

          <p>
            Well, My (real) name is <label className='myname'>Carlos</label>, but you can call me either <label className='myname'>Aru</label> or <label className='myname'>Dummy</label> ( now 'carlitosdummy' makes sense, doesn't it? )
          </p>
          <p>
            I'm a 20-Software-Enginnier Student, but also I'm really into everthing that surround <label className='cs'>Computer Science</label>; I fell in love with how things work under the hood.
          </p>
          <p>
            My favorite language is <label className='rust'>Rust</label>, and how you can suppose, that's the reason of that pretty tiny eye-catching crab moving side by side at the top of the page. Althoug, I usually program in:
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
            One of the most things that I enjoy is solving logical problems. I'me sure you know platforms like <label className='leetcode'>LeetCode</label> (my favorite btw ☝🏽🤓), <label className='hackerrank'>HackerRank</label>, <label className='codesignal'>Code Signal</label>, <label className='codeforces'>CodeForces</label>, and so on. I constantly spend around 2 hours per day solving that kind of problems.
          </p>
          <p>If you want to stalk me, this is my Leetcode profile:</p>
          <div className='leetcode-profile'>
            <img src='/public/leetcode.png' alt='a screenshot of my LeetCode profile' />
            <a
              href='https://leetcode.com/u/carlitosdummy/'
            >LeetCode
            </a>
            <small>I'm a newbiew, don't judge me :p</small>
          </div>

          <Divider />
          <p>
            Yurp, I've talked about my current career, my favorite languages, my obsession with Leetcode, but What do I do when I'm not programming? Do I play LoL like an avarege CS or SWE?
          </p>
          <Divider />

          <p className='gardering-text'>I'm really into <label className='gardering-label'>gardering</label>. Since a couple of months I grow several veggies in my garden. My dad grew up in a rural zone; so he know a lot about this wondeful world.</p>
          <p>Actually ☝🏽🤓, that's the reason why I developed a garden organaizer which you can view it in the <Link to='/projects'>Projects</Link> tab.</p>
          <p className='gardering-text'>At this moment, I'm growing <label className='waterm'>watermelon</label>, <label className='tomato'>tomato</label>, <label className='cucumber'>cucumber</label>, <label className='corn'>corn</label>, <label className='carrot'>carrot</label>, and two or three more veggies. In the <Link to='/life'>Life</Link> tab you'll find some photos that I've taken until now.</p>
          <div className='gardering'>
            <img src='/public/radish.jpg' alt='a photo of radish' />
            <small>This is the first one that I've taken :)</small>
          </div>
        </section>

      </main>
    </>
  )
}
