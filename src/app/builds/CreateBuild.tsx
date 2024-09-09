"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { addItem, formChangeHandler } from "./CreateBuildHelper";
import DisplayInputList from "./DisplayInputList";

export default function CreateBuild() {
  const router = useRouter();

  const rha = useRef<HTMLInputElement>(null);
  const lha = useRef<HTMLInputElement>(null);
  const arrow = useRef<HTMLInputElement>(null);
  const bolt = useRef<HTMLInputElement>(null);
  const talisman = useRef<HTMLInputElement>(null);
  const item = useRef<HTMLInputElement>(null);
  const [buildValues, setBuildValues] = useState({
    title: "",
    description: "",
    head: "",
    chest: "",
    arms: "",
    legs: "",
    rightHandArmament: [],
    arrows: [],
    leftHandArmament: [],
    bolts: [],
    talisman: [],
    item: [],
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
      <label>Right Hand Armament(s)</label>{" "}
      <DisplayInputList inputs={buildValues.rightHandArmament} />
      <div className="flex flex-row gap-2 relative">
        <input
          className="disabled:opacity-50 flex-grow border-2 border-zinc-200"
          id="rightHandArmament"
          name="rightHandArmament"
          type="text"
          placeholder="Add one weapon at a time"
          ref={rha}
          disabled={buildValues.rightHandArmament.length === 3}
        />
        <button
          className="disabled:opacity-50 border-2 hover:bg-zinc-100 pl-2 pr-2"
          type="button"
          onClick={() => {
            addItem(rha, setBuildValues, 3);
          }}
          disabled={buildValues.rightHandArmament.length === 3}
        >
          Add Armament
        </button>
      </div>
      <label>Left Hand Armament(s)</label>
      <DisplayInputList inputs={buildValues.leftHandArmament} />
      <div className="flex flex-row gap-2 relative">
        <input
          className="disabled:opacity-50 flex-grow border-2 border-zinc-200"
          id="leftHandArmament"
          name="leftHandArmament"
          type="text"
          placeholder="Add one weapon at a time"
          ref={lha}
          disabled={buildValues.leftHandArmament.length === 3}
        />
        <button
          className="disabled:opacity-50 border-2 hover:bg-zinc-100 pl-2 pr-2"
          type="button"
          onClick={() => {
            addItem(lha, setBuildValues, 3);
          }}
          disabled={buildValues.leftHandArmament.length === 3}
        >
          Add Armament
        </button>
      </div>
      <label>Arrows(s)</label>
      <DisplayInputList inputs={buildValues.arrows} />
      <div className="flex flex-row gap-2 relative">
        <input
          className="disabled:opacity-50 flex-grow border-2 border-zinc-200"
          id="arrows"
          name="arrows"
          type="text"
          placeholder="Add arrows one at a time"
          ref={arrow}
          disabled={buildValues.arrows.length === 2}
        />
        <button
          className="disabled:opacity-50 border-2 hover:bg-zinc-100 pl-2 pr-2"
          type="button"
          onClick={() => {
            addItem(arrow, setBuildValues, 2);
          }}
          disabled={buildValues.arrows.length === 2}
        >
          Add Arrow
        </button>
      </div>
      <label>Bolt(s)</label>
      <DisplayInputList inputs={buildValues.bolts} />
      <div className="flex flex-row gap-2 relative">
        <input
          className="disabled:opacity-50 flex-grow border-2 border-zinc-200"
          id="bolts"
          name="bolts"
          type="text"
          placeholder="Add bolts one at a time"
          ref={bolt}
          disabled={buildValues.bolts.length === 2}
        />
        <button
          className="disabled:opacity-50 border-2 hover:bg-zinc-100 pl-2 pr-2"
          type="button"
          onClick={() => {
            addItem(bolt, setBuildValues, 2);
          }}
          disabled={buildValues.bolts.length === 2}
        >
          Add Bolt
        </button>
      </div>
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
      <DisplayInputList inputs={buildValues.talisman} />
      <div className="flex flex-row gap-2 relative">
        <input
          className="disabled:opacity-50 flex-grow border-2 border-zinc-200"
          id="talisman"
          name="talisman"
          placeholder="Add talismans one at a time"
          ref={talisman}
          disabled={buildValues.talisman.length === 4}
        />
        <button
          className="disabled:opacity-50 border-2 hover:bg-zinc-100 pl-2 pr-2"
          type="button"
          onClick={() => {
            addItem(talisman, setBuildValues, 4);
          }}
          disabled={buildValues.talisman.length === 4}
        >
          Add Talisman
        </button>
      </div>
      <label>Item(s)</label>
      <DisplayInputList inputs={buildValues.item} />
      <div className="flex flex-row gap-2 relative">
        <input
          className="disabled:opacity-50 flex-grow border-2 border-zinc-200"
          id="item"
          name="item"
          placeholder="Add items one at a time"
          ref={item}
          disabled={buildValues.item.length === 10}
        />
        <button
          className="disabled:opacity-50 border-2 hover:bg-zinc-100 pl-2 pr-2"
          type="button"
          onClick={() => {
            addItem(item, setBuildValues, 10);
          }}
          disabled={buildValues.item.length === 10}
        >
          Add Item
        </button>
      </div>
      <button className="border-2 h-10 hover:bg-zinc-100" type="submit">
        Create Build
      </button>
    </form>
  );
}
