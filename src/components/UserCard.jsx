import "./styles/UserCard.css";

const UserCard = ({
  user,
  deletUser,
  setUpdatingUser,
  handleClickShowModal,
}) => {
  const handleClickEdit = () => {
    setUpdatingUser(user);
    handleClickShowModal();
  };
  return (
    <article className="userCard">
      <h3 className="userCard__title">
        {user.first_name}, {user.last_name}
      </h3>
      <hr />
      <div className="userCard__main">
        <ul className="userCard__cont">
          <li className="userCard__list">
            <span>Email:</span>
            {user.email}
          </li>
          <li className="userCard__list">
            <span>Birthday:</span>
            <i className="bx bx-gift"></i>
            {user.birthday}
          </li>
        </ul>
        <hr />
        <button className="userCard__delete" onClick={() => deletUser(user.id)}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="userCard__edit" onClick={handleClickEdit}>
          <i className="bx bx-pencil"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
