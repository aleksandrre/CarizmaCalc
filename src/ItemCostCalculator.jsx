import React, { useState } from "react";

function ItemCostCalculator() {
  const [costPerItem, setCostPerItem] = useState(0);
  const [weight, setWeight] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [costPerKg, setCostPerKg] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const calculateTotalCost = () => {
    const totalCost =
      quantity *
      (costPerItem +
        weight * costPerKg +
        shippingCost +
        0.18 * (costPerItem + weight * costPerKg + shippingCost));
    return totalCost;
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Item Cost Calculator
      </h2>
      <div
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        <label style={{ flex: "1" }}>Cost of one item (X in GEL):</label>
        <input
          type="number"
          value={costPerItem}
          onChange={(e) => setCostPerItem(parseFloat(e.target.value))}
        />
      </div>
      <div
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        <label style={{ flex: "1" }}>Weight of one item (M in kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
      </div>
      <div
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        <label style={{ flex: "1" }}>Quantity of items (N):</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseFloat(e.target.value))}
        />
      </div>
      <div
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        <label style={{ flex: "1" }}>Cost per kilogram (Y in GEL):</label>
        <input
          type="number"
          value={costPerKg}
          onChange={(e) => setCostPerKg(parseFloat(e.target.value))}
        />
      </div>
      <div
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        <label style={{ flex: "1" }}>Shipping cost per item (Z in GEL):</label>
        <input
          type="number"
          value={shippingCost}
          onChange={(e) => setShippingCost(parseFloat(e.target.value))}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Total Cost: {calculateTotalCost()} GEL</h3>
      </div>
    </div>
  );
}

export default ItemCostCalculator;
