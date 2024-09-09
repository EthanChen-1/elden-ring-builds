"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { formChangeHandler } from "./CreateBuildHelper";

export default function CreateBuild() {
  const router = useRouter();

  const [buildValues, setBuildValues] = useState({
    title: "",
    description: "",
    rightHandArmament: "",
    arrows: "",
    leftHandArmament: "",
    bolts: "",
    head: "",
    chest: "",
    arms: "",
    legs: "",
    talisman: "",
    item: "",
  });

  async function create() {
    let {
      title,
      description,
      rightHandArmament,
      arrows,
      leftHandArmament,
      bolts,
      head,
      chest,
      arms,
      legs,
      talisman,
      item,
    } = buildValues;

    rightHandArmament = [rightHandArmament];
    arrows = [arrows];
    leftHandArmament = [leftHandArmament];
    bolts = [bolts];
    talisman = [talisman];
    item = [item];

    const res = await fetch("http://localhost:3000/api/builds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        rightHandArmament,
        arrows,
        leftHandArmament,
        bolts,
        head,
        chest,
        arms,
        legs,
        talisman,
        item,
      }),
    });

    router.refresh();
  }

  return (
    <form
      onSubmit={create}
      className="flex flex-col flex-wrap w-full gap-y-3 p-3 border-r-2 items-left"
    >
      <h3 className="text-2xl font-bold">Create a new Build</h3>
      <label>Title</label>
      <input
        className="border-2 border-zinc-200"
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        value={buildValues.title}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Description</label>
      <textarea
        className="border-2 border-zinc-200"
        id="description"
        name="description"
        placeholder="Description"
        value={buildValues.description}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Right Hand Armament(s)</label>
      <input
        className="border-2 border-zinc-200"
        id="rightHandArmament"
        name="rightHandArmament"
        type="text"
        placeholder="Weapon 1 Weapon 2 Weapon 3"
        value={buildValues.rightHandArmament}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Left Hand Armament(s)</label>
      <input
        className="border-2 border-zinc-200"
        id="leftHandArmament"
        name="leftHandArmament"
        type="text"
        placeholder="Weapon 1 Weapon 2 Weapon 3"
        value={buildValues.leftHandArmament}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Arrows(s)</label>
      <input
        className="border-2 border-zinc-200"
        id="arrows"
        name="arrows"
        type="text"
        placeholder="Arrow 1 Arrow 2"
        value={buildValues.arrows}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Bolt(s)</label>
      <input
        className="border-2 border-zinc-200"
        id="bolts"
        name="bolts"
        type="text"
        placeholder="Bolt 1 Bolt 2"
        value={buildValues.bolts}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Head</label>
      <input
        className="border-2 border-zinc-200"
        id="head"
        name="head"
        placeholder="Head"
        value={buildValues.head}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Chest</label>
      <input
        className="border-2 border-zinc-200"
        id="chest"
        name="chest"
        placeholder="Chest"
        value={buildValues.chest}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Arms</label>
      <input
        className="border-2 border-zinc-200"
        id="arms"
        name="arms"
        placeholder="Arms"
        value={buildValues.arms}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Legs</label>
      <input
        className="border-2 border-zinc-200"
        id="legs"
        name="legs"
        placeholder="Legs"
        value={buildValues.legs}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Talisman(s)</label>
      <textarea
        className="border-2 border-zinc-200"
        id="talisman"
        name="talisman"
        placeholder="Talisman 1 ...  Talisman 4"
        value={buildValues.talisman}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <label>Item(s)</label>
      <textarea
        className="border-2 border-zinc-200"
        id="item"
        name="item"
        placeholder="Item 1 ...  Item 10"
        value={buildValues.item}
        onChange={(event) => {
          formChangeHandler(event, setBuildValues);
        }}
      />
      <button className="border-2 h-10 hover:bg-zinc-100" type="submit">
        Create Build
      </button>
    </form>
  );
}
