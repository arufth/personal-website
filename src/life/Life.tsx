import { Header, Page } from "../components";

import "./Life.css";
import photos from "./Life.json";

export const Life: React.FC = () => {
  return (
    <Page>
      <main className="main-life">
        <Header
          title="POV: you're Aru"
          subtitle="these are a bunch of photos from my day-to-day"
        />
        <ul className="photos">
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.path} alt={photo.title} />
              <h3>{photo.title}</h3>
              <small>{photo.date}</small>
            </li>
          ))}
        </ul>
      </main>
    </Page>
  );
};
