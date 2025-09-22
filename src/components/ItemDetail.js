import React from "react";
import { useParams, Link } from "react-router-dom";

const items = [
  { id: 1, name: "Item 1", description: "Description for item 1" },
  { id: 2, name: "Item 2", description: "Description for item 2" },
  { id: 3, name: "Item 3", description: "Description for item 3" },
];

function ItemDetail() {
  const { id } = useParams();
  const item = items.find((it) => it.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
  
    </div>
  );
}

export default ItemDetail;
