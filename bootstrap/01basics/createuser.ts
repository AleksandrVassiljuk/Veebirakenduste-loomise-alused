type User = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

const user: User = {
    id: "ads",
    name: "Kyle",
    age:  123,
    address: {
        street: "sdf",
        city: "london"
    }

}

//omit kasutamine tähendab properti eemaldamist User typest
function createuser(user: Omit<User, "id">) {
    console.log(user.name, user.age)
}

createuser({name: "Ironman", age: 567, address: {street: "asd", city: "asdcity"}})
