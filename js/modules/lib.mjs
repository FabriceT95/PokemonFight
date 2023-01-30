export const Pokemon = class Pokemon {
  constructor(name, number, size, weight, type, healthPoint, attackOne, attackTwo) {
    this.name = name;
    this.number = number;
    this.size = size;
    this.weight = weight;
    this.type = type;
    this.healthPoint = healthPoint;
    this.currentHealthPoint = healthPoint;
    this.attackOne = attackOne;
    this.attackTwo = attackTwo;
  }

  getName() {
    return this.name;
  }

  getNumber() {
    return this.number;
  }

  getSize() {
    return this.size;
  }

  getWeight() {
    return this.weight;
  }

  getType() {
    return this.type;
  }

  getCurrentHealthPoint() {
    return this.currentHealthPoint;
  }

  getMaxHealthPoint() {
    return this.healthPoint;
  }

  isAlive() {
    return this.getCurrentHealthPoint() > 0;
  }

  attack() {
    if(this.currentHealthPoint < (20/100*this.healthPoint)) {
      return this.attackTwo;
    } else {
      return this.attackOne;
    }
  }

  removeHealthPoint(damages) {
    if(this.currentHealthPoint - damages < 0) {
      this.currentHealthPoint = 0;
    } else {
      this.currentHealthPoint -= damages;
    }
  }

}

export const Attack = class Attack {
  constructor(name, damages) {
    this.name = name;
    this.damages = damages;
  }

  getName() {
    return this.name;
  }

  getDamages() {
    return this.damages;
  }
}


