import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  const apiUrl = "https://dummyjson.com/users";

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(apiUrl);
    const json = await response.json();
    setUsers(json.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-bold text-teal-600 text-2xl text-center my-6">
        List of user profile
      </h1>
      <section className="w-full md:w-4/5  mx-auto mb-12">
        <table className="w-full text-center [&>*:last-child]:border-b">
          <thead>
            <tr className="border-b text-gray-800 border-t text-sm md:text-lg bg-gray-200">
              <th className="p-3">User Name</th>
              <th className="p-3">User Email</th>
              <th className="p-3">Profile Picture</th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            {users.map((user, index) => {
              return (
                <tr
                  onClick={() => navigate("/user-details")}
                  key={index}
                  className="border-b cursor-pointer hover:bg-gray-100/80 transition-all duration-300 ease-in-out"
                >
                  <td className="md:text-lg font-bold text-teal-600 p-2">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="text-blue-700">{user.email}</td>
                  <td className="p-3">
                    <img
                      className="w-10 h-10 md:w-16 md:h-16 bg-gray-100 rounded-full flex mx-auto text-center items-end self-center"
                      src={user.image}
                      alt=""
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default HomePage;
