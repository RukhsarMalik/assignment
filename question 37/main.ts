function make_shirt(size = "Large", text = "I love Typescript"): void{
    console.log(`The shirt you ordered is of "${size}" size which says "${text}"`)
}

make_shirt();
make_shirt("Medium")
make_shirt("Small", "I love programming")