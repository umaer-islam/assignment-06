"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#15181E",
          color: "#ffffff",
          border: "1px solid #272C35",
        },
      }}
    />
  );
}
