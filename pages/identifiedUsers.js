import React, { useState, useEffect } from "react";

export default function IdentifiedUsers(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  export const getData = async () => {
    const res = await fetch("http://localhost:3100/users");
    const data = await res.json();

    return {
      props: { users: data },
    };
  };

  console.log(users);

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
