"use client";

import { useState } from "react";

export default function Home() {
  const [flashing, setFlashing] = useState(false);
  const [flashingGreen, setFlashingGreen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-neutral-900">
      <button
        onClick={() => setFlashing((prev) => !prev)}
        className={`rounded-xl px-20 py-10 text-3xl font-bold text-white ${
          flashing ? "animate-flash" : "bg-red-600"
        }`}
      >
        Click Me
      </button>
      <button
        onClick={() => setFlashingGreen((prev) => !prev)}
        className={`rounded-xl px-20 py-10 text-3xl font-bold text-white ${
          flashingGreen ? "animate-flash-green" : "bg-green-600"
        }`}
      >
        Click Me Too
      </button>
    </div>
  );
}
