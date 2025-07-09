import { faFire, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { users } from "../mocks/users";
import type { User } from "../types/user";

const LeaderBoard = () => {
  return (
    <div className="flex flex-col w-full inset-shadow-sm/15 rounded-2xl p-10 gap-4">
      <h2 className="text-3xl font-bold">전체 리더보드</h2>
      <div className="grid grid-cols-3 gap-10">
        {users.map((user: User, index: number) => {
          return (
            <div key={index} className="flex items-center rounded-lg bg-gray-100 p-6 gap-4">
              {/* 프로필 영역 */}
              <FontAwesomeIcon icon={faUser} className="fa-xl bg-gray-200 rounded-full p-2"/>
              {/* 정보 영역 */}
              <div className="flex flex-col">
                {/* name + streak */}
                <span className="font-bold">
                  {user.name} <span className={`${user.streak ? "text-red-500" : ""}`}>
                    <FontAwesomeIcon icon={faFire} /> {user.streak}
                  </span>
                </span>
                {/* max + til */}
                <span className="text-sm">Max Streak: {user.max_streak} / Total TIL: {user.til}</span>
                {/* status */}
                <span className="text-sm">Today: <span className={`${user.today ? "text-green-500" : "text-red-500"}`}>{user.today ? "작성 완료" : "미작성"}</span></span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LeaderBoard;