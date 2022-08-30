enum Pet {
  hamster,
  rat,
  chinchilla,
  tarantula,
  jerboa,
}
let petOnSaleTS: Pet = Pet.chinchilla;

let ordersArrayTS: [Pet, number][] = [
  [Pet.rat, 2],
  [Pet.chinchilla, 1],
  [Pet.hamster, 2],
  [Pet.chinchilla, 50],
];

ordersArrayTS.push([Pet.jerboa, 3]);
console.log(ordersArrayTS);

enum PetStr {
  Hamster = "HAMSTER",
  Rat = "RAT",
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA",
}
