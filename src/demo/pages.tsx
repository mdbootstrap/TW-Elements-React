import React, { ReactElement } from "react";

//demo pages
import ButtonPage from "./pages/components/button/ButtonPage";
import CollapsePage from "./pages/components/collapse/CollapsePage";
import RipplePage from "./pages/methods/ripple/RipplePage";
import ColorsPage from "./pages/content-styles/colors/ColorsPage";
import DividersPage from "./pages/content-styles/dividers/DividersPage";
import FiguresPage from "./pages/content-styles/figures/FiguresPage";
import ShadowsPage from "./pages/content-styles/shadows/ShadowsPage";
import TypographyPage from "./pages/content-styles/typography/TypographyPage";
import BreadcrumbsPage from "./pages/navigation/breadcrumbs/BreadcrumbsPage";
import ImagesPage from "./pages/content-styles/images/ImagesPage";
import HeadingsPage from "./pages/content-styles/headings/HeadingsPage";
import IconsPage from "./pages/content-styles/icons/IconsPage";
import BadgesPage from "./pages/components/badges/BadgesPage";
import AvatarPage from "./pages/components/avatar/AvatarPage";
import PaginationPage from "./pages/navigation/pagination/PaginationPage";
import ListGroupPage from "./pages/components/listgroup/ListGroupPage";
import ParagraphsPage from "./pages/components/paragraphs/ParagraphsPage";
import ProgressPage from "./pages/components/progress/ProgressPage";
import RatingPage from "./pages/components/rating/RatingPage";
import SpinnersPage from "./pages/components/spinners/SpinnersPage";
import CheckboxPage from "./pages/forms/checkbox/CheckboxPage";

//examples pages
import ButtonExamples from "./pages/components/button/exampleList";
import CollapseExamples from "./pages/components/collapse/exampleList";
import RippleExamples from "./pages/methods/ripple/exampleList";

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
  { name: "rating", path: "/components/rating", element: <RatingPage /> },
  { name: "spinners", path: "/components/spinners", element: <SpinnersPage /> },
  { name: "avatar", path: "/components/avatar", element: <AvatarPage /> },
  { name: "badge", path: "/components/badges", element: <BadgesPage /> },
  {
    name: "list group",
    path: "/components/listgroup",
    element: <ListGroupPage />,
  },
  {
    name: "paragraphs",
    path: "/components/paragraphs",
    element: <ParagraphsPage />,
  },
  {
    name: "Progress",
    path: "/components/progress",
    element: <ProgressPage />,
  },
];

const contentStylesPages: Pages[] = [
  { name: "images", path: "/content-styles/images", element: <ImagesPage /> },
  { name: "icons", path: "/content-styles/icons", element: <IconsPage /> },
  {
    name: "headings",
    path: "/content-styles/headings",
    element: <HeadingsPage />,
  },
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
  {
    name: "shadows",
    path: "/content-styles/shadows",
    element: <ShadowsPage />,
  },
  {
    name: "typography",
    path: "/content-styles/typography",
    element: <TypographyPage />,
  },
];

const dataPages: Pages[] = [];

const formsPages: Pages[] = [
  { name: "checkbox", path: "/forms/checkbox", element: <CheckboxPage /> },
];

const methodsPages: Pages[] = [
  { name: "ripple", path: "/methods/ripple", element: <RipplePage /> },
];

const navigationPages: Pages[] = [
  {
    name: "breadcrumbs",
    path: "/navigation/breadcrumbs",
    element: <BreadcrumbsPage />,
  },
  {
    name: "pagination",
    path: "/navigation/pagination",
    element: <PaginationPage />,
  },
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
export const examplesPages: Pages[] = [
  ...ButtonExamples,
  ...CollapseExamples,
  ...RippleExamples,
];

export default demoPages;
