import React from "react";
import "./footer.css";
const Footer = () => {
  return <footer> 
    <ul className='link-block'>
      <li  className="link">Вариант кухни</li>
      <li  className="link">Размеры</li>
      <li  className="link">Сенсор</li>
      <li  className="link">Питающий кабель</li>
      <li  className="link">Блок питания</li>
      <li  className="link">Цвет свечения</li>
      <li  className="link red-border">Монтаж</li>
      <li  className="link red-border">Корзина</li>
    </ul>
  </footer>;
};

export default Footer;
