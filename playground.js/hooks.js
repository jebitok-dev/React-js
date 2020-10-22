//useState- synchronous handles whats present in the machine
//useEffect- asynchrous takes time (.then) handles something outside(api fetch)
useEffect(() => {
    pet.breeds("dog").then(console.log)
})