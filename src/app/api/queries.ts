/* A GROQ (Graph-Relational Object Queries) query to fetch all project documents with specific fields
from a Sanity.io dataset. More info: https://www.sanity.io/docs/content-lake/groq-introduction
*/

export const aboutQuery = `*[_type == "about"]{
  _id,
  upperText,
  title,
  subtitle,
  links,
  intro,
  about,
  picture,
  description,
  tech
}`;

export const projectsQuery = `*[_type == "project"]{
  _id,
  name,
  description,
  url,
  github,
  tags
}`;

export const experienceQuery = `*[_type == "experience"] | order(_createdAt desc) {
  _id,
  company,
  dates,
  jobTitle,
  description,
  projects[]{
    name,
    dates,
    role,
    description
  }
}`;
