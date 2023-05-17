import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import demoPages from './pages';
import { examplesPages } from './pages';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      {
        demoPages.map(({ name, path, element }) => (
          <Route key={name} path={path} element={element} />
        ))
      }
      {
        examplesPages.map(({ name, path, element }) => (
          <Route key={name} path={path} element={element} />
        ))
      }
    </Switch>
  );
}
  