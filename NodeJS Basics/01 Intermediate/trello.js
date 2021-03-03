let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(days[2]);
console.log();

days.forEach((day, index) => {
    console.log(`Starts with ${index} -- ${day}`);
})