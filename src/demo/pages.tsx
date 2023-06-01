import React, { ReactElement } from "react";

//demo pages
import ButtonPage from "./pages/components/button/ButtonPage";
import CollapsePage from "./pages/components/collapse/CollapsePage";
import ColorsPage from "./pages/content-styles/colors/ColorsPage";
import DividersPage from "./pages/content-styles/dividers/DividersPage";
import FiguresPage from "./pages/content-styles/figures/FiguresPage";

//examples pages
import ButtonExamples from "./pages/components/button/exampleList";
import CollapseExamples from "./pages/components/collapse/exampleList";

interface Pages {
  name: string;
  path: string;
  element: ReactElement;
}

interface PagesSection {
  section: string;
  pages: Pages[];
}

const componentsPages: Pages[] = [
  { name: "button", path: "/components/button", element: <ButtonPage /> },
  { name: "collapse", path: "/components/collapse", element: <CollapsePage /> },
];

const contentStylesPages: Pages[] = [
  { name: "colors", path: "/content-styles/colors", element: <ColorsPage /> },
  {
    name: "dividers",
    path: "/content-styles/dividers",
    element: <DividersPage />,
  },
  {
    name: "figures",
    path: "/content-styles/figures",
    element: <FiguresPage />,
  },
];

const dataPages: Pages[] = [];

const formsPages: Pages[] = [];

const methodsPages: Pages[] = [];

const navigationPages: Pages[] = [];

const designBlocksPages: Pages[] = [];

// list of pages with sections
const demoPages: PagesSection[] = [
  {
    section: "components",
    pages: componentsPages,
  },
  {
    section: "content styles",
    pages: contentStylesPages,
  },
  {
    section: "data",
    pages: dataPages,
  },
  {
    section: "forms",
    pages: formsPages,
  },
  {
    section: "methods",
    pages: methodsPages,
  },
  {
    section: "navigation",
    pages: navigationPages,
  },
  {
    section: "design blocks",
    pages: designBlocksPages,
  },
];

// list of examples
export const examplesPages: Pages[] = [...ButtonExamples, ...CollapseExamples];

export default demoPages;
