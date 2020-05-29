export const initState = {
  moreData: {
    tel: '+7 (499) 346-21-31',
    mail: 'manager@pixelplus.ru',
    site: 'www.pixelplus.ru'
  },
  leftMenu: {
    title: 'Создание сайтов',
    links: [
      {id: 0, title: 'Изготовление сайтов «под ключ»'},
      {id: 1, title: 'Как мы работаем'},
      {id: 2, title: 'Интеграция с 1С'},
      {id: 3, title: 'Поддержка сайтов'},
      {id: 4, title: 'Создание сайтов на Битрикс'},
      {id: 5, title: 'Модули Битрикс'},
      {id: 6, title: 'Модули Битрикс'},
      {id: 7, title: 'Дизайн сайтов'},
      {id: 8, title: 'Редизайн сайтов'},
      {id: 9, title: 'Интернет-магазины'},
      {id: 10, title: 'Создание логотипов'},
    ]
  },
  points: [
    {id: 1, title: 'Пункт 01'},
    {id: 2, title: 'Пункт 02'},
    {id: 3, title: 'Пункт 03'},
    {id: 4, title: 'Пункт 04'},
    {id: 5, title: 'Пункт 05'},
    {id: 6, title: 'Пункт 06'},
    {id: 7, title: 'Пункт 07'},
    {id: 8, title: 'Пункт 08'},
    {id: 9, title: 'Пункт 09'},
    {id: 10, title: 'Пункт 10'},
    {id: 11, title: 'Пункт 11'},
    {id: 12, title: 'Пункт 12'},
    {id: 13, title: 'Пункт 13'},
    {id: 14, title: 'Пункт 14'},

  ]
};

export function appReducer(state = initState, actions) {
  switch (actions.type) {
    case '':
      return;
    default:
      return state;
  }
}