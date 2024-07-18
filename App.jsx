import Navbar from "./components/Navbar";
import "./App.css";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainban from "./components/Mainban";
import Serch from "./components/Serch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path=""
            element={
              <>
                <Mainban />
                <Movies />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/serch" element={<Serch/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
