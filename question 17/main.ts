let  previous_list = ["Atiqua", "Meghna", "Nimra"]

console.log(`${previous_list[2]}, can't come to my dinner as she has declined because of her some other work`)

previous_list[2] = "Yasmeen"
console.log(`Here is my updated guest list`)
console.log(previous_list)

console.log("I have just got a news that I have more space for some new friends so I will invite more friends")

previous_list.unshift("Iqra")
previous_list.splice(2,0, "Wania")
previous_list.push("Sania")
let newGuestList = previous_list

console.log("Here is my new guest list.")
console.log(newGuestList)

console.log("I have just heared that my dinner table won't arrive in time for dinner and I have space for only two people")

newGuestList.pop()
console.log("Hello Sania! I am feeling sorry to inform you that I have to cancel my dinner")

newGuestList.pop()
console.log("Hello Yasmeen! I am feeling sorry to inform you that I have to cancel my dinner")

newGuestList.shift()
console.log("Hello Iqra! I am feeling sorry to inform you that I have to cancel my dinner")

newGuestList.splice(1,1)
console.log("Hello Wania! I am feeling sorry to inform you that I have to cancel my dinner")

console.log(`Here is my updated guest list.`)
console.log(newGuestList)


for (let i = 0; i < newGuestList.length; ++i){
    console.log(`Helle ${newGuestList[i]}, This is to inform you that you are still in my list and I will be waiting for you at dinner.`)
}

newGuestList.splice(0,2)
console.log(newGuestList)


