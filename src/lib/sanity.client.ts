import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Helper function to fetch projects
export async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    mainImage,
    description,
    link
  }`;
  return client.fetch(query);
}

// Helper function to fetch experiences
export async function getExperiences() {
  const query = `*[_type == "experience"] | order(period desc) {
    _id,
    title,
    organization,
    period,
    description
  }`;
  return client.fetch(query);
}

