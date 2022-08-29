var Pet;
(function (Pet) {
    Pet[Pet["hamster"] = 0] = "hamster";
    Pet[Pet["rat"] = 1] = "rat";
    Pet[Pet["chinchilla"] = 2] = "chinchilla";
    Pet[Pet["tarantula"] = 3] = "tarantula";
    Pet[Pet["jerboa"] = 4] = "jerboa";
})(Pet || (Pet = {}));
var petOnSaleTS = Pet.chinchilla;
var ordersArrayTS = [
    [Pet.rat, 2],
    [Pet.chinchilla, 1],
    [Pet.hamster, 2],
    [Pet.chinchilla, 50],
];
ordersArrayTS.push([Pet.jerboa, 3]);
console.log(ordersArrayTS);
