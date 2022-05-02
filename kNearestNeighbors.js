// Uses:
  // Classification
    // Grouping items by similarities
    // Grouping by shortest distance between k neighbors
  // Regression
    // Predicting a value like tomorrows stock price or how a user would rate a movie based on a set of data
// Uses distance(Pythagorean Formula) to find nearest neigbhors
  // Could be skewed if to neighbors are similar but rate things more or less conservatively
  // Cosine Similarity can be used for more accurate measurement
// Feature Extraction
  // // Converting an item (fruit or user) into a list of numbers that can be compared
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
// Find k Nearest Neighbors
const kNearestNeighbors = (k, user, neighbors, nearest) => {
  // If length of nearest neighbor array equals k, return array
  if(!neighbors.length || nearest.length === k) {
    return nearest;
  }

  let closest = neighbors[0];
  let currentI = 0;

  // Check distance for each neighbor
  neighbors.forEach((n,i) => {
    let closestSum = 0;
    let nSum = 0;
    Object.keys(n).forEach(k => {
      if(k !== 'name') {
        // Find distance between user and current closest neighbor
        // Add distance to current closest sum
        closestSum += (user[k] - closest[k]) ** 2;
        // Find distance between user and next neighbhor
        // Add distance to nSum
        nSum += (user[k] - n[k]) ** 2;
      }
    })

    // If current closest neighbor is closer, keep them as the closest neighbor
    // Otherwise set the closest neighbor to current neighbor iteration
    closest = Math.sqrt(closestSum) < Math.sqrt(nSum) ? closest : n;
    currentI = Math.sqrt(closestSum) < Math.sqrt(nSum) ? currentI : i;
  });

  // Add closest neibhor to array of closest neighbors
  nearest.push(closest);
  // Update list of remaining neighbors
  const updated = neighbors.filter(n => n.name !== closest.name);
  console.log('I', currentI, closest)
  // Repeat
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

// Use regression to predict a users rating
const regression = (k, user, neighbors) => {

  // Find k nearest neighbors to base predictions on
  const kNeighbors = kNearestNeighbors(k, user, neighbors, []);

  // Look at each neighbors rating
  // Find the sum of their ratings
  let ratingSum = 0;
  kNeighbors.forEach(n => ratingSum += movieRatings[n.name])

  // Get the average of k nearest neighbors rating for particular movie
  console.log(`${user.name}'s Movie Rating Prediction: ${ratingSum / kNeighbors.length}`)
  return `${user.name}'s Movie Rating Prediction: ${ratingSum / kNeighbors.length}`;

}

// regression(2, priyanka, allNeighbors);


