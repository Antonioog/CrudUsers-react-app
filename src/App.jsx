import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import Navbar from "./components/Navbar";
import ModalForm from "./components/ModalForm";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [updatingUser, setUpdatingUser] = useState();

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal);
  };

  const createUser = (data) => {
    axios
      .post(`${BASE_URL}users/`, data)
      .then(() => {
        getAllUsers();
        handleClickShowModal();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const deletUser = (id) => {
    axios
      .delete(`${BASE_URL}users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const upDateUser = (data, id) => {
    axios
      .patch(`${BASE_URL}users/${id}/`, data)
      .then(() => {
        getAllUsers();
        handleClickShowModal();
        setUpdatingUser();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <Navbar handleClickShowModal={handleClickShowModal} />
      <ModalForm
        handleClickShowModal={handleClickShowModal}
        isShowModal={isShowModal}
        createUser={createUser}
        updatingUser={updatingUser}
        upDateUser={upDateUser}
        setUpdatingUser={setUpdatingUser}
      />
      <UserList
        users={users}
        deletUser={deletUser}
        setUpdatingUser={setUpdatingUser}
        handleClickShowModal={handleClickShowModal}
      />
    </div>
  );
}

export default App;
