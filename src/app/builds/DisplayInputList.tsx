import React from "react";

export default function DisplayInputList({ inputs }: any) {
  return inputs.length > 0 ? (
    <div className="flex flex-row flex-wrap flex-start gap-2">
      {inputs.map((input: any, index: number) => (
        <p key={index} className="bg-zinc-100 p-2 rounded">
          {input}
        </p>
      ))}
    </div>
  ) : null;
}
