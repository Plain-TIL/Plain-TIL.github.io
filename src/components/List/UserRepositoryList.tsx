interface Props {
  user: string
}

const UserRepositoryList = ({ user }: Props) => {
  return (
    <>
      {user}
    </>
  )
};

export default UserRepositoryList;