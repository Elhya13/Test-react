import React, { useState } from "react";

    
function List() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };
    const drinks = ["Coffee", "Tea", "Chocolate"]
    return (
    <ul>
        {drinks.map ((hotbeverage)=> (
        <li key={hotbeverage}>
            <label>
            < input 
            type="checkbox" 
            checked={checked}
            onChange={handleChange}
            />  {hotbeverage}
            </label>
        </li>
        ))}
    </ul> 
    );
}

export default List;