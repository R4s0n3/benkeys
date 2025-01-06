"use client";

import { useState } from "react";
export function LatestPost() {
  const [textValue, setTextValue] = useState("");
  const [transformedText, setTransformedText] = useState("");

  // const createPost = api.post.create.useMutation({
  //   onSuccess: async () => {
  //     await utils.post.invalidate();
  //     setName("");
  //   },
  // });

  const transformText = (text:string) => {
    return text
      .split('')
      .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
      .join('');
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(transformedText);
  };

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newText = transformText(textValue)
          setTransformedText(newText)
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="enter text to transform..."
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-slate-900"
        />
        {transformedText && <div className="w-full flex justify-between items-center bg-slate-50/50 p-2 rounded-full">
        <span className="w-full rounded-full px-4 py-2 text-slate-100" >{transformedText}</span>
        <button onClick={() => copyToClipboard()} className="rounded-full bg-slate-100/10 px-10 py-3 font-semibold transition hover:bg-white/20">copy</button>
        </div>}
        <button
          type="submit"
          className="rounded-full bg-slate-100/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        >
         transform
        </button>
      </form>
    </div>
  );
}

