import { client } from "../lib/sanity.client";
import { projectsQuery, experienceQuery, aboutQuery } from "./queries";

export async function getProjects() {
  return client.fetch(projectsQuery, {}, { cache: "no-store" });
}

export async function getExperience() {
  return client.fetch(experienceQuery, {}, { cache: "no-store" });
}

export async function getAboutData() {
  return client.fetch(aboutQuery, {}, { cache: "no-store" });
}
