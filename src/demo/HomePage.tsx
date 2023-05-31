import React from "react";
import ButtonLink from "./components/ButtonLink";

import demoPages from "./pages";

const HomePage = () => {
  return (
    <div className="my-8 mx-16">
      <h1 className="flex justify-center mb-10 mt-0 text-5xl font-medium leading-tight text-primary">
        Tailwind Element React UI KIT
      </h1>
      {demoPages.map(({ section, pages }) => (
        <div className="mb-10" key={section}>
          {pages.length > 0 && (
            <h2 className="uppercase text-2xl my-3">{section}</h2>
          )}
          {pages.map(({ name, path }) => (
            <ButtonLink href={path} key={name}>
              {name}
            </ButtonLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
