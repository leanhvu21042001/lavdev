"use client";

import React, { useState } from "react";
import styles from "./colorPicker.module.css";
import Image from "next/image";

const ColorPicker = () => {
  const [color, setColor] = useState("#5524e7");
  const [image, setImage] = useState(null);

  const openEyeDropper = async () => {
    let eyeDropper = new EyeDropper();
    const { sRGBHex } = await eyeDropper.open();
    setColor(sRGBHex);
  };

  const handleFileInput = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCopyColor = async () => {
    await navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
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
              Color Picker
            </h1>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.leftColumn}>
              <div className={styles.formSection}>
                <p>1. Select an image</p>
                <input
                  onChange={handleFileInput}
                  type="file"
                  accept="image/*"
                />
              </div>

              <div className={styles.formSection}>
                <p>2. Pick color</p>
                <button
                  className={styles.openPickerButton}
                  onClick={openEyeDropper}
                >
                  Open Eyedropper
                </button>
              </div>

              <div className={styles.formSection}>
                <p>3. View selected (Click to Copy color)</p>
                <button
                  className={styles.selectedColor}
                  style={{ background: color }}
                  onClick={handleCopyColor}
                >
                  <span>{color}</span>
                </button>
              </div>

              <span className={styles.shoutout}>
                Made with ❤️ by{" "}
                <a href="https://fb.com/lavdev.fb" target="_blank">
                  @lavdev
                </a>
              </span>
            </div>

            <div className={styles.rightColumn}>
              {image ? (
                <>
                  <Image
                    src={image}
                    alt="Working image"
                    width={500}
                    height={500}
                  />
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  />
                </>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="4em"
                  width="4em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"></path>
                  <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"></path>
                </svg>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ColorPicker;
