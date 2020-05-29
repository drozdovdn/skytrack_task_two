import React from 'react';
import './style.less';

export default function MainOffer () {
  return (
    <div className="offer">
      <h1 className="offer__title">
        PSD файл с макетом. Макет разбит по слоям и сгрупированн по папкам:
      </h1>
      <ul className="offer__list">
        <li className="offer__list-item">
          <span>number</span>
          - нумерация блоков (номера блоков верстать не нужно)
        </li>
        <li className="offer__list-item">
          <span>text</span>
          - текстовые блоки (шрифт Arial, размер 14 пикселей, межстрочное растояние 22 пикселя)
        </li>
        <li className="offer__list-item">
          <span>head</span>
          - шапка сайта
        </li>
        <li className="offer__list-item">
          <span>content</span>
          - контентная область, которая в свою очередь делится на <span>left</span>  и <span>center</span>
        </li>
      </ul>
      <div className="offer__text">Текстовое описание задания и требования.</div>
    </div>
  );
}

