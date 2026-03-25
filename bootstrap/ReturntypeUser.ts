function getuser(id: string) {
    return{name: "Kyle", id}
}

//tagastab meile väärtused, mis on selle funktisooni sees
//kui lisan funktsiooni uue muutuja, siis näitab seda tulemuses 
type J = ReturnType<typeof getuser>

type L = ReturnType<typeof getuser>