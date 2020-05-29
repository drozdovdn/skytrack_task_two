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
  }
};

export function appReducer(state = initState, actions) {
  switch (actions.type) {
    case '':
      return;
    default:
      return state;
  }
}