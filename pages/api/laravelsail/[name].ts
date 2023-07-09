// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync } from "node:fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const name = request.query.name as string;
  const regex = /^[a-zA-Z0-9-_]+$/;

  if (!name.match(regex)) {
    return response
      .setHeader("Content-Type", "text/html")
      .status(400)
      .send(
        "<html><head></head><body>Invalid site name. Please only use alpha-numeric characters, dashes, and underscores.</body></html>"
      );
  }

  const services = new Set<string>();

  const availableServices = [
    "mysql",
    "pgsql",
    "mariadb",
    "redis",
    "memcached",
    "meilisearch",
    "minio",
    "mailpit",
    "selenium",
    "soketi",
    "none",
  ];

  if (typeof request.query.with === "string") {
    for (const service of request.query.with.split(",")) {
      if (availableServices.includes(service)) {
        services.add(service);
      } else {
        return response
          .setHeader("Content-Type", "text/html")
          .status(400)
          .send(
            '<html><head></head><body>Invalid service name. Please provide one or more of the supported services (mysql, pgsql, mariadb, redis, memcached, meilisearch, minio, mailpit, selenium, soketi) or "none".</body></html>'
          );
      }
    }
  } else {
    // Default services
    services.add("mysql");
    services.add("redis");
  }

  const devcontainer = request.query.hasOwnProperty("devcontainer")
    ? "--devcontainer"
    : "";

  const file = path.join(process.cwd(), "build.sh");

  const template = readFileSync(file, "utf8");

  return response
    .setHeader("Content-Type", "text/plain")
    .status(200)
    .send(
      template
        .replaceAll("{{name}}", name)
        .replaceAll("{{extensions}}", Array.from(services).join(","))
        .replaceAll("{{services}}", Array.from(services).join(" "))
        .replaceAll("{{devcontainer}}", devcontainer)
    );
}
