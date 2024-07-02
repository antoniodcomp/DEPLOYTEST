import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GraphPageCPP } from "./pages/GraphPageCPP";
import { GraphPagePython } from "./pages/GraphPagePython";
import { MainPage } from "./pages/MainPage";
import { NoPage } from "./pages/NoPage";
import { GraphDetailPage } from "./pages/GraphDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<MainPage />} />
          <Route path="/GraphPageCPP" element={<GraphPageCPP />} />
          <Route path="/GraphDetailPage" element={<GraphDetailPage />} />
          <Route path="/GraphPagePython" element={<GraphPagePython/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
