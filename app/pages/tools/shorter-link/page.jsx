"use client";

import React, { useRef, useState } from "react";
import axios from "axios";

const ShorterLink = () => {
  const resultRef = useRef();

  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [shorterLink, setShorterLink] = useState("");

  const handleSubmitShorterLink = async () => {
    if (!link) return;

    try {
      const shorterLink = await axios(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );

      setShorterLink(shorterLink.data.result.short_link);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

  const handleCopyToClipBoard = () => {
    if (resultRef && resultRef.current.value) {
      resultRef.current.select();
      resultRef.current.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(resultRef.current.value);
      alert("Copied the text: " + resultRef.current.value);
    }
  };

  const handleResetValues = () => {
    setLink("");
    setError("");
    setShorterLink("");
  };
  return (
    <main>
      <section className="flex items-center py-16 bg-white font-poppins dark:bg-gray-900 ">
        <div className="justify-center flex-1 max-w-4xl px-4 py-4 mx-auto text-left lg:py-10 ">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
              {/* Our blog */}
            </span>
            <h1 className="text-3xl font-bold capitalize dark:text-white">
              Shorter Link
            </h1>
          </div>

          <div>
            <div className="mb-6">
              <input
                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:border-gray-900 dark:bg-gray-800 dark:text-gray-400"
                type="text"
                placeholder="Link here..."
                value={link}
                onChange={(event) => setLink(event.target.value)}
                onKeyPress={(event) =>
                  event.key === "Enter" ? handleSubmitShorterLink() : null
                }
              />
            </div>
            <div className="mt-7">
              <div className="flex justify-between space-x-2">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
                  onClick={handleSubmitShorterLink}
                >
                  Submit
                </button>

                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600"
                  onClick={handleResetValues}
                >
                  Reset
                </button>
              </div>
            </div>

            {error && (
              <div className="mt-10">
                <p className="block mb-2 text-sm font-medium text-red-400">
                  {error}
                </p>
              </div>
            )}

            {shorterLink && (
              <div className="mt-10 flex items-center gap-10">
                <label className="block mb-2 text-lg font-medium dark:text-gray-400">
                  Your short Link:
                </label>
                <input
                  disabled
                  className="block flex-1 px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:border-gray-900 dark:bg-gray-800 dark:text-gray-400"
                  type="text"
                  ref={resultRef}
                  value={shorterLink}
                />
                <button
                  type="button"
                  className="block px-6 py-3 mb-2 bg-green-500 text-white text-sm leading-tight rounded shadow-md hover:bg-green-600"
                  onClick={handleCopyToClipBoard}
                >
                  Copy link
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShorterLink;
