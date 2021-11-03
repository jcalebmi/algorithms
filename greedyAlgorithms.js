// Big-O:

// Uses:
  // Approximating when calculating an exact solution takes too much time
  // Situations that need to calculate the most bang for your buck
    // Optimal schedule for a given time
    // Optimal items to store in a given space
    // Optimal items to take for a given value

// Steps:
  // At each step, pick the most optimal move



// Example states to be covered by radio stations
let optionsToCover = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

// example stations and the states they can cover
const choices = {
  kone: new Set(['id', 'nv', 'ut']),
  ktwo: new Set(['wa', 'id', 'mt']),
  kthree: new Set(['or', 'nv', 'ca']),
  kfour: new Set(['nv', 'ut']),
  kfive: new Set(['ca', 'az'])
}

// the optimal choices of radio stations to cover all necesary states
let finalChoices = new Set();


const greedyAlgorithm = () => {
  while (optionsToCover.size) {
    let optimalChoice;
    // a set of all uncovred options that the current move covers
    let optionsCovered = new Set();

    for (let choice in choices) {
      const currentOptions = choices[choice];
      // create interesection between needed items and items covered by current choice
      const covered = new Set([...optionsToCover].filter(option => currentOptions.has(option)));
      // if the options covered by current choice are greater than previous optimal choice
      if (covered.size > optionsCovered.size) {
        //  update optimal choice
        optimalChoice = choice;
        // updated options that have been covered
        optionsCovered = covered;
      }
    }
    // add optimal choice to list of choices made
    finalChoices.add(optimalChoice);
    // remove covered options from options that need to be covered
    optionsToCover = new Set([...optionsToCover].filter(option => !optionsCovered.has(option)));
  }

  console.log(finalChoices);
  return finalChoices;
}

greedyAlgorithm();