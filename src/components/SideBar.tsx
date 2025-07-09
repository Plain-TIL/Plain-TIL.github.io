import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faChartLine, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { users } from "../mocks/users";
import type { User } from "../types/user";

const SideBar = ({ user }: { user: string }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [userToggle, setUserToggle] = useState<boolean>(false);
  
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
        onClick={() => setUserToggle(!userToggle)}
      >
        <FontAwesomeIcon icon={faUsers} />
        <span
          className={`font-medium transition-all duration-400 whitespace-nowrap ${toggle ? "opacity-0" : ""}`}
          >{user == "None" ? "Users TIL" : user}</span>
      </button>
      {/* Github API 연동 */}
      {userToggle && (
        users.map((user: User, index: number) => {
          return (
            <div key={index} className={`relative flex gap-4 px-4.75 items-center cursor-pointer rounded-md hover:bg-gray-200 py-2 ${toggle ? "pb-4" : "mb-2"}`}>
              <FontAwesomeIcon icon={faUser} />
              <span className={`font-medium transition-all duration-400 whitespace-nowrap ${toggle ? "opacity-0" : ""}`}>
                {user.name}
              </span>
              <span className={`absolute top-8 left-2.5 text-xs transition-all duration-400 whitespace-nowrap ${toggle ? "" : "opacity-0"}`}>
                {user.name}
              </span>
            </div> 
          )
        })
      )}
    </div>
  )
}

export default SideBar;