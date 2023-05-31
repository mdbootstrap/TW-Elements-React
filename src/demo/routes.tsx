import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import demoPages from "./pages";
import { examplesPages } from "./pages";
import HomePage from "./HomePage";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Routes(): JSX.Element {
  return (
    <>
      <Switch>
        <Route path="/" element={<HomePage />} />
        {demoPages.map(({ pages }) =>
          pages.map(({ name, path, element }) => (
            <Route key={name} path={path} element={element} />
          ))
        )}
        {examplesPages.map(({ name, path, element }) => (
          <Route key={name} path={path} element={element} />
        ))}
      </Switch>
      <ThemeSwitcher />
    </>
  );
}
