import React from "react";
import UserCard from "./UserCard";

const UserList = ({
  users,
  deletUser,
  setUpdatingUser,
  handleClickShowModal,
}) => {
  return (
    <section className="section">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deletUser={deletUser}
          setUpdatingUser={setUpdatingUser}
          handleClickShowModal={handleClickShowModal}
        />
      ))}
    </section>
  );
};

export default UserList;
