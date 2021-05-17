import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { ResponsivePie } from "@nivo/pie";
export default function Activity() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3100/ikramhistory");
      const data = await response.json();
      // if (data && data.success && data.data && data.data.series) {
      if (data?.data?.series) {
        const seriesData = Object.values(data.data.series)[0];
        /*
        id: { all: number },
        id2: { all: number },
        */
        const pieData = Object.keys(seriesData).map((eventName) => {
          let val = Object.values(seriesData[eventName])[0];
          console.log(Object.values(val));
          return {
            id: eventName,
            label: eventName,
            value: val,
            color: "hsl(350, 70%, 50%)",
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
    <div style={{ height: 500, width: 800, margin: "auto" }}>
      <h1>User activity of Ikram</h1>
      {isLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="lightSalmon"
          height={"20%"}
          width={"20%"}
          flex={1}
          //  marginTop={240}
        />
      ) : (
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.45}
          colors={{ scheme: "nivo" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: "color" }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
}
