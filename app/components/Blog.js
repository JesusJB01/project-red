"use client";

import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";
import Article from "./Article";
import { urlFor } from "./ImagesSanity";


export default function Blog({data}) {

  return (
    <div className="container mx-auto flex justify-center">
    <section className="py-20">
      <div className="mx-auto px-4 max-w-6xl">
        <h1 className="text-center font-normal lg:text-[56px]">
          Últimas Entradas
        </h1>

        <div className="flex flex-col justify-center items-center pt-10">
          <div className="flex flex-col p-6 justify-center  gap-5 md:flex-row">
            <Image
              as={NextImage}
              width={700}
              height={700}
              src="/blog.jpg"
              alt="NextUI hero Image"
            />
            <div className="flex flex-col md:w-[40%]">
              <h2 className="pb-5 text-start font-bold">Título del Articulo</h2>
              <p className="text-justify pb-10">
                Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin
                urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum
                lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan
              </p>
              <div>
                <Link href={""} className="bg-violet-600 text-white p-3 rounded-lg">
                  Leer mas
                </Link>
              </div>
            </div>
          </div>

          {/* Articulos */}
          <div className="grid grid-cols-1 pt-20 gap-10 md:grid-cols-3">
            {data.data.map((article, index) => (
             
              <Article
                key={index}
                title={article.title}
                imageSrc={urlFor(article.bannerImage).url()}
                summary={article.overview}
                id={article.id}
                slug={article.slug.current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
