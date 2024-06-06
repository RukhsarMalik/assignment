let  previouslist = ["Atiqua", "Meghna", "Nimra"]

console.log(`${previouslist[2]}, can't come to my dinner as she has declined because of her some other work`)

previouslist[2] = "Yasmeen"
console.log(`Here is my updated guest list`)
console.log(previouslist)

console.log("I have just got a news that I have more space for some new friends so I will invite more friends")

previouslist.unshift("Iqra")
previouslist.splice(2,0, "Wania")
previouslist.push("Sania")

console.log("Here is my new guest list.")
console.log(previouslist)

for (let i = 0; i < previouslist.length; ++i){
    let new_Msg = `Hello ${previouslist[i]}, This is a reminder to you that tomorrow is dinner at my home and I will love it if you will join me. `
    console.log(new_Msg)
}

