import { useParams } from "react-router-dom";

const UserTIL = () => {
  const { user } = useParams();

  return (
    <div className="flex flex-col w-full inset-shadow-sm/15 rounded-2xl p-10 gap-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{user} 유저 TIL 상세 내용 표시</h2>
    </div>
  );
};

export default UserTIL;