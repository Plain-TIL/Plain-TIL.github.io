import { HashRouter, Route, Routes } from "react-router-dom";
import LeaderBoardWrapper from "pages/LeaderBoard";
import UserTIL from "pages/UserTIL";
import NotFound from "pages/NotFound";
import Layout from "components/Layout/Layout";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<LeaderBoardWrapper></LeaderBoardWrapper>}/>
          <Route path=":user" element={<UserTIL></UserTIL>} />
        </Route>
        <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
    </HashRouter>
  );
};

export default Router;