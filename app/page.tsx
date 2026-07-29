"use client";

import { useState } from "react";

export default function Home() {
  const [flashing, setFlashing] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <button
        onClick={() => setFlashing((prev) => !prev)}
        className={`rounded-xl px-20 py-10 text-3xl font-bold text-white ${
          flashing ? "animate-flash" : "bg-red-600"
        }`}
      >
        Click Me
      </button>
    </div>
  );
}
