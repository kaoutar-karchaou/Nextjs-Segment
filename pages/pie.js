import React from "react";
import { ResponsivePie } from "@nivo/pie";

class PieChart extends React.Component {
  state = {
    data: [
      {
        id: "python",
        label: "python",
        value: 345,
        color: "hsl(55, 70%, 50%)",
      },
      {
        id: "lisp",
        label: "lisp",
        value: 223,
        color: "hsl(139, 70%, 50%)",
      },
      {
        id: "c",
        label: "c",
        value: 493,
        color: "hsl(198, 70%, 50%)",
      },
      {
        id: "scala",
        label: "scala",
        value: 533,
        color: "hsl(218, 70%, 50%)",
      },
      {
        id: "hack",
        label: "hack",
        value: 516,
        color: "hsl(39, 70%, 50%)",
      },
    ],
  };
  render() {
    return (
      <div style={{ height: 500, width: 500, margin: "auto" }}>
        <ResponsivePie
          data={this.state.data}
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
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
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
      </div>
    );
  }
}

export default PieChart;
