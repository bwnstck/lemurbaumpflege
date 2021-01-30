import React, { FC } from "react";
import StyledSection from "../components/StyledSection";
import styled from "styled-components/macro";
import { Doughnut } from "react-chartjs-2";

const Transparency: FC = () => {
  return (
    <TransparencyWrapper>
      <h1>Transparenz</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
        consectetur odio molestiae corrupti quibusdam ab, deleniti quo commodi
        ratione, quasi consequatur maiores tempore fugiat officia dolorem esse.
        Quas velit nisi reiciendis fugiat, nam cumque dolorem, eius quisquam
        ipsum, eligendi ratione ullam alias aperiam exercitationem tenetur
        repellendus. Quo officiis earum ratione ex, rem corrupti. Deserunt amet
        veritatis distinctio. Corporis sapiente eveniet exercitationem
        consequatur. Sunt commodi nesciunt delectus cum, molestiae at dolores
        rem. Magnam amet, aspernatur vitae necessitatibus, aliquam cupiditate
        iste ipsum sequi distinctio, molestias vero at. Tempore necessitatibus,
        excepturi quis minus assumenda iste itaque recusandae animi quod saepe
        esse, cupiditate optio?
      </p>
      <div>
        <h2>Aufschlüsselung nach Auftragsart</h2>
        <Doughnut height={250} data={doughnutData} options={doughnutOptions} />
      </div>
    </TransparencyWrapper>
  );
};

const TransparencyWrapper = styled(StyledSection)`
  h2 {
    text-align: center;
  }
  > div {
    max-width: 600px;
    margin: 1rem auto 0.5rem;
    background: var(--text-primary);
    border-radius: 5px;
    padding: 0.5rem 1rem 0;
  }
`;

const doughnutOptions = {
  cutoutPercentage: 45,
  rotation: Math.PI,
  circumference: 1 * Math.PI,
  legend: {
    labels: {
      fontSize: 20,
    },
  },
};

const doughnutData = {
  labels: ["Privat", "Stadt", "Subunternehmer", "Soziale Träger"],
  datasets: [
    {
      label: "Auftragsart",
      data: [70, 5, 19, 6],
      backgroundColor: [
        "hsla(210, 53%, 15%, 1)",
        "hsla(112, 28%, 74%, 1)",
        "hsla(48, 67%, 79%, 1)",
        "hsla(349, 78%, 62%, 1)",
      ],
      borderColor: [
        "hsla(210, 53%, 15%, 1)",
        "hsla(112, 28%, 74%, 1)",
        "hsla(48, 67%, 79%, 1)",
        "hsla(349, 78%, 62%, 1)",
      ],
      borderWidth: 2,
    },
  ],
};
export default Transparency;
