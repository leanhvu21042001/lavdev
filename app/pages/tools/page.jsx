import Link from "next/link";
import React from "react";

const Tools = () => {
  return (
    <main>
      <section className="flex items-center py-16 bg-white font-poppins dark:bg-gray-900 ">
        <div className="justify-center flex-1 max-w-4xl px-4 py-4 mx-auto text-left lg:py-10 ">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
              {/* Our blog */}
            </span>
            <h1 className="text-3xl font-bold capitalize dark:text-white">
              Tools
            </h1>
          </div>

          <ul className="w-96">
            <li>
              <Link
                className="w-full p-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white rounded-md"
                href="tools/color-picker"
              >
                Color Picker
              </Link>
            </li>
            {/* <li className="w-full py-4">And a fifth one</li> */}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Tools;
