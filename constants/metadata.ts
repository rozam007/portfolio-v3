import PROJECTS from "./projects";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const metadata = {
  home: {
    title: "Daud Rauf: Software Developer (Front End Developer)",
    description: `Daud Rauf is a Software Developer that majors in Front End Development, yet capable of full stack development.`,
    url: `${BASE_URL}`,
    image: `${BASE_URL}/images/covers/home.png`,
  },
  projects: {
    title: "Daud Rauf: Projects",
    description: "A list of projects, replicas, and experiments from Daud Rauf",
    url: `${BASE_URL}/projects`,
    image: `${BASE_URL}/images/covers/projects.png`,
  },
  letters: {
    title: "Daud Rauf: Letters",
    description: "Letters, Thoughts, Stories and Ideas from Daud Rauf",
    url: `${BASE_URL}/letters`,
    image: `${BASE_URL}/images/covers/letters.png`,
  },
  credits: {
    title: "Daud Rauf: Credits",
    description: "Site credits for some parts of the design of this portfolio",
    url: `${BASE_URL}/credits`,
    image: `${BASE_URL}/images/covers/credits.png`,
  },
  notfound: {
    title: "Daud Rauf: Lost",
    description: "404 Page not found, please go home ",
    url: `${BASE_URL}/lost`,
    image: `${BASE_URL}/images/covers/not-found.png`,
  },
  singleproject: ({ id }: { id: string }) => {
    const project = PROJECTS.find((item) => item.id === id);

    if (project) {
      const { title, media } = project;
      return {
        title: `Daud Rauf | Project | ${title}`,
        description: `${title} Project`,
        url: `${BASE_URL}/project/${id}`,
        image: media[0] ? `${BASE_URL}${media[0].source}` : `${BASE_URL}/images/covers/projects.png`,
      };
    } else {
      return {
        title: `Daud Rauf | Project`,
        description: `Invalid Project`,
        url: `${BASE_URL}/project/${id}`,
        image: `${BASE_URL}/images/covers/invalid-project.png`,
      };
    }
  },
  blog: {
    title: "The Daud Rauf Blog",
    description: "Technical and Life articles written by Daud Rauf",
    url: `${BASE_URL}/blog`,
    image: `${BASE_URL}/images/covers/blog.png`,
  },
};

export default metadata;
