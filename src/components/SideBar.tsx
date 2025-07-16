import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faChartLine, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getRepositories } from "../api/repository";

const SideBar = ({ user }: { user: string }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [repos, setRepos] = useState<any[]>([]);
  const [userToggle, setUserToggle] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getRepositories();
      setRepos(data.filter(repo => !["Plain-TIL.github.io", "main_data"].includes(repo.name)))
    }
    getData();
  }, [])
  
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
        repos.map((repo: any, index: number) => {
          return (
            <div key={index} className={`relative flex gap-4 px-4.75 items-center cursor-pointer rounded-md hover:bg-gray-200 py-2 ${toggle ? "pb-4" : "mb-2"}`}>
              <FontAwesomeIcon icon={faUser} />
              <span className={`font-medium transition-all duration-400 whitespace-nowrap ${toggle ? "opacity-0" : ""}`}>
                {repo.name}
              </span>
              <span className={`absolute top-8 left-1/2 -translate-x-1/2 text-xs transition-opacity whitespace-nowrap ${toggle ? "delay-400 duration-400" : "opacity-0 duration-100"}`}>
                {repo.name}
              </span>
            </div> 
          )
        })
      )}
    </div>
  )
}

export default SideBar;