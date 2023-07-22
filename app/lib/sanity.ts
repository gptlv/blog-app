import { createClient } from "next-sanity";

const projectId = "amgp6s8q";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
});
