import React from "react";


export default function Filter ({onCategoryChange}) {
    return (
        <div className="filter">
            <select onChange={onCategoryChange}>
                <option value="all">All</option>
                <option value="clothes">Clothes</option>
                <option value="electronics">Electronics</option>
                <option value="food">Food</option>
                <option value="other">Other</option>
            </select>
        </div>
    );
}