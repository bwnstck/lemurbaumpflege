import React, { FC } from "react";
import StyledSection from "../components/StyledSection";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const Transparency: FC = () => {
  return (
    <TransparencyWrapper>
      <h1>Transparenz</h1>
      <div>
        <Doughnut
          data={{
            labels: ["Privat", "Stadt", "Subunternehmer", "Soziale Träger"],
            datasets: [
              {
                label: "Auftragsart",
                data: [70, 5, 19, 6],
                backgroundColor: [
                  "rgba(81, 187, 15, 0.742)",
                  "rgba(201, 14, 86, 0.762)",
                  "rgba(33, 161, 189, 0.817)",
                  "rgba(228, 228, 9, 0.783)",
                ],
                borderColor: [
                  "rgba(81, 187, 15, 0.742)",
                  "rgba(201, 14, 86, 0.762)",
                  "rgba(33, 161, 189, 0.817)",
                  "rgba(228, 228, 9, 0.783)",
                  // "rgba(255, 99, 132, 1)",
                  // "rgba(54, 162, 235, 1)",
                  // "rgba(255, 206, 86, 1)",
                  // "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            cutoutPercentage: 50,
            rotation: Math.PI,
            circumference: 1 * Math.PI,
            legend: {
              labels: {
                fontSize: 20,
              },
            },
          }}
        />
      </div>
    </TransparencyWrapper>
  );
};

const TransparencyWrapper = styled(StyledSection)`
  > div {
    max-width: 600px;
    margin: auto;
  }
`;
export default Transparency;
