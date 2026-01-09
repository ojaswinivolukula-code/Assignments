import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic (default style)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round",
    backgroundColor: "green",
    borderColor: "yellow"
  })
);


// 2. SingleDouble style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round",
    backgroundColor: "white",
    borderColor: "blue"
  })
);


// 3. Round style
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round",
    backgroundColor: "yellow",
    borderColor: "green"
  })
);

