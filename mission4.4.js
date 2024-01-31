function Devices(name) {
    this.name = name;
    }

Devices.prototype.DevicesConnected = function () {
    let connect = ''
    if (this.connected) {
        connect = 'Yes';
        } else {
        connect = 'No';
        }
       return connect;
       }

function Device(name, power, connected, powerCheck){
    this.name = name;
    this.power = power;
    this.connected = connected;
    this.powerCheck = function(){
        console.log(`Device power - ${name} equal to ${power} vt`)
        }
    } 

Device.prototype = new Devices();

let powerJustConnected = function (){
    let sum = 0;
    for(let val of allDevices){
    if (val.DevicesConnected()=='Yes'){
        sum += val.power;
    } else{
        sum;
     }
    }
    return sum;
}
  
  const lamp = new Device(name = "Lamp", power = 100, connected = true);
  const laptop = new Device(name = "Laptop", power = 450, connected = false);

  let allDevices = [lamp, laptop];

  console.log(`Lamp connected to the network? ${lamp.DevicesConnected()}`);
  console.log(`Laptop connected to the network? ${laptop.DevicesConnected()}`);

  console.log(`Total power consumption: ${powerJustConnected(allDevices)} vt`);


  lamp.powerCheck();
  laptop.powerCheck();

  /*Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/