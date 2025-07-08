import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LeaderBoard from "./pages/LeaderBoard";
import UserTIL from "./pages/UserTIL";
import NotFound from "./pages/NotFound";
import { usePageStore } from "./stores/usePageStore";

const App = () => {
  const { user } = usePageStore();

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        {/* 바디 */}
        <main className="flex h-full">
          <SideBar user={user}/>
          {/* 메인 */}
          <Routes>
            <Route path="/" element={<LeaderBoard></LeaderBoard>}/>
            <Route path="/:user" element={<UserTIL></UserTIL>} />
            <Route path="*" element={<NotFound></NotFound>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App;