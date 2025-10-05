import { client } from "../lib/sanity.client";
import { projectsQuery } from "./queries";

export async function getProjects() {
  return client.fetch(projectsQuery, {}, { cache: "no-store" });
}
