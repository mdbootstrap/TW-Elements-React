import React, { ReactElement } from "react";

//demo pages
import ButtonPage from "./pages/components/button/ButtonPage";
import CollapsePage from "./pages/components/collapse/CollapsePage";

//examples pages
import ButtonExamples from "./pages/components/button/exampleList";
import CollapseExamples from "./pages/components/collapse/exampleList";
import BadgesPage from "./pages/components/badges/BadgesPage";
import AvatarPage from "./pages/components/avatar/AvatarPage";
import PaginationPage from "./pages/navigation/pagination/PaginationPage";

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
  { name: "avatar", path: "/components/avatar", element: <AvatarPage /> },
  { name: "badge", path: "/components/badges", element: <BadgesPage /> },
];

const contentStylesPages: Pages[] = [];

const dataPages: Pages[] = [];

const formsPages: Pages[] = [];

const methodsPages: Pages[] = [];

const navigationPages: Pages[] = [
  { name: "pagination", path: "/navigation/[agination", element: <PaginationPage /> },
];

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
