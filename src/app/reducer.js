export const initState = {
  moreData: {
    tel: '+7 (499) 346-21-31',
    mail: 'manager@pixelplus.ru',
    site: 'www.pixelplus.ru'
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