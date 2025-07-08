import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faChartLine, faUser } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ user }: { user: string }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  
  return (
    <div className={`flex flex-col p-4 transition-all duration-600 ${toggle ? "w-1/18" : "w-1/5"}`}>
      {/* 중간 대시보드 하나 */}
      <div
        className="flex gap-3 p-4 items-center cursor-pointer rounded-md hover:bg-gray-200 mb-10"
        onClick={() => setToggle(!toggle)}
      >
        <FontAwesomeIcon icon={faTableColumns} className="fa-lg" />
        <span className={`font-medium transition-all duration-300 ${toggle ? "opacity-0" : ""}`}>DASHBOARD</span>
      </div>
      {/* 메뉴 */}
      <div className="flex gap-3 p-4 items-center cursor-pointer rounded-md hover:bg-gray-200">
        <FontAwesomeIcon icon={faChartLine} className="fa-lg" />
        <span className={`font-medium transition-all duration-300 ${toggle ? "opacity-0" : ""}`}>LeaderBoard</span>
      </div>
      <div className="flex gap-3 p-4 items-center cursor-pointer rounded-md hover:bg-gray-200">
        <FontAwesomeIcon icon={faUser} className="fa-lg" />
        <span
          className={`font-medium transition-all duration-300 whitespace-nowrap ${toggle ? "opacity-0" : ""}`}
          >{user == "None" ? "Users TIL" : user}</span>
      </div>
    </div>
  )
}

export default SideBar;