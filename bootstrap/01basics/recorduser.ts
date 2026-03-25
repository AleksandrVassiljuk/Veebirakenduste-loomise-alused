type RequiredUser = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

// antud juhul on string key ja requiredUser on value e nagu Tuple 
type A = Record<string, RequiredUser>


// saab kasutada ka  union type 
type C = Record<"admin" | "user", {test: string}>

const a:C = {
    admin: {test: "asd"},
    user: {test: "asd"}
    
}


// võib kasutada sellist vrianti 
// PropertyKey tähendab, et kasutab väärtust, 
//mida tahad selle type seisse panna 
type B =  Record<PropertyKey, {test: string}>
