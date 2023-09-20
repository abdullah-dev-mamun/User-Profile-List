import React, { Fragment, useEffect, useState } from "react";

function HomePage(props) {
  const [currentScene, setCurrentScene] = useState(1);
  const [currentUser, setCurrentUser] = useState({});
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

  useEffect(() => {
    if (currentUser && Object.keys(currentUser).length) {
      setCurrentScene(2);
    }
  }, [currentUser]);

  function UserList({ users = [] }) {
    return (
      <Fragment>
        <h1 className="font-bold text-teal-600 text-2xl text-center my-6">
          List of user profile
        </h1>
        <section className="w-full md:w-4/5  mx-auto mb-12">
          <table className="w-full  [&>*:last-child]:border-b">
            <thead>
              <tr className="border-b text-gray-800 border-t text-sm md:text-lg bg-gray-200">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 ">Email</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {users.map((user, index) => {
                return (
                  <tr
                    onClick={() => setCurrentUser(user)}
                    key={index}
                    className="border-b cursor-pointer hover:bg-gray-100/80 transition-all duration-300 ease-in-out"
                  >
                    <td className="md:text-lg font-bold text-teal-600 p-2">
                      <div className="flex items-center justify-start space-x-2">
                        <img
                          className="w-10 h-10 md:w-16 md:h-16 bg-gray-100 rounded-full border"
                          src={user.image}
                          alt=""
                        />
                        <div>
                          <p>
                            {user.firstName} {user.lastName}
                          </p>
                          <p className="text-neutral-500">@{user.username}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-blue-700 text-center">{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </Fragment>
    );
  }

  function UserDetail({ user = {} }) {
    return (
      <section className="mx-3">
        <div className=" my-6 flex flex-col justify-center">
          <h1 className="font-bold text-teal-600 text-2xl text-center mb-3">
            User General information
          </h1>

          <button
            className="p-3 bg-teal-600 hover:bg-teal-500 transition-all duration-300 ease-in-out  text-white rounded-lg flex gap-2 items-center justify-center self-center"
            type="button"
            onClick={() => setCurrentScene(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                fill="#fff"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
            Back to user list
          </button>
        </div>
        <div className="w-full md:max-w-[80%] mx-auto mb-12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 lg:p-8 xl:text-lg capitalize rounded-lg">
          {/* user info */}

          <div className="grid justify-center gap-2">
            <img
              className="md:w-32 md:h-32 w-20 h-20 bg-gray-100 rounded-full flex mx-auto text-center items-end self-center"
              src={user.image}
              alt=""
            />

            <div className="md:text-lg font-bold text-teal-600 ">
              <span className="w-8 h-8 bg-teal-600 rounded-full inline-flex justify-center items-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#fff"
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                  />
                </svg>
              </span>
              {user.firstName} {user.lastName}
            </div>

            <a href="#" className="text-blue-700 normal-case flex items-center">
              <span className="w-8 h-8 bg-blue-700 rounded-full inline-flex justify-center items-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fff"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  />
                </svg>
              </span>
              {user.email}
            </a>
          </div>
          {/* User details  */}
          <div className="xl:text-lg capitalize grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 rounded-lg mt-8">
            <dl>
              <dt className="font-bold text-teal-600">gender:</dt>
              <dd className="">{user.gender}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">phone:</dt>
              <dd className="">{user.phone}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">BirthDate:</dt>
              <dd className="">{user.birthDate}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">bloodGroup:</dt>
              <dd className="">{user.bloodGroup}</dd>
            </dl>

            <dl>
              <dt className="font-bold text-teal-600">height:</dt>
              <dd className="">{user.height}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">weight:</dt>
              <dd className="">{user.weight}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">age:</dt>
              <dd className="">{user.age}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">hair:</dt>
              <dd>
                <strong className="text-gray-600">color: </strong>
                {user.hair.color}
              </dd>
              <dd className="">
                <strong className="text-gray-600">type: </strong>
                {user.hair.color}
              </dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">domain:</dt>
              <dd className="">{user.domain}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">ip:</dt>
              <dd className="">{user.ip}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">address:</dt>
              <dd>{user.address.address}</dd>
              <dd>{user.address.city}</dd>
              <dd>{user.address.coordinates.lat}</dd>
              <dd>{user.address.coordinates.lng}</dd>
              <dd>{user.address.postalCode}</dd>
              <dd>{user.address.state}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">macAddress:</dt>
              <dd className="">{user.macAddress}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">university:</dt>
              <dd className="">{user.university}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">userAgent:</dt>
              <dd className="">{user.userAgent}</dd>
            </dl>
            <dl>
              <dt className="font-bold text-teal-600">bank:</dt>
              <dd className="">
                <strong className="text-gray-600">cardExpire: </strong>
                {user.bank.cardExpire}
              </dd>
              <dd className="">
                <strong className="text-gray-600">cardNumber: </strong>
                {user.bank.cardNumber}
              </dd>
              <dd className="">
                <strong className="text-gray-600">cardType: </strong>
                {user.bank.cardType}
              </dd>
              <dd className="">
                <strong className="text-gray-600">currency: </strong>
                {user.bank.currency}
              </dd>
              <dd className="">
                <strong className="text-gray-600">iban: </strong>
                {user.bank.iban}
              </dd>
            </dl>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {(() => {
        switch (currentScene) {
          case 1:
            return <UserList users={users} />;
          case 2:
            return <UserDetail user={currentUser} />;

          default:
            return null;
        }
      })()}
    </div>
  );
}

export default HomePage;
