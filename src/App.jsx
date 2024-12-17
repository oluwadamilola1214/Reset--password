import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPasswords from "./Components/ResetPasswords";

import LinkSentPage from "./Components/LinkSentPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResetPasswords />} />
      
        <Route path="/link-sent" element={<LinkSentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
