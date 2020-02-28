const Pet = (props) => {
    return React.createElement("div", null, [
        React.createElement("h1", null, props.name),
        React.createElement("h2", null, props.animal),
        React.createElement("h2", null, props.breed)
    ]);
}
//component class or functional passes return keyword 
//null represent attributes
const App = () => {
    return React.createElement("div",null, [
        React.createElement("h1", null, "Adopt me"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanese"
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cockatiel"
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Cat",
            breed: "Mix"
        })
    ])
}
//html tags are put in ""
ReactDOM.render(React.createElement(App), 
document.getElementById("root"));