import React, { useState } from "react";

interface ProductsProps {
  tax: number;
}
interface ProductList {
  [key: string]: number;
}

const Products: React.FC<ProductsProps> = (props) => {
  const [products, setProducts] = useState<ProductList>({
    "Iphone 13": 1000,
    "Iphone 14": 1250,
    "Samsung A71": 450,
  });

  const deleteProduct = (index: number) => {
    setProducts((prevProducts) => {
      const newProducts = { ...prevProducts };
      const keys = Object.keys(newProducts);
      const keyToDelete = keys[index];
      if (keyToDelete) {
        delete newProducts[keyToDelete];
      }
      return newProducts;
    });
  };

  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  const addProduct = () => {
    if (newProductName && newProductPrice) {
      setProducts((previousProducts) => ({
        ...previousProducts,
        [newProductName]: Number(newProductPrice),
      }));
    }
  };

  return (
    <div>
      <h2>Phones with tax {props.tax}%</h2>
      {Object.entries(products).map(([productName, price], index) => (
        <p key={index}>
          {productName} ${price} with tax {CalculateTax(price, props.tax)}
          <button onClick={() => deleteProduct(index)}>Delete</button>
        </p>
      ))}
      <div>
        <input
          type="text"
          onChange={(e) => setNewProductName(e.target.value)}
          placeholder="Unesite ime Proizvoda"
        />
        <input
          type="number"
          onChange={(e) => setNewProductPrice(e.target.value)}
          placeholder="Unisite cenu Proizvoda"
        />
        <button onClick={addProduct}>Add product</button>
      </div>
    </div>
  );
};

const CalculateTax = (price: number, tax: number): number => {
  return price + (price * tax) / 100;
};

export default Products;
