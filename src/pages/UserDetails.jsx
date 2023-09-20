import React, { useEffect, useState } from "react";

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
            className="w-full md:max-w-[80%] mx-auto mb-12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 lg:p-12 xl:text-lg capitalize grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 rounded-lg"
          >
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
        );
      })}
    </section>
  );
};

export default UserDetails;
