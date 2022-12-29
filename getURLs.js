function getURLS() {
    //STORE LINKS TO BE CHECKED
    let tempQueue = [];

    //GET MAIN DOCUMENT BODY
    let content = document.getElementById("page");
    //GET LISTS FROM DOCUMENT BODY
    let lists = content.getElementsByTagName("li");

    Object.values(lists).forEach(val => {

        let htmlElement = val;

        let str = htmlElement.innerHTML;
        //TURN STRING INTO ARRAY
        let stringArray = [...str];


        //Possibly change to function to check to see if "(AP)" is in order.  
        //The same as the solution to the properly closed parenthesis leetcode question

        //ITERATES OVER ALL LINKS AND CHECKS IF THEY END IT "(AP)" THEN PUSHES THEIR href TO tempQueue

        if (stringArray[stringArray.length - 2] === ")" && stringArray[stringArray.length - 3] === "P" && stringArray[stringArray.length - 4] === "A" && stringArray[stringArray.length - 5] === "(") {
            // console.log("true");
            // console.log(val.innerHTML);
            tempQueue.push(htmlElement.firstElementChild.href);

        }
    });
    //COUNT MATCH CASES
    console.log(tempQueue.length)

    //GO TO NEXT LINK
    //remove the prefix of url and go directly to editing page

    //TODO: THIS SECTION NEEDS TO BE MOVED TO THE SELENIUM FUNCTIONS

    console.log("/Edit.jsp?page=" + tempQueue[1].slice(28))

    window.location.assign("/Edit.jsp?page=" + tempQueue[1].slice(28));


    //WAIT UNTIL PAGE IS LOADED

    if (document.readyState == "complete") {
        console.log("loaded")

        document.addEventListener("load", () => {
            console.log("done")
        })

        //-------------------------------------------

        //TODO: THIS IS WHERE THE TEXTEDIT FUNCTION GOES



        //------------------------------------------





    }

    // window.location.href = "https://austria-forum.org/af/Geography/About/Main_Ideas/Current_List_of_Stories";

    // console.log(Object.values(lists)[3].innerHTML);

    // console.log(lists[3].innerHTML);

    // lists[3].innerHTML is the first example of matching case (Contains (AP))

    // let str = lists[3].innerHTML;
    // let stringArray = [...str];


    // if(stringArray[stringArray.length-2] === ")"){
    //     console.log("true");
    // }else{
    //     console.log("false");
    // }

    return tempQueue;
}