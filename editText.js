const invalidTexts = [];
//Store original text
let currentText = document.getElementById('editorarea').value;

//Text to look for
const searchText = "the [AirPano Team|Geography/About/Consortium/AirPano,_Team]";
//Position of searched text
let position = currentText.indexOf(searchText);

//If the searched text does not exist escape 
if(position != -1){

//Slice all text before the searched text
let slicedText = currentText.slice(0, position)

let remainingText = currentText.slice(position);

//Where string should begin split and end
//The same principle as the "Valid Parenthesis Leetcode" question
let parameters = ["[","|","]"];
//Store indices of where the parameters are in the string
let stack = [];  
//current parameter checking against
let currentParameter = 0;

//version of sliced to be edited because of scope of slicedCopy   
let slicedCopy = slicedText;


//Remove parenthesis, line, and text after line but before ]
//Then run same function until it reaches the end of the section
    
for(let i = 1; i < slicedText.length; i++){
    if(slicedText.charAt(i) === parameters[currentParameter]){
    stack.push(i);
    currentParameter++
    }
    if(currentParameter === 3){
        let currentName = slicedText.substring(stack[0],(stack[2]+1));
        let correctName = slicedText.substring(stack[0]+1,(stack[1]));

        slicedCopy = slicedCopy.replace(currentName, correctName);
        currentParameter = 0;
        stack = [];
    }
}

//Add edited text back to beginning of sliced string
//Final Text to be input
let newText = slicedCopy + remainingText;

    
//! INPUT NEW TEXT DO NOT UNCOMMENT UNTIL READY
// document.getElementById('editorarea').value = newText;

console.log(newText);

    
}else{
    //return url to array to be reviewed
}