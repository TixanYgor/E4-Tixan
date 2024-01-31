const place = {
    country:"Belorus",
    city:"Minsk",
    population:2000000 
  }
  
  function countryProp(obj, country) {
          if (obj.hasOwnProperty(country)) {
              return true
          }
          return false
  }
  
  console.log(countryProp(place, 'country'))

 /* Задание 2.
    Написать функцию, которая принимает в качестве аргументов строку и объект, 
    а затем проверяет есть ли у переданного объекта свойство с данным именем.
    Функция должна возвращать true или false.*/