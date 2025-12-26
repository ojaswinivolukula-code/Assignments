import React from "react";

function ChildComponent() {
  console.log(" HeavyComponent rendered");

  let total = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    total += i;
  }

  return (
    <div style={{ padding: "20px", background: "#f0f0f0" }}>
      <h3>Heavy UI Component</h3>
      <p>This component should render only once.</p>
    </div>
  );
}

export default React.memo(ChildComponent);
