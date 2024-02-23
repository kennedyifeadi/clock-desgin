const minEL =document.getElementById('MIN');
const hourEL =document.getElementById('HR');
const secEL =document.getElementById('SEC');

setInterval(() => {
 const date = new Date;

 const secdeg = date.getSeconds()/60 * 360 -90;
 const mindeg = date.getMinutes() /60 * 360 -90;
 const hourdeg = date.getHours() /12 * 360 -90;

 secEL.style.transform = `rotate(${secdeg}deg)`;
 minEL.style.transform = `rotate(${mindeg}deg)`;
 hourEL.style.transform = `rotate(${hourdeg}deg)`;
}, 1000);