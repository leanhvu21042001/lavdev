import Link from "next/link";
import React from "react";

const Tools = () => {
  return (
    <main>
      <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight text-primary text-center">
        Tools
      </h2>

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
    </main>
  );
};

export default Tools;
