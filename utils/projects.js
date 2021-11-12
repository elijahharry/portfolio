import projects from "@constants/projects";
import { generatePlaceholders } from "./placeholders";

export const getProjects = async () => {
  const finishedProjects = [];
  for (const project of projects) {
    if (project?.mockups) {
      const { prefix, type, count } = project.mockups;
      const desktop = [];
      const mobile = [];
      for (let i = 1; i <= count; i++) {
        desktop.push({ src: `${prefix}-${i}-c.${type}` });
        mobile.push({ src: `${prefix}-${i}-m.${type}` });
      }
      try {
        const finishedDesktops = await generatePlaceholders(desktop);
        const finishedMobile = await generatePlaceholders(mobile);
        finishedProjects.push({
          ...project,
          images: { desktop: finishedDesktops, mobile: finishedMobile },
        });
      } catch (e) {
        finishedProjects.push({
          ...project,
          images: { desktop: desktop, mobile: mobile },
        });
      }
    } else {
      finishedProjects.push(project);
    }
  }

  return finishedProjects;
};

export const fetchDesktopImages = (projects) => {
  const images = [];
  for (const project of projects) {
    if (project?.images?.desktop) {
      project.images.desktop.map((img) =>
        images.push({ ...img, project_id: projects.indexOf(project) })
      );
    }
  }
  return images;
};
