import React from "react";
import CreateBuild from "./CreateBuild";

export const revalidate = 5;

async function getBuilds() {
  const res = await fetch("http://localhost:3000/api/builds", {
    method: "GET",
  });
  const data = await res.json();
  return data as any[];
}

export default async function BuildsPage() {
  const builds = await getBuilds();
  return (
    <section className="xl:grid xl:grid-cols-8 xl:grid-rows-1">
      <aside className="col-span-2">
        <CreateBuild />
      </aside>
      <section className="col-span-6 row-span-1 p-3">
        <h1 className="text-2xl font-bold mb-3">View Builds</h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 h-1/2">
          {builds.map((build) => (
            <Build key={build.id} build={build} />
          ))}
        </div>
      </section>
    </section>
  );
}

function Build({ build }: any) {
  const { title, description, createdAt } = build;
  return (
    <div className="bg-zinc-100 w-full text-center p-3 relative flex flex-col gap-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <p className="2xl:absolute bottom-3 right-3">
        {"Posted: " +
          new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}
      </p>
    </div>
  );
}
