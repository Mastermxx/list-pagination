/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing
const showStudentsPerPage = 10;
const studentListItem = document.getElementsByClassName('student-item');


console.log(studentListItem);
console.log(`total students: ${studentListItem.length}`);
console.log(`students per page: ${showStudentsPerPage}`);

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.


   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
var currentPageNumber = 0;

function showPage() {
    for (let i = 0; studentListItem.length < studentListItem.length; i++) {
        console.log(i)
        // if (studentListItem.length > 10) {
        //     studentListItem.style.display = "none";
        // }
    }
}

// showPage();

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// Create a pagination div for the buttons in the page div


// let div = document.createElement('div');
// document.getElementsByClassName('page').appendChild(div);





// Calculate the amount of pages needed based on the set students per page
var pageAmountNeeded = Math.ceil(studentListItem.length / showStudentsPerPage);
console.log(`pages needed: ${pageAmountNeeded}`);

let pageDiv = document.getElementsByClassName('page');

let div = document.createElement('div');
div.class = 'note';


document.body.appendChild(div);

for( let i = 1; i - 1 < pageAmountNeeded; i++ ) {
    let button = document.createElement("button");
    button.class = 'page';
    div.appendChild(button);
    button.textContent = `page ${i}`;
    console.log(button.textContent = `page ${i}`)
}

for( let i = 1; i - 1 < pageAmountNeeded; i++ ) {
    let listItem = document.createElement("li");
    listItem.class = 'page';
    div.appendChild(listItem);
    listItem.innerHTML = `<a href="#">${i}</a>`;
}



// Remember to delete the comments that came with this file, and replace them with your own code comments.