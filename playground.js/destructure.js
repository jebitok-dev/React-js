//object destructuring
var props = {name: 'cathy', hobby: 'tennis'}
var {name, hobby} = props;
console.log(props.name);
console.log(props.hobby);
console.log(name)

//array destructuring
var data = ['berlin', 'london', 'tokyo', 'pretoria']
console.log(data[0])
var[play, laugh, run, sport] = data;
console.log(play);
console.log(laugh);
console.log(run);
console.log(sport);