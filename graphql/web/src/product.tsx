import React from "react";

export default function Product({ name, price, comments }: any) {
  return (
    <div
      style={{
        width: 250,
        border: "1px solid black",
        margin: 5,
        flexDirection: "column",
      }}
    >
      <div style={{ padding: 5 }}>
        <strong>{name}</strong>
      </div>
      <div style={{ padding: 5 }}>
        <strong>Price: {`${price} Kr`}</strong>
      </div>
      <div style={{ padding: 5 }}>
        <strong>Comments:</strong>
        <ul>
          {comments.map((c: any) => (
            <li>{c.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
