import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Trending {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export const getData = async (): Promise<
  Trending[] | { trendings: Trending[] }
> => {
 
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/trending`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();
  return res.json();
};

export default async function SecondSection() {
  const data = await getData();
  const trendings: Trending[] = Array.isArray(data)
    ? data
    : data.trendings || [];

  return (
    <div className="h-[120vh] px-16 mt-10 w-full overflow-x-hidden  ">
      <h1 className="text-5xl">Trending</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        
        <div className="relative w-full md:w-[560px] h-[800px] sm:h-[400px] md:h-[650px] mt-16">
          <Link href={"/"}>
            <Image
              src="https://res.cloudinary.com/dpahyb1x9/image/upload/v1757318317/lPLq5LYGPKma7GvuNLZnBfIvdow_1_icbjbh.jpg"
              alt="image"
              fill
              className="object-cover z-0"
            />
          </Link>

          <div className="absolute bg-white h-52 w-[500px] z-50 mt-[444px]">
            <div className="flex mt-2 items-center gap-2">
              <a
                href="/technology"
                className="hover:underline text-[12px] bg-[#ffbd3a4b] px-2"
              >
                BUSINESS
              </a>
              <div className="h-px w-24 bg-black"></div>
              <p className="text-[12px] ml-1"></p>
            </div>
          </div>
        </div>

        <div className="h-[600px] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 w-full mt-14 gap-6 scrollbar-hide">
          {trendings.map((trending) => (
            <div key={trending._id} className="mb-8">
              <div className="flex gap-2">
                <div className="h-px w-40 bg-black mt-2"></div>
                <p className="text-[12px]">SEP 12, 2023</p>
              </div>
              <h3 className="mt-2 font-[outfit] text-[18px] font-semibold pl-2">
                {trending.title}
              </h3>
              <div className="relative w-[280px] h-[350px] mt-9">
                <Link
                  href={`/trending/${trending._id}`}
                  className="block w-full h-full"
                >
                  <Image
                    src={trending.imageUrl}
                    alt={trending.title}
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
        {trendings.slice(0, 4).map((trending) => (
          <div key={trending._id} className="mb-8">
            <h3 className="mt-2 font-[outfit] text-sm sm:text-base">
              {trending.title}
            </h3>
            <div className="relative w-[355px] h-[200px]">
              <Link
                href={`/trending/${trending._id}`}
                className="block w-full h-full"
              >
                <Image
                  src={trending.imageUrl}
                  alt={trending.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div>
        <hr />
      </div>
    </div>
  );
}
