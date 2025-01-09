"use client";

import { useState } from "react";
export function LatestPost() {
  const [textValue, setTextValue] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [transformedText, setTransformedText] = useState("");
  const [modeActive, setModeActive] = useState("aA")
  // const createPost = api.post.create.useMutation({
  //   onSuccess: async () => {
  //     await utils.post.invalidate();
  //     setName("");
  //   },
  // });

  const transformText = (text: string) => {
    return text
      .split('')
      .map((char, index) => {
        if (modeActive === "aA") {
          // Every second letter uppercase (index 1, 3, 5...)
          return index % 2 === 1 ? char.toUpperCase() : char.toLowerCase();
        } else {
          // First letter uppercase, then lowercase (index 0, 2, 4...)
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }
      })
      .join('');
  };


  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(transformedText);
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  };

  const modes = ["aA" , "Aa"]

  function createModeButtons(mode:string){
    return<button key={mode} type="button" onClick={() => setModeActive(mode)} id={mode} className={`p-1 px-6 rounded-full border ${modeActive === mode ? "bg-gradient-to-br from-teal-700 to-teal-900 border-teal-800" : "border-teal-400 bg-teal-500"} `}>
        {mode}
    </button>
  }
  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center gap-4 py-4">
    <span>Mode: </span>
  {modes.map(createModeButtons)}    
      </div>
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
            <button
          type="submit"
          className="rounded-full bg-slate-100/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        >
         transform
        </button>
        {transformedText && <div className="w-full flex justify-between items-center bg-slate-50/50 p-2 rounded-full">
        <span className="flex w-full rounded-full px-4 py-2 text-slate-100" >{transformedText}</span>
        <button type="button" onClick={() => copyToClipboard()} className="rounded-full bg-slate-100/10 px-10 py-3 font-semibold transition hover:bg-white/20">copy</button>
        </div>}
        {<span className={`w-full text-center transition duration-500 ${isCopied ? "opacity-100" : "opacity-0"}`}>copied to clipboard!</span>}
    
      </form>
    </div>
  );
}

