//unos podataka
var ime=prompt("Unesi ime: ");
var cijena=Number(prompt("Unesi cijenu ulaznice: "));  
var brojUlaznica=Number(prompt("Unesi broj ulaznica: "));
var budžet=Number(prompt("Unesi svoj budžet: "));

/*console.log(ime);
console.log(cijena);
console.log(brojUlaznica);
console.log(budžet);*/

//izračun i usporedbe
var UkPotrošnja= cijena*brojUlaznica;
var Ostalo=budžet-UkPotrošnja;
var DovoljniBudžet=budžet>=UkPotrošnja;
var UkIznos=budžet===UkPotrošnja;

console.log(UkPotrošnja);
console.log(Ostalo);
console.log(DovoljniBudžet);
console.log(UkIznos);
//ispis rezultata