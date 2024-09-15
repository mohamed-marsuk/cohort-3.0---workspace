// this - reference to particular object 
//        the object depends on particular context

let details = {
                name : "marsuk",
                age : 12,
                gnrder : 'male',
                login()
                {
                    console.log("hi", this.name)
                    console.log("u r logged in ");

                }

}
let details2 = {
    name : "leok",
    age : 12,
    gnrder : 'male',
    login()
    {
        console.log("u r logged in ");
    }

}
details.login();