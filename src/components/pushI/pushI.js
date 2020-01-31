import React from "react";
import "./pushI.css";

const PushI = ({ offActiveI }) => {
  return (
    <div className="info-text">
      <a className="prev" href="###"  onClick={() => offActiveI()}>
        {" "}
        &lt; Вернуться
      </a>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit
          nostrum, delectus reiciendis placeat, numquam quaerat exercitationem
          consectetur dolor ratione aut vel aspernatur est, eveniet cupiditate
          asperiores eligendi ducimus illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nisi
          suscipit asperiores veniam consectetur, assumenda repellendus ut
          voluptates unde ratione doloremque obcaecati ipsam? Aspernatur, autem
          modi? Dignissimos, totam? Eveniet, reprehenderit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At magnam
          iste porro dignissimos sequi animi, et temporibus ullam, provident
          necessitatibus doloremque. Vero enim recusandae quod impedit quia
          cumque eveniet veritatis ullam suscipit accusamus at sed beatae ab
          minus commodi obcaecati fugit, illum dignissimos totam excepturi optio
          pariatur dolorum alias quis. Impedit temporibus, id nemo ex
          perferendis quam delectus dolor unde sed laboriosam veritatis!
          Perspiciatis deserunt omnis quod explicabo, et repellendus porro
          pariatur, dolorum reprehenderit enim voluptatem unde eum beatae,
          mollitia cupiditate provident corrupti vitae molestiae! Amet ipsum
          cupiditate ipsa repellat!
        </p>
      </div>
    </div>
  );
};

export default PushI;
