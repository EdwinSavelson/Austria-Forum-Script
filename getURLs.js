async function getURLS() {
    //STORE LINKS TO BE CHECKED
    let tempQueue = [];

    async function getLinks() {
        //GET MAIN DOCUMENT BODY
        let content = document.getElementById("page");
        //GET LISTS FROM DOCUMENT BODY
        let lists = content.getElementsByTagName("li");

        Object.values(lists).forEach(val => {
            let htmlElement = val;
            let str = htmlElement.innerHTML;
            //TURN STRING INTO ARRAY
            let stringArray = [...str];

            //The same as the solution to the properly closed parenthesis leetcode question
            //ITERATES OVER ALL LINKS AND CHECKS IF THEY END IT "(AP)" THEN PUSHES THEIR href TO tempQueue
            if (stringArray[stringArray.length - 2] === ")" && stringArray[stringArray.length - 3] === "P" && stringArray[stringArray.length - 4] === "A" && stringArray[stringArray.length - 5] === "(") {

                //Edit URL to direct to the "edit" page directly
                let currentURL = "https://austria-forum.org/Edit.jsp?page=" + htmlElement.firstElementChild.href.slice(28);
                tempQueue.push(currentURL);

            }
        });
        console.log(tempQueue.length)
        return tempQueue;
    }

    //RETURN ARRAY OF LINKS
    let results = await getLinks();
    // console.log(results);
    return results;
}

return getURLS();