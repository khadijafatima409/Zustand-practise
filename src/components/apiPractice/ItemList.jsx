import React, { useEffect } from "react";
import useApiStore from "../../Store/useApiStore";

const ItemList = () => {
  const { items, fetchItems } = useApiStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              marginBottom: 20,
              padding: 10,
              border: "1px solid #ccc",
              borderRadius: 5,
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p style={{ fontStyle: "italic", color: "#666" }}>
              User ID: {item.userId}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
