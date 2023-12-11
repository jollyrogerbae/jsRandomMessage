/* program to randomly generate messages*/

//let prompt=require("prompt-sync")({sigint:true});
let button = document.getElementById('button');
let output = document.getElementById('output');


let name = prompt("Enter your name: ", "scooby doo");
console.log("Hello " + name + ". Today's quote:");
if(name != null){
    document.getElementById('output').innerHTML = `Hello ${name}, press the button to receive a quote.`;

}

//collection of famous quotes
let famous = [
    "'The only way to do great work is to love what you do.' - Steve Jobs",
    "'If you can dream it, you can do it.' - Walt Disney",
    "'The only person you are destined to become is the person you decide to be.' - Ralph Waldo Emerson",
    "'Never give up on your dreams.' - Unknown",
    "'Do what you can, with what you have, where you are.' - Theodore Roosevelt"
]
//quotes that compare your current state
let variable = ['a dead squirrel', 'lead poisoning', 'the end of the world'];
let atLeast = [
    "Chin up now, at least its not " + variable[Math.floor(Math.random()*variable.length)] + ".",
    "things could be worse.. it could be " + variable[Math.floor(Math.random()*variable.length)] + ".",
    "they say the grass is always greener on the other side... i say its greener where you water"
]


//something to make you laugh
let smug = [
    "time to karpe some diem",
    "your turn to be the very best, like no one ever was..",
    "this is the alternate universe where you win",
    "detonate the yass grenade!!!",
]

//the legend of you
let you = [
    `the prophecy foretells a great hero named ${name} who would go on to have the best day ever`,
    `The ${name} fanclub? Why yes im the president!!! B)!`
]


button.addEventListener('click', function() {
     let pick = Math.floor(Math.random() * 4);
    switch(pick){
        case 0:
            output.innerHTML = famous[Math.floor(Math.random()*famous.length)];
            console.log(famous[Math.floor(Math.random()*famous.length)]);
            break;
        case 1:
        output.innerHTML = atLeast[Math.floor(Math.random()*atLeast.length)];
        console.log(atLeast[Math.floor(Math.random()*atLeast.length)]);
            break;
        case 2:
            output.innerHTML = smug[Math.floor(Math.random()*smug.length)];
            console.log(smug[Math.floor(Math.random()*smug.length)]);
            break;
        case 3:
            output.innerHTML = you[Math.floor(Math.random()*you.length)];
            console.log(you[Math.floor(Math.random()*you.length)]);
            break;
        default:
            console.log("heres a tip, try coding things correctly");
            break;
    }
})
