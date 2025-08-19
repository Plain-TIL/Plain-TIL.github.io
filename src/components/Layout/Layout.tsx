import { Outlet, useParams } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  const user = useParams().user || "None";

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* 바디 */}
      <main className="flex h-full">
        <SideBar user={user}/>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;