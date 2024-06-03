import { useState } from "react";

export const AddQuantity = ({ onNewQuantity }) => {
  const [selectValue, setSelectValue] = useState('');

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectValue(value);
    onNewQuantity(value);
  };

  return (
    <div className="title-quantity">
      <h1 className="title"> Quantity </h1>
      <select defaultValue="" className="select" onChange={handleSelectChange}>
        <option value="" disabled>Seleccione</option>
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};
