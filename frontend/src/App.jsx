import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import CreateResume from "./pages/CreateResume";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateResume />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;