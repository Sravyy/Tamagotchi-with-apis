export class Tamagotchi {

  constructor(name,foodlevel,happiness,restlevel) {
    this.name = name;
    this.foodLevel = foodlevel;
    this.happinessLevel = happiness;
    this.restLevel = restlevel;
  }

  setHunger(callBackHunger) {
    setInterval(() => {
      this.foodLevel--;
      callBackHunger(this.foodLevel);
    }, 1000);
  }

  setAttention(callback) {
    setInterval(() => {
      this.happinessLevel--;
      callback(this.happinessLevel);
    }, 1000);
  }

  setRest(callbackRest) {
    setInterval(() => {
      this.restLevel--;
      callbackRest(this.restLevel);
    }, 1000);
  }

  dead() {
    return this.foodLevel <= 0 || this.happinessLevel <= 0 || this.restLevel <= 0;
  }

  feed() {
    this.foodLevel += 10;
  }

  play(){
    this.happinessLevel += 10;
  }

  rest(){
    this.restLevel += 10;
  }


  timePass(){
    this.foodLevel--;
    this.happinessLevel--;
    this.restLevel--;
  }

}
