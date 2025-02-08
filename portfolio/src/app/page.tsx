'use client';
import { useState, useEffect } from "react";

export default function HomePage() {
  const fullText =
    "I am an Electrical Engineer passionate about innovative solutions.";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length-1) {
        setText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(interval); // Stop the interval when the text is fully displayed
      }
    }, 50); // Adjust speed by changing the delay
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [fullText]);

  return (
    <section
      className="relative text-center py-16 px-4 bg-cover bg-center bg-[url('/homepage_landing.jpg')] h-screen"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4 text-gray-200">{text}</p>
        <p className="mt-6 text-xl">Explore my projects and skills below!</p>
      </div>
    </section>
  );
}
