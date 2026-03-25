function renderUserDetails(user) {
    console.log(user.name, user.age);
}
function renderUserDetails1(user) {
    console.log(user.name, user.age);
}
var user = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "london"
    }
};
renderUserDetails(user);
renderUserDetails1({ name: "Nipitiri", age: 123 });
//NB! selleks, et näha konsoolis tulemust
//1. tsc tsFailiNimi.ts
//2. genereerib js faili
//3. node index.js käsklus tuleb sisestada
