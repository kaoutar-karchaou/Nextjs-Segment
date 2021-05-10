import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { ResponsivePie } from "@nivo/pie";
import Link, { useRouter } from "next/router";

export default function Userschart(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3100/users");
      const data = await response.json();
      // if (data && data.success && data.data && data.data.series) {
      if (data?.data?.series) {
        const seriesData = Object.values(data.data.series)[0];

        const pieData = Object.keys(seriesData).map((userId, index) => {
          console.log(Object.keys(seriesData)[index]);

          let nameData = Object.values(seriesData)[index];
          let emailData = Object.values(nameData)[0];
          //let valueData = Object.values(emailData)[index];
          console.log(Object.keys(emailData));

          // ids = Object.keys(seriesData);
          // names = Object.keys(nameData);
          // emails = Object.keys(emailData);
          // values = Object.values(valueData);
          return {
            id: userId,
            label: Object.keys(nameData),
            email: Object.keys(emailData),
          };
        });

        setData(pieData);
      } else {
        setData([]);
      }
    } catch (error) {
      setData([]);
    }
    setIsLoading(false);
  };

  return (
    <div style={{ height: 500, width: 1200, margin: "auto" }}>
      {isLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="lightSalmon"
          height={"20%"}
          width={"20%"}
          flex={1}
          // marginTop={240}
        />
      ) : (
        <table>
          <thead>
            <tr>
              <th>user Id</th>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => {
              return (
                <tr key={index}>
                  <td>
                    <a href={`/users/${d.id}`}> {d.id}</a>
                  </td>
                  <td>{d.label}</td>
                  <td>{d.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
