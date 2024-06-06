let new_list = ["Atiqua", "Meghna", "Nimra"]
for (let i= 0; i < new_list.length; ++i){
    let invitition2 = `Hello ${new_list[i]}, I have arranged a dinner for all of my friends at my home and I am inviting you too , please come at my home tomorrow for dinner.`
    console.log(invitition2)
}

console.log(`${new_list[2]}, can't come to my dinner as she has declined because of her some other work`)

new_list[2] = "Yasmeen"
console.log(`Here is my updated guest list`)
console.log(new_list)

for (let i = 0; i < new_list.length; ++i){
    let newMsg = `Hello ${new_list[i]}, This is a reminder to you that tomorrow is dinner at my home and I will love it if you will join me. `
    console.log(newMsg)
}