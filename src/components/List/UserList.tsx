import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props {
  toggle: boolean;
  repositories: string[]
};

const UserList = ({ toggle, repositories }: Props) => {
  return (
    <>
      {repositories.map((name: any, index: number) => {
        return (
          <Link to={`/${name}`} key={index} className={`relative flex gap-4 px-4.75 items-center cursor-pointer rounded-md hover:bg-gray-200 py-2 ${toggle ? "pb-4" : "mb-2"}`}>
            <FontAwesomeIcon icon={faUser} />
            <span className={`font-medium transition-all duration-400 whitespace-nowrap ${toggle ? "opacity-0" : ""}`}>
              {name}
            </span>
            <span className={`absolute top-8 left-1/2 -translate-x-1/2 text-[10px] transition-opacity whitespace-nowrap ${toggle ? "delay-400 duration-400" : "opacity-0 duration-100"}`}>
              {name}
            </span>
          </Link> 
        )
      })}
    </>
  );
};

export default UserList;