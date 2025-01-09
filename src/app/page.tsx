
import { LatestPost } from "@/app/_components/post";
import { HydrateClient } from "@/trpc/server";
import Image from "next/image";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-yellow-300 to-teal-500 text-slate-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div>
            <Image width={300} height={300} alt="spongemock" src={"/spongemock.png"} />
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            BenKeys <span className="text-pur ple-400">App</span>
          </h1>
          <LatestPost />
        </div>
      </main>
    </HydrateClient>
  );
}
