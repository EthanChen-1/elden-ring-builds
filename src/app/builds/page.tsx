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
    <section className="xl:grid xl:grid-cols-8 xl:grid-rows-1 h-screen">
      <aside className="col-span-2">
        <CreateBuild />
      </aside>
      <section className="col-span-6 p-3">
        <div className="flex flex-row justify-between mb-3 items-center">
          <h1 className="text-2xl font-bold ">View Builds</h1>
        </div>
        <div className="grid grid-cols-12 grid-rows-12 gap-2 h-full">
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
    <div className="bg-zinc-100 w-full text-center p-3 relative flex flex-col gap-2 md:col-span-12 lg:col-span-6  2xl:col-span-3 2xl:row-span-3">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <p>
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
