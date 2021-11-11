import { getProjects, fetchDesktopImages } from "@utils/projects";

import Main from "@components/Main";
import Titles from "@components/Titles/Titles";
import Portfolio from "@components/Portfolio/Portfolio";

export default function Home({ projects, allImages }) {
  console.log(projects[3].palette);
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
