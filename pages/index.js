import { getProjects, fetchDesktopImages } from "@utils/projects";

import Main from "@components/Main";
import Portfolio from "@components/Portfolio/Portfolio";

export default function Home({ projects, allImages }) {
  return (
    <Main>
      <Portfolio projects={projects} allImages={allImages} />
    </Main>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  const allImages = await fetchDesktopImages(projects);

  return {
    props: { projects: projects, allImages: allImages }, // will be passed to the page component as props
  };
}
