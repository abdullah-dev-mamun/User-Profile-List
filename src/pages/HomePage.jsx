import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <>
      <h1 className="font-bold text-2xl text-center my-6">
        List of user profile
      </h1>
      <section className="w-full max-w-[80%] mx-auto px-4 mb-12">
        <table className="w-full text-center [&>*:last-child]:border-b">
          <thead>
            <tr className="border-b border-t p-3 bg-gray-100">
              <th>User Name</th>
              <th>User Email</th>
              <th className="p-3">Profile Picture</th>
            </tr>
          </thead>
          {users.map((user, index) => {
            return (
              <tbody key={index} className="">
                <tr className="border-b  p-3 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
                  <td className="text-lg font-bold">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="">{user.email}</td>
                  <td className="p-3">
                    <img
                      className="w-16 h-16 bg-gray-100 rounded-full flex mx-auto text-center items-end self-center"
                      src={user.image}
                      alt=""
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </section>
    </>
  );
}

export default HomePage;
