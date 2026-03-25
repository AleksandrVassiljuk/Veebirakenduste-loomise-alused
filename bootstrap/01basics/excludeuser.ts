type Rolexclude = "admin" | "user" | "moderator"


type Role = "admin" | "user" | "moderator"

// võtab Role-st ainult need, mis on ka siin unionis
type V = Extract<Role, "admin" | "moderator">

type otherRole = "testing" | "admin" | "user" | "security"

// võtab ühisosa Role ja otherRole vahel
type X = Extract<Role, otherRole>