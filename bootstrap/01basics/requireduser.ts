
type Userequired  = {
    // võin iga properti ette panna readonly
    // readonly on sellpäarast, et ei saaks muuta 
    //readonly id: string 
    readonly prop1: string 
    id: string
    name: string
    age: number
    //(küsimärk) - tähendab valikulist muutujat 
    address: {
        street: string
        city: string
    }
}

// kui hoiad T tähe peal hiirt, siis näed, et propertid on readonly-ks muudetud
type T = Readonly<Userequired>

//oletame, et tahame, et see properti oleks kindlasti kasutatud 
//vastupdine Partialile 
function createuserWithAadress(user: Required<Userequired>) {}
//nn külmutab kõik objekti sees ja ei saa kasutada 
//Object.freeze()