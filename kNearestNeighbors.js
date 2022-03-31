// Uses:
  // Classification
    // Grouping items by similarities
    // Grouping by shortest distance between k neighbors
  // Regression
    // Predicting a value like tomorrows stock price or how a user would rate a movie based on a set of data
// Uses distance(Pythagorean Formula) to find nearest neigbhors
  // Could be skewed if to neighbors are similar but rate things more or less conservatively
  // Cosine Similarity can be used for more accurate measurement
// Feature Extraction Criteria
    // Features that directly correlate to current topic
    // Features that dont have bias

const priyanka = {
  name: 'Priyanka',
  comedy: 3,
  action: 4,
  drama: 4,
  horror: 1,
  romance: 4
}

const justin = {
  name: 'Justin',
  comedy: 4,
  action: 3,
  drama: 5,
  horror: 1,
  romance: 5
}

const morpheus = {
  name: 'Morpheus',
  comedy: 2,
  action: 5,
  drama: 1,
  horror: 3,
  romance: 1
}

const allNeighbors = [morpheus, justin];

const kNearestNeighbors = (k, user, neighbors, nearest) => {
  if(!neighbors.length || nearest.length === k) {
    return nearest;
  }

  let current = neighbors[0];
  let currentI = 0;

  neighbors.forEach((n,i) => {
    let currentSum = 0;
    let nSum = 0;
    Object.keys(n).forEach(k => {
      if(k !== 'name') {
        currentSum += (user[k] - current[k]) ** 2;
        nSum += (user[k] - n[k]) ** 2;
      }
    })

    current = Math.sqrt(currentSum) < Math.sqrt(nSum) ? current : n;
    currentI = Math.sqrt(currentSum) < Math.sqrt(nSum) ? currentI : i;
  });

  nearest.push(current);
  const updated = neighbors.filter(n => n.name !== current.name);
  console.log('I', currentI, current)
  kNearestNeighbors(k, user, updated, nearest);

  console.log(`${k} NEAREST NEIGHBORS:
    `, nearest);
  return nearest;
}

kNearestNeighbors(2, priyanka, allNeighbors, []);


const movieRatings = {
  Justin: 5,
  Morpheus: 8
}

const regression = (k, user, neighbors) => {
  const kNeighbors = kNearestNeighbors(k, user, neighbors, []);

  let ratingSum = 0;
  kNeighbors.forEach(n => ratingSum += movieRatings[n.name])

  console.log(`${user.name}'s Movie Rating Prediction: ${ratingSum / kNeighbors.length}`)
  return `${user.name}'s Movie Rating Prediction: ${ratingSum / kNeighbors.length}`;

}

regression(2, priyanka, allNeighbors);


