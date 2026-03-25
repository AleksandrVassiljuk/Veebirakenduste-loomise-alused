var user = {
    id: "ads",
    name: "Kyle",
    age: 123,
    address: {
        street: "sdf",
        city: "london"
    }
};
//omit kasutamine tähendab properti eemaldamist User typest
function createuser(user) {
    console.log(user.name, user.age);
}
createuser({ name: "Ironman", age: 567, address: { street: "asd", city: "asdcity" } });
