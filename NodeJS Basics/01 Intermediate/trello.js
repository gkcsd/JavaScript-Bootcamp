const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log(days[2]);
console.log();

days.forEach((day, index) => {
    console.log(`Starts with ${index+1} -- ${day}`);
})

// Assignment no.1 

const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

months.forEach((month, index) => {
    console.log(`Starts with ${index} -- ${month}`);
})
console.log();
// Assignment no. 2 

const Todos = ['Gym', 'Study', 'Practice', 'Office', 'Practice'];

Todos.forEach((todo, index) => {
    console.log(`This is my ${index+1} todo:  ${todo}`)
})