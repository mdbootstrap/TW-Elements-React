import React, { ReactElement } from 'react';

//demo pages
import ButtonPage from './pages/button/ButtonPage';
import CollapsePage from './pages/collapse/CollapsePage';
import HomePage from './HomePage';

//examples pages
import ButtonBasicExample from './pages/button/examples/ButtonBasicExample';
import CollapseBasicExample from './pages/collapse/examples/CollapseBasicExample';

interface Pages {
  name: string,
  path: string,
  element: ReactElement,
}

const demoPages: Pages[] = [
  { name: 'home', path: '/', element: <HomePage /> },
  { name: 'button', path: '/button', element: <ButtonPage /> },
  { name: 'collapse', path: '/collapse', element: <CollapsePage /> },
]

export const examplesPages: Pages[] = [
  { name: 'ButtonBasicExample', path: '/button/examples/button-basic-example', element: <ButtonBasicExample /> },
  { name: 'CollapseBasicExample', path: '/collapse/examples/collapse-basic-example', element: <CollapseBasicExample /> },
]

export default demoPages;
