import lib from "./modules/lib.mjs";


const Pikachu = new lib.Pokemon("Pikachu", 25, 40,6,"Electrique", 82, new lib.Attack("Statik", 9), new lib.Attack("Paratonnerre", 25));
const Evoli = new lib.Pokemon("Evoli", 133, 30,6.5,"Normal", 70, new lib.Attack("Adaptabilité", 9), new lib.Attack("Anticipation", 15));


const pikachuStarts = !!Math.round(Math.random());

const fighterOne = pikachuStarts ? Pikachu :Evoli;
const fighterTwo = pikachuStarts ? Evoli: Pikachu;

console.log("Le tirage au sort a décidé que " + fighterOne.getName() + " attaquait en premier.");
console.log("---------------------------------------------------------------------------------");
console.log(fighterOne.getName() + " a " + fighterOne.getMaxHealthPoint() + " points de vie.");
console.log(fighterTwo.getName() + " a " + fighterTwo.getMaxHealthPoint() + " points de vie.");


do {
  const isCritOne = Math.random() < 0.1;
  const isCritTwo = Math.random() < 0.1;

  const attackOne = fighterOne.attack();
  const attackTwo = fighterTwo.attack();

  const realDamagesOne = isCritOne ? attackOne.getDamages() * 2 : attackOne.getDamages()
  const realDamagesTwo = isCritTwo ? attackTwo.getDamages() * 2 : attackTwo.getDamages()

  fighterTwo.removeHealthPoint(realDamagesOne);

  console.log(fighterOne.getName() + " a attaqué. Il a fait " + realDamagesOne + " de dégâts.");

  if(!fighterTwo.isAlive()) {
    console.log("OMG " + fighterOne.getName() + " a gagné le combat. Il lui restait " + fighterOne.getCurrentHealthPoint() + " points de vie.");
    break;
  }

  fighterOne.removeHealthPoint(realDamagesTwo);

  console.log(fighterTwo.getName() + " a attaqué. Il a fait " + realDamagesTwo + ".");

  if(!fighterOne.isAlive()) {
    console.log("OMG " + fighterTwo.getName() + " a gagné le combat. Il lui restait " + fighterTwo.getCurrentHealthPoint());
    break;
  }

} while (true);
