import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* const UserDetailsData = [
  {
    title: "university",
    des: "Capitol University",
  },
  {
    title: "domain",
    des: "slashdot.org",
  },
  {
    title: "ip",
    des: "117.29.86.254",
  },
  {
    SubDetailsData: [
      {
        title: "address",
        des: "1745 T Street Southeast",
      },
    ],
  },
]; */

const UserDetails = () => {
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
    <section className="mx-3">
      <h1 className="font-bold text-teal-600 text-2xl text-center my-6">
        User General information
      </h1>
      {users.map((user, index) => {
        return (
          <div
            key={index}
            className="w-full md:max-w-[80%] mx-auto mb-12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 lg:p-8 xl:text-lg capitalize rounded-lg"
          >
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

              <Link
                to="#"
                className="text-blue-700 normal-case flex items-center"
              >
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
              </Link>
            </div>
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
                <dt className="font-bold text-teal-600">eyeColor:</dt>
                <dd className="">{user.eyeColor}</dd>
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
        );
      })}
    </section>
  );
};

export default UserDetails;
