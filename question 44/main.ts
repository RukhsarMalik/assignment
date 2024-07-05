function sandwich(...items: string[]): void{
    console.log("Making of sandwitches includes following items:")
    for (let i = 0; i<items.length; i++){
        console.log(`-${items[i]}`)
    }
    console.log("\nNow Enjoy your sandwich 🥪..!\n")
}


sandwich("Cheese", "Chicken", "Tomatto sauce")
sandwich("Extra cheese", "Colesla", "Vegetables")
sandwich("Extra hot sauce", "Cheese", "Chicken")
