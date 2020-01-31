import React, { useState } from "react";
import "./slayders.css";

const Slayders = ({ slayders }) => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div className={`slayder photo${slayders[count]}`}>
        <ul>
          <li 
            className={count === 0 ? "point" : ""}
            onClick={() => setCount(0)}
          ></li>
          <li
            className={count === 1 ? "point" : ""}
            onClick={() => setCount(1)}
          ></li>
          <li
            className={count === 2 ? "point" : ""}
            onClick={() => setCount(2)}
          ></li>
        </ul>
      </div>
    </section>
  );
};

export default Slayders;
