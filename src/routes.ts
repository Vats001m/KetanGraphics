import React from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

/**
 * Page keys used across the app.
 */
export type Page = "home" | "services" | "gallery" | "about" | "contact";

/**
 * Props that all page components may accept.
 */
export type PageProps = {
  setCurrentPage?: (p: Page) => void;
};

/**
 * Map of page key -> React component.
 */
const routesMap: Record<Page, React.ComponentType<PageProps>> = {
  home: Home,
  services: Services,
  gallery: Gallery,
  about: About,
  contact: Contact,
};

export default routesMap;

/**
 * renderRoute(page, props)
 * - returns a React element for the requested page.
 * - implemented using React.createElement to avoid JSX parsing issues.
 */
export function renderRoute(page: Page = "home", props: PageProps = {}): React.ReactElement {
  const Component = routesMap[page] ?? Home;
  return React.createElement(Component, props);
}
