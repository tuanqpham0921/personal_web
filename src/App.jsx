import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookRecommenderV2 } from "./pages/BookRecommender_v2";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/book-recommender-v2" element={<BookRecommenderV2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
