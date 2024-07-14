import React, { useState } from "react";

interface PhonesInterface {
  [key: string]: number;
}

interface TaxCalculationProps {
  phones: PhonesInterface;
}

const TaxCalculation: React.FC<TaxCalculationProps> = ({ phones }) => {
  const [tax, setTax] = useState<number>(0);

  const calculateTax = (price: number, tax: number) => {
    return (price + price * (tax / 100)).toFixed(2);
  };

  return (
    <div>
      {Object.entries(phones).map(([phoneName, price], index) => (
        <p key={index}>
          {phoneName} price with tax: {calculateTax(price, tax)}$
        </p>
      ))}
      <input
        type="number"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTax(Number(e.target.value))
        }
        placeholder="Enter tax percentage"
      />
    </div>
  );
};

export default TaxCalculation;
