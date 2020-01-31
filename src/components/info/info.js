import React from "react";
import "./info.css";
import check from "./img/check.png";

const Info = ({ getSlayders, statusSlayder, onActiveI }) => {
  return (
    <section>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Класс:</td>
              <td>
                <button>Standart</button>
              </td>
            </tr>
            <tr>
              <td>Потребляемая мощность:</td>
              <td>59 Вт.</td>
            </tr>
            <tr>
              <td>Сила света:</td>
              <td>3459 Люмен = 7.5 лам накаливания по 40Вт</td>
            </tr>
            <tr>
              <td>Гарантия:</td>
              <td>3 года</td>
            </tr>
            <tr>
              <td>Монтаж:</td>
              <td>Да</td>
            </tr>
            <tr>
              <td>Итого сумма:</td>
              <td>2594 рублей</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="info-block">
        <span className="i" onClick={() => onActiveI()}>
          i
        </span>
        <span className="info"> Выберите цвет свечения</span>
      </div>
      <div className="get-slayder">
        <span onClick={() => getSlayders(1)} className={`get-slayder-block`}>
          {statusSlayder === 1 ? <img src={check} className="check" /> : ""}
          <p className="p">Теплый </p>
        </span>
        <span onClick={() => getSlayders(2)} className="get-slayder-block">
          {statusSlayder === 2 ? <img src={check} className="check" /> : ""}{" "}
          <p className="p">Дневной</p>
        </span>
        <span onClick={() => getSlayders(3)} className="get-slayder-block">
          {statusSlayder === 3 ? <img src={check} className="check" /> : ""}{" "}
          <p className="p">Холодный</p>
        </span>
      </div>
    </section>
  );
};

export default Info;
