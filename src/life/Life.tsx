// TODO: Optimaze photos
import { Header } from '../components'

import './Life.css'
import photos from './Life.json'

export const Life: React.FC = () => {
  return (
    <>
      <main className='main-life'>
        <Header title="POV: you're Aru" subtitle='I used to be a ' />
        <ul className='photos'>
          {
            photos.map(photo => (
              <li key={photo.id}>
                <img src={photo.path} alt={photo.title} />
                <h3>{photo.title}</h3>
              </li>
            ))
          }
        </ul>
      </main>
    </>
  )
}
