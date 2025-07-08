import { useParams } from "react-router-dom";

const UserTIL = () => {
  const { user } = useParams();

  return (
    <div className="flex w-full inset-shadow-sm rounded-2xl p-3">
      {user} 유저 TIL 상세 내용 표시
    </div>
  )
}

export default UserTIL;