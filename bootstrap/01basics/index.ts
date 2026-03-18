//harjutus 1
type User = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}


function renderUserDetails(user: User) {
    console.log(user.name, user.age)
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


renderUserDetails(user)
