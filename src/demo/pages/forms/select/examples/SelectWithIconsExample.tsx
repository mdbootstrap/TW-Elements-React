import React from "react";
import { TESelect } from "tw-elements-react";

export default function SelectWithIconsExample(): JSX.Element {
  const data = [
    {
      text: "One",
      value: 1,
      icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp",
    },
    {
      text: "Two",
      value: 2,
      icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp",
    },
    {
      text: "Three",
      value: 3,
      icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp",
    },
    {
      text: "Four",
      value: 4,
      icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp",
    },
    {
      text: "Five",
      value: 5,
      icon: "https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect data={data} />
      </div>
    </div>
  );
}
