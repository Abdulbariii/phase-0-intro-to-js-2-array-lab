// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
function appendCat(name) {
  let Broom = [...cats, name];
  return Broom;
}
function prependCat(name) {
  let Arnold = [name, ...cats];
  return Arnold;
}
function removeLastCat() {
  let newArray = [...cats];
  newArray.pop();
  return newArray;
}
function removeFirstCat() {
  let newArray = [...cats];
  newArray.shift();
  return newArray;
}
