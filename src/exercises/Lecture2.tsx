import React from "react";
import TaxCalculation from "./TaxCalculation";

const phones = {
  "Samsung Galaxy": 300,
  "Samsung A51": 350,
  "Iphone 14": 700,
};

const Lecture2: React.FC = () => {
  return (
    <div>
      <TaxCalculation phones={phones} />
    </div>
  );
};

export default Lecture2;
