import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Explore {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}


export const getData = async (): Promise<Explore[] | { explores: Explore[] }> => {
  const res = await fetch("http://localhost:3000/api/explore", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
}
export default async function ThirdSection() {

    const data = await getData();
    const explores = Array.isArray(data) ? data : data.explores || [];
    
    if (!explores.length) return <p className="px-14">No explores available.</p>;
    
    return (
        <div className="px-14  mt-16 h-[90vh] overflow-hidden">
        <h2 className="text-5xl">Explore Topics</h2>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {explores.map((explore) => (
            <Link
                href={`/explore/${explore._id}`}
                key={explore._id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
                <div className="relative h-[360px] w-full">
                <Image
                    src={explore.imageUrl}
                    alt={explore.title}
                    fill
                    className="object-cover"
                />
                </div>
                <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{explore.title}</h3>
                <p className="text-gray-600 text-sm">
                    {new Date(explore.date).toLocaleDateString()}
                </p>
                <p className="mt-2 text-gray-700">{explore.description}</p>
                </div>
            </Link>
            ))}
        </div>
        </div>
    );

}
