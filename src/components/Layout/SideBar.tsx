import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faChartLine, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useRepositories from "../../hooks/useRepositories";
import UserList from "components/List/UserList";
import UserRepositoryList from "components/List/UserRepositoryList";

const SideBar = ({ user }: { user: string }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { repositories } = useRepositories();
  const [listToggle, setListToggle] = useState<boolean>(false);
  
  return (
    <div className={`flex flex-col p-4 transition-all duration-600 ${toggle ? "w-1/18" : "w-1/5"}`}>
      {/* 중간 대시보드 하나 */}
      <div
        className="flex gap-3 p-4 items-center cursor-pointer rounded-md hover:bg-gray-200 mb-10"
        onClick={() => setToggle(!toggle)}
      >
        <FontAwesomeIcon icon={faTableColumns} className="fa-lg" />
        <span className={`font-medium transition-all duration-400 ${toggle ? "opacity-0" : ""}`}>DASHBOARD</span>
      </div>
      {/* 메뉴 */}
      <Link
        to={"/"}
        className="flex gap-3 p-4 items-center cursor-pointer rounded-md hover:bg-gray-200"
      >
        <FontAwesomeIcon icon={faChartLine} className="fa-lg" />
        <span className={`font-medium transition-all duration-400 ${toggle ? "opacity-0" : ""}`}>LeaderBoard</span>
      </Link>
      <button
        className="flex gap-3 p-4 items-center cursor-pointer rounded-md hover:bg-gray-200"
        onClick={() => setListToggle(!listToggle)}
      >
        <FontAwesomeIcon icon={faUsers} />
        <span
          className={`font-medium transition-all duration-400 whitespace-nowrap ${toggle ? "opacity-0" : ""}`}
          >{user == "None" ? "Users TIL" : `${user} Repo`}</span>
      </button>
      {/* Github API 연동 */}
      {listToggle && (
        user == "None" ? (
          <UserList toggle={toggle} repositories={repositories} />
        ) : (
          <UserRepositoryList user={user} />
        )
      )}
    </div>
  );
};

export default SideBar;