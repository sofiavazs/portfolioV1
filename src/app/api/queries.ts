/* A GROQ (Graph-Relational Object Queries) query to fetch all project documents with specific fields
from a Sanity.io dataset. More info: https://www.sanity.io/docs/content-lake/groq-introduction
*/

export const projectsQuery = `*[_type == "project"]{
  _id,
  name,
  description,
  url,
  github,
  tags
}`;
