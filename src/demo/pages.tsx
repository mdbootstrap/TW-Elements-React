import React, { ReactElement } from "react";

//demo pages
import ButtonsPage from "./pages/components/buttons/ButtonsPage";
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
import FileInputPage from "./pages/forms/file-input/FileInputPage";
import RadioPage from "./pages/forms/radio/RadioPage";
import RangePage from "./pages/forms/range/RangePage";
import ListGroupPage from "./pages/components/listgroup/ListGroupPage";
import ParagraphsPage from "./pages/components/paragraphs/ParagraphsPage";
import ProgressPage from "./pages/components/progress/ProgressPage";
import RatingPage from "./pages/components/rating/RatingPage";
import SpinnersPage from "./pages/components/spinners/SpinnersPage";
import CheckboxPage from "./pages/forms/checkbox/CheckboxPage";
import LinkPage from "./pages/components/link/LinkPage";
import HoverEffectPage from "./pages/content-styles/hover-effects/HoverEffectPage";
import MaskPage from "./pages/content-styles/mask/MaskPage";
import TablesPage from "./pages/data/tables/TablesPage";
import SwitchPage from "./pages/forms/switch/SwitchPage";
import SocialButtonsPage from "./pages/components/social-buttons/SocialButtonsPage";
import TimelinePage from "./pages/components/timeline/TimelinePage";
import CardsPage from "./pages/components/cards/CardsPage";
import PlaceholdersPage from "./pages/components/placeholders/PlaceholdersPage";
import ButtonGroupPage from "./pages/components/button-group/ButtonGroupPage";
import TabsPage from "./pages/navigation/tabs/TabsPage";
import PillsPage from "./pages/navigation/pills/PillsPage";
import ModalPage from "./pages/components/modal/ModalPage";
import InputPage from "./pages/forms/inputs/InputPage";
import ScrollBackToTopButtonPage from "./pages/components/scroll-back-to-top-button/ScrollBackToTopButtonPage";
import AccordionPage from "./pages/components/accordion/AccordionPage";
import FormTemplatesPage from "./pages/forms/form-templates/FormTemplatesPage";
import LoginFormPage from "./pages/forms/login-form/LoginFormPage";
import RegistrationFormPage from "./pages/forms/registration-form/RegistrationFormPage";
import SearchPage from "./pages/forms/search/SearchPage";
import FooterPage from "./pages/navigation/footer/FooterPage";
import PopoverPage from "./pages/components/popover/PopoverPage";
import DropdownPage from "./pages/components/dropdown/DropdownPage";
import ChartPage from "./pages/data/chart/ChartPage";
import TooltipPage from "./pages/components/tooltip/TooltipPage";
import TextareaPage from "./pages/forms/textarea/TextareaPage";
import SelectPage from "./pages/forms/select/SelectPage";

//examples pages
import ButtonExamples from "./pages/components/buttons/exampleList";
import CollapseExamples from "./pages/components/collapse/exampleList";
import RippleExamples from "./pages/methods/ripple/exampleList";
import LinkExamples from "./pages/components/link/exampleList";
import HoverEffectExamples from "./pages/content-styles/hover-effects/exampleList";
import MaskExamples from "./pages/content-styles/mask/exampleList";
import SocialButtonsExamples from "./pages/components/social-buttons/exampleList";
import TimelineExamples from "./pages/components/timeline/exampleList";
import CardsExamples from "./pages/components/cards/exampleList";
import PlaceholderExamples from "./pages/components/placeholders/exampleList";
import ButtonGroupExamples from "./pages/components/button-group/exampleList";
import TabsExamples from "./pages/navigation/tabs/exampleList";
import PillsExamples from "./pages/navigation/pills/exampleList";
import ModalExamples from "./pages/components/modal/exampleList";
import InputExamples from "./pages/forms/inputs/exampleList";
import ScrollBackToTopButtonExamples from "./pages/components/scroll-back-to-top-button/exampleList";
import AccordionExamples from "./pages/components/accordion/exampleList";
import FormTemplatesExamples from "./pages/forms/form-templates/exampleList";
import LoginFormExamples from "./pages/forms/login-form/exampleList";
import RegistrationFormExamples from "./pages/forms/registration-form/exampleList";
import SearchExamples from "./pages/forms/search/exampleList";
import FooterExamples from "./pages/navigation/footer/exampleList";
import PopoverExamples from "./pages/components/popover/exampleList";
import DropdownExamples from "./pages/components/dropdown/exampleList";
import ChartExamples from "./pages/data/chart/exampleList";
import TooltipExamples from "./pages/components/tooltip/exampleList";
import TextareaExamples from "./pages/forms/textarea/exampleList";
import SelectExamples from "./pages/forms/select/exampleList";

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
  { name: "buttons", path: "/components/buttons", element: <ButtonsPage /> },
  { name: "collapse", path: "/components/collapse", element: <CollapsePage /> },
  { name: "rating", path: "/components/rating", element: <RatingPage /> },
  { name: "spinners", path: "/components/spinners", element: <SpinnersPage /> },
  { name: "avatar", path: "/components/avatar", element: <AvatarPage /> },
  { name: "badge", path: "/components/badges", element: <BadgesPage /> },
  { name: "link", path: "/components/link", element: <LinkPage /> },
  { name: "cards", path: "/components/cards", element: <CardsPage /> },
  {
    name: "placeholders",
    path: "/components/placeholders",
    element: <PlaceholdersPage />,
  },
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
  {
    name: "social buttons",
    path: "/components/social-buttons",
    element: <SocialButtonsPage />,
  },
  {
    name: "timeline",
    path: "/components/timeline",
    element: <TimelinePage />,
  },
  {
    name: "Button group",
    path: "/components/button-group",
    element: <ButtonGroupPage />,
  },
  { name: "modal", path: "/components/modal", element: <ModalPage /> },
  {
    name: "scroll back to top button",
    path: "/components/scroll-back-to-top-button",
    element: <ScrollBackToTopButtonPage />,
  },
  {
    name: "accordion",
    path: "/components/accordion",
    element: <AccordionPage />,
  },
  {
    name: "popover",
    path: "/components/popover",
    element: <PopoverPage />,
  },
  {
    name: "dropdown",
    path: "/components/dropdown",
    element: <DropdownPage />,
  },
  {
    name: "tooltip",
    path: "/components/tooltip",
    element: <TooltipPage />,
  },
];

const contentStylesPages: Pages[] = [
  { name: "images", path: "/content-styles/images", element: <ImagesPage /> },
  { name: "icons", path: "/content-styles/icons", element: <IconsPage /> },
  { name: "mask", path: "/content-styles/mask", element: <MaskPage /> },
  {
    name: "hover effect",
    path: "/content-styles/hover-effect",
    element: <HoverEffectPage />,
  },
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

const dataPages: Pages[] = [
  { name: "tables", path: "/data/tables", element: <TablesPage /> },
  { name: "chart", path: "/data/chart", element: <ChartPage /> },
];

const formsPages: Pages[] = [
  {
    name: "file input",
    path: "/forms/file-input",
    element: <FileInputPage />,
  },
  {
    name: "radio",
    path: "/forms/radio",
    element: <RadioPage />,
  },
  {
    name: "range",
    path: "/forms/range",
    element: <RangePage />,
  },
  { name: "switch", path: "/forms/switch", element: <SwitchPage /> },
  { name: "checkbox", path: "/forms/checkbox", element: <CheckboxPage /> },
  {
    name: "Inputs",
    path: "/components/inputs",
    element: <InputPage />,
  },
  {
    name: "form templates",
    path: "/forms/form-templates",
    element: <FormTemplatesPage />,
  },
  {
    name: "login form",
    path: "/forms/login-form",
    element: <LoginFormPage />,
  },
  {
    name: "registration form",
    path: "/forms/registration-form",
    element: <RegistrationFormPage />,
  },
  {
    name: "Search",
    path: "/components/search",
    element: <SearchPage />,
  },
  {
    name: "Textarea",
    path: "/forms/textarea",
    element: <TextareaPage />,
  },
  {
    name: "Select",
    path: "/forms/select",
    element: <SelectPage />,
  },
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
  {
    name: "footer",
    path: "/navigation/footer",
    element: <FooterPage />,
  },
  {
    name: "tabs",
    path: "/navigation/tabs",
    element: <TabsPage />,
  },
  {
    name: "pills",
    path: "/navigation/pills",
    element: <PillsPage />,
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
  ...LinkExamples,
  ...HoverEffectExamples,
  ...MaskExamples,
  ...SocialButtonsExamples,
  ...TimelineExamples,
  ...CardsExamples,
  ...PlaceholderExamples,
  ...ButtonGroupExamples,
  ...TabsExamples,
  ...PillsExamples,
  ...ModalExamples,
  ...InputExamples,
  ...ScrollBackToTopButtonExamples,
  ...AccordionExamples,
  ...FormTemplatesExamples,
  ...LoginFormExamples,
  ...RegistrationFormExamples,
  ...SearchExamples,
  ...FooterExamples,
  ...PopoverExamples,
  ...DropdownExamples,
  ...ChartExamples,
  ...TooltipExamples,
  ...TextareaExamples,
  ...SelectExamples,
];

export default demoPages;
