import { ProjectList } from ".";
import { Header, Page } from "../components";

import "./Projects.css";

export const Projects: React.FC = () => {
  return (
    <Page>
      <main className="main-projects">
        <Header
          title="These are my current side projects :)"
          subtitle="from web development apps to a ray tracer"
        />
        <ProjectList />
      </main>
    </Page>
  );
};
