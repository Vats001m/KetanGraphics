import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { renderRoute, Page } from "./routes";

/**
 * App component (orchestrator)
 * - Holds currentPage state
 * - Renders Header (passes setCurrentPage)
 * - Renders the page from routes via renderRoute
 * - Renders Footer
 */
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // optional props we pass into pages (pages can use setCurrentPage)
  const pageProps = { setCurrentPage };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderRoute(currentPage, pageProps)}
      <Footer />
    </div>
  );
};

export default App;
