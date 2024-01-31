const object = {a: 3, b: 6, c: 9}
const obj = Object.create(object)
obj.d = 12

function objectProp(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key])
    }
  }
}
objectProp(object);

/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
 Данная функция не должна возвращать значение. */