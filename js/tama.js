export class Tamagotchi {

  constructor(name,foodlevel,happiness,restlevel) {
    this.name = name;
    this.foodLevel = foodlevel;
    this.happinessLevel = happiness;
    this.restLevel = restlevel;
  }

  setHunger(callBackHunger) {
    setInterval(() => {
      if(!this.isDead()) {
        this.foodLevel--;
        callBackHunger(this.foodLevel);
      }
    }, 1000);
  }

  setAttention(callback) {
    setInterval(() => {
      if(!this.isDead()) {
        this.happinessLevel--;
        callback(this.happinessLevel);
      }
    }, 1000);
  }

  setRest(callbackRest) {
    setInterval(() => {
      if(!this.isDead()) {
        this.restLevel--;
        callbackRest(this.restLevel);
      }
    }, 1000);
  }

  setDead(deadCallback) {
    setInterval(() => {
      if(this.isDead()) {
        deadCallback();
      }
    }, 500);
  }

  isDead() {
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
    this.foodLevel -= 5;
    this.happinessLevel -= 5;
    this.restLevel -= 5;
  }

}
