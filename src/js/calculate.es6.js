import * as constants from './constants';

class Calculator {

  constructor(blocks, denoms) {
    this.blocks = blocks || [];
    this.denoms = denoms || [];
  }

  whosSafe() {
    var total = 0;
    total += this.blocks.reduce( (accumulator, val) =>
      accumulator + constants.major_blocks[val]
    , 0);

    if (this.blocks.includes('Protestant')) {
      total = total - constants.major_blocks['Protestant'];
      total += this.denoms.reduce( (accumulator, val) =>
        accumulator + constants.major_denoms[val]
      , 0);
    }
    return total;
  };

  populationOfHell() {
    return constants.historical_population - this.whosSafe();
  }

  earths() {
    return ~~(this.populationOfHell() / constants.max_earth_population);
  }

  populationPercentage() {
    return (this.populationOfHell() / constants.historical_population * 100).toFixed(2);
  }

  currentPopulationMultiplier() {
    return ~~(this.populationOfHell() / constants.current_population);
  }

}

export default Calculator