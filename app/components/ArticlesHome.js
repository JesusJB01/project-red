import Link from "next/link";
import CustomCard from "./CardHome";
import ImageUi from "./Image";

import { urlFor } from "./ImagesSanity";

/* async function getData() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
} */

export default async function ArticlesHome() {
  /* const data = await getData();
  const ultimosArticulos = data.data.slice(-4); */
  
  return (
    <div className="bg-gray-100 w-full pb-10 dark:bg-slate-500">
      <div className="container mx-auto flex py-8 px-10 sm:py-12 lg:py-16">
        {/* Botones superiores */}
        <div className="flex flex-row items-center">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Últimas Entradas
          </h2>
          <Link
            href={"/"}
            className="ml-4 mt-2 inline-block rounded-md bg-violet-600 px-2 py-2 text-base font-bold text-white hover:bg-violet-500 dark:bg-purple-300 dark:text-black dark:hover:bg-pink-300 md:px-6 md:py-3 md:text-lg"
          >
            Todas las Entradas
          </Link>
          <Link
            href={"/"}
            className="ml-4 mt-2 inline-block rounded-md bg-violet-600 px-2 py-2 text-base font-bold text-white hover:bg-violet-500 dark:bg-purple-300 dark:text-black dark:hover:bg-pink-300 md:px-6 md:py-3 md:text-lg"
          >
            tags
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-10">
        <section className="w-full ">
          <ImageUi />
          <span className="inline-block rounded bg-purple-600 px-3 py-1 text-xs font-medium uppercase tracking-tight text-white hover:bg-pink-600 my-5">
            Tag
          </span>
          <p className=" text-gray-400 ">TItulo</p>
          <span className="mb-5 text-gray-600 dark:text-gray-400">Fecha</span>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Texto descriptivo del articulo
          </p>
          <Link
            href={""}
            className="mt-2 inline-block rounded-md bg-purple-600 px-6 py-3 text-white hover:bg-pink-600 dark:bg-purple-300 dark:text-black dark:hover:bg-pink-300"
          >
            Leer mas
          </Link>
        </section>

        {/* Cuatro tarjetas adicionales */}

       {/*  <section className="grid grid-cols-2 gap-x-3 gap-y-3">
          { ultimosArticulos.map((user) => (
            <CustomCard
              key={user._id}
              title={user.title}
              imageSrc={urlFor(user.coverImage).url()}
              creationDate={user.creationDate}
              slug={user.slug.current}
            />
          ))}
        </section> */}
      </div>
    </div>
  );
}


