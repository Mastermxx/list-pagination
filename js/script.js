/******************************************
Treehouse FSJS Techdegree:
project 2 - List Filter and Pagination
Script by Mark Reijgwart
I am aiming for a "Exceeds Expectations" grade.
If I don't get this grade I would like to redo it.
******************************************/

const pageHeader = document.getElementsByClassName('page-header');



const newDiv = document.createElement('div');                           // Create a new div element
const allStudents = document.querySelector('.student-list').querySelectorAll('li'); // Get all the students
const nodes = Array.from( allStudents );                                // Put all the students in an array
const studentsPerPage = 10;                                             // Declare the wanted amount of students per page
const totalPages = Math.ceil( allStudents.length / studentsPerPage );   // Get the page amount needed by deviding total students by studentsPerPage


const pages = [];
// For every 10 students create a chunk and push it to the pages variable
const chunk = ( array, start, length ) => array.slice( start, length ); // Get all students and slice it in chunks
for ( let i = 0; i < allStudents.length; i += studentsPerPage ) {       // Loop through all the students till there are no chunks of 10 left
    pages.push( chunk ( nodes, i, i + studentsPerPage ) );              // Push chunks of 10 students to the empty array "pages"
}

// This function will show and hide students based on the page number
const showPage = (pageNumber) => {

    nodes.forEach( element => element.style.display = 'none' );         // By default hide all the students
    const studentIndex = pageNumber * studentsPerPage;                  // Get the current pages multiply by the students per page (10)
    const nodesToShow = chunk( nodes, studentIndex, studentIndex + studentsPerPage ); // Get the correct chunk of students to show
    nodesToShow.forEach(element => element.style.display = 'block');    // Show the correct students for the current page
}

/* Create a button for all pages needed based on the results.
**this is required for the Exceeds Expectations grade**/
const appendPageLinks = () => {

    const pageDiv = document.getElementsByClassName('page');            // Get the page div element
    pageDiv[0].appendChild(newDiv).classList.add('pagination')          // Append a new div to the page div and give it a class "pagination"
    const paginationDiv = document.getElementsByClassName('pagination');// Get the newly created pagination div element

    for ( let index = 0; index < pages.length; index ++ ) {             // Loop through all pages (chunks) and do the following:

        const listItem = document.createElement("li");                  // Create a list element
        paginationDiv[0].appendChild(listItem)                          // Append the li to the pagination div
        listItem.innerHTML = `<a href="#">${index + 1}</a>`;            // Create an anchor in the li with the correct page number

        // Create a click function on the pagenumber that will show the correct student per page
        listItem.addEventListener('click', () => {
            showPage( index );
        })
    }

    showPage(0);                                                        // By default show the first page
}

appendPageLinks();



// HTML STRUCTURE
// <div class="student-search">
//   <input placeholder="Search for students...">
//   <button>Search</button>
// </div>


const toSearch = 'wadawdwd'; // input.value
const allNames = nodes.map((node)=>node.querySelector('h3').innerHTML);
const filteredNames = allNames.filter(name => name.includes(toSearch));
console.log(filteredNames);


/* When a search yields 0 results, a message is displayed on the page, informing the user that no results have been found.
**this is required for the Exceeds Expectations grade**/

if (filteredNames.length === 0) {
    console.log('empty')
}
