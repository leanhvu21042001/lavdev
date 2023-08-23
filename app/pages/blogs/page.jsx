/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { mockDataBlogsPost } from "./mockDataBlogsPost";
import { changeDateFormat } from "@/app/utils/date";

const Blogs = () => {
  return (
    <main>
      <section className="flex items-center py-16 bg-white font-poppins dark:bg-gray-900 ">
        <div className="justify-center flex-1 max-w-4xl px-4 py-4 mx-auto text-left lg:py-10 ">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
              Our blog
            </span>
            <h1 className="text-3xl font-bold capitalize dark:text-white">
              Blog List
            </h1>
          </div>

          {/* Blog Posts */}

          {mockDataBlogsPost.map((item) => (
            <div
              key={item.uuid}
              className="grid grid-cols-1 mb-6 md:grid-cols-[70%,1fr] border-gray-200 border-b dark:border-gray-700 pb-6 gap-4"
            >
              <div>
                <a
                  href="#"
                  className="text-xs font-medium text-indigo-600 dark:text-blue-400 "
                >
                  Marketing
                </a>
                <h2 className="mt-1 mb-3 text-xl font-semibold text-gray-600 dark:text-gray-400 ">
                  <Link href={`/pages/blogs/${item.slug}`}>{item.title}</Link>
                </h2>
                <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
                <div className="flex items-center ">
                  {item.tags.map((tag) => {
                    <a
                      href="#"
                      className="px-2 py-1 mr-2 text-xs text-gray-700 bg-gray-200 rounded-full hover:bg-blue-500 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 hover:text-gray-100"
                    >
                      {tag}
                    </a>;
                  })}

                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {changeDateFormat(item.createdDate)}
                  </span>
                </div>
              </div>
              <div>
                <img
                  src="https://i.postimg.cc/hGfFtdTQ/pexels-pixabay-265087.jpg"
                  alt=""
                  className="object-cover w-full rounded-md h-80 md:h-44"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
