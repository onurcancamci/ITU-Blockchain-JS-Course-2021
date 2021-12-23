const classes = {
  IntroductionToC: 20,
  DigitalCircuits: 30,
  ComputerOrganization: 32,
  ComputerArchitecture: 10,
};

console.log(classes);

const classesArray = [
  { name: "IntroductionToC", studentCount: 20 },
  { name: "DigitalCircuits", studentCount: 30 },
  { name: "ComputerOrganization", studentCount: 32 },
  { name: "ComputerArchitecture", studentCount: 10 },
];

//classesArray.prop = "prop";
classesArray[21] = 5;

console.log(classesArray);

for (const el of classesArray) {
  console.log(el);
}
/*


console.log(classesArray, classesArray[0]);

for (let i = 0; i < classesArray.length; i++) {
  const el = classesArray[i];
  console.log(el, el.name, el.studentCount);
}
*/
