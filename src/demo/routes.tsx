import React, { useState, useEffect } from "react";
import { Route, Routes as Switch, useLocation } from "react-router-dom";

import demoPages from "./pages";
import { examplesPages } from "./pages";
import HomePage from "./HomePage";
import ThemeSwitcher from "./ThemeSwitcher";
import Example from "./components/Example";

export default function Routes(): JSX.Element {
  const [isNotExample, setIsNotExample] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsNotExample(!location.pathname.includes("examples"));
  }, [location]);

  return (
    <>
      <div className={isNotExample ? "my-16" : ""}>
        <Switch>
          <Route path="/" element={<HomePage />} />
          {demoPages.map(({ pages }) =>
            pages.map(({ name, path, element }) => (
              <Route key={name} path={path} element={element} />
            ))
          )}
          {examplesPages.map(({ name, path, element, fullscreenOnly }) => (
            <Route
              key={name}
              path={path}
              element={
                <Example path={path} fullscreenOnly={fullscreenOnly}>
                  {element}
                </Example>
              }
            />
          ))}
        </Switch>
      </div>
      <ThemeSwitcher isNotExample={isNotExample} />
    </>
  );
}
