import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ['El perro ', 'Mi hermana ', 'Mi mujer ', 'Mi cuñado '];
  let action = ['se comió ', 'rompió ', 'perdió ', 'estropeó ', 'olvidó '];
  let what = ['mis deberes ', 'mi teléfono ', 'mi coche ', 'mi moto '];
  let when = ['antes de clase. ', 'mientras estaba durmiendo. ', 'cuando estaba en el gimnasio. ', 'mientras hacía ejercicio. ', 'cuando salía de casa.'];

 
  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);
  


  document.querySelector("#excuse").innerHTML =who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];
  
}
