const filter = (arr, key, val) => {
  let newArr = [];
  arr.forEach(obj => {
    if (obj[key] === val) {
      newArr.push(obj)
    }
  });

  return newArr;
};

let objects = [
  { login: 'Maks', email: 'maks@maks.com', company: 'METHED' },
  { login: 'Methed', email: 'info@methed.ru', company: 'METHED' },
  { login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber' }
]

const result = filter(objects, 'email', 'info@methed.ru'); 
console.log('result: ', result);

export default filter;