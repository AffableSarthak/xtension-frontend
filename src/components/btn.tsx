"use client";

import { deleteCookie } from "@/app/actions";

export default function Button() {
  return (
    <button
      onClick={async () => await deleteCookie("session_id")}
      className="px-4 py-2 rounded-md bg-cyan-100 text-black font-mono font-bold "
    >
      Logout
    </button>
  );
}
