import React from "react";

export function NameIconSmall({ name }: { name: string | null | undefined }) {
  return (
    <div className="mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-secondary py-2 text-sm font-bold text-light">
      {name?.charAt(0)}
    </div>
  );
}

export function NameIconLarge({ name }: { name: string | null | undefined }) {
  return (
    <div className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-bold text-light">
      {name?.charAt(0)}
    </div>
  );
}
