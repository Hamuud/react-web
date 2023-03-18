import React from 'react';
import imga from  "../icons8-поиск-32.png";
import MyButton from "./UI/Button's/button/MyButton";

function RandArray(array){
    const rand = Math.random()*array.length | 0;
    const rValue = array[rand];
    return rValue;
}
const myArray = ['Марія', 'Оксана', 'Надія', 'Настя', 'Віра', 'Ксеня',];
const surnameArray = ['Лясковець', 'Семенюк', 'Гончарова', 'Воробей', 'Чудік', 'Рудь'];
const monthArray = ['01', '02', '03', '04',
    '05', '06','07','08',
    '09', '10', '11', '12'];
const dayArray =    ['01', '02', '03', '04',
    '05', '06','07','08',
    '09', '10', '11', '12',
    '13', '14', '15', '16',
    '17', '18','19','20',
    '21', '22', '23', '24',
    '25', '26', '27', '28'];
const yearArray = [ '85', '86', '87', '88',
    '89', '90','91','92',
    '96', '95', '94', '93',
    '97', '98', '99'];
const rValue = RandArray(myArray);
const surname = RandArray(surnameArray);
const month = RandArray(monthArray);
const day = RandArray(dayArray);
const year = RandArray(yearArray);







const Random = () => {
  return (
        <div>
            <h1>{rValue} {surname}  {day}  {month} 19{year} </h1>
        </div>
    );
};

export default Random;