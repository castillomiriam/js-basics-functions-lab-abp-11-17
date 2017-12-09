// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
 return (Math.abs(distance-42));
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks (distance)*264;
  }

function distanceTravelledInFeet (start, distance) {
 return (Math.abs(distance - start)*264);
}

function calculatesFarePrice (start, destination) {
 return (Math.abs(destination - start)*0);
}
