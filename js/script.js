/******************************************
Treehouse FSJS Techdegree:
project 2 - List Filter and Pagination
Script by Mark Reijgwart
I am aiming for a "Exceeds Expectations" grade.
If I don't get this grade I would like to redo it.
******************************************/

const studentsPerPage = 10;                                 // Set the amount of students per page

// Create some global selectors
const page = document.querySelector('.page');               // Select .page
const pageHeader = document.querySelector('.page-header');  // Select .page-header
const list = document.querySelector('.student-list');       // Select .student-list
const allStudents = list.querySelectorAll('li');            // Select all list items in .student-list

// Create an error-message for the results
const errorMessage = document.createElement('p');                      // Create a paragraph
errorMessage.classList.add('error-message');                           // Add error-message class to the paragraph
errorMessage.textContent = 'No results have been found.';              // Add the text 'No results have been found.'
errorMessage.style.color = 'red';                                      // Give the paragraph a red color
errorMessage.style.display = 'none';                                   // Give the paragraph a red color
page.appendChild(errorMessage);                                        // Put the created p in .page


// CREATESEARCH function
/* Use unobtrusive JavaScript to append HTML for a search bar.
**this is required for the Exceeds Expectations grade**/
function createSearch() {

    const searchbar = document.createElement('div');              // Create a div
    searchbar.classList.add('student-search');                    // Add student-search class to the div
    pageHeader.appendChild(searchbar)                             // Put the created div in .page-header

    const searchField = document.createElement('input');          // Create an input
    searchField.type = 'text';                                    // Give the input a type text
    searchField.placeholder = 'Search for a name...';             // Give the input a placeholder

    const searchButton = document.createElement('button');        // Create a button
    searchButton.textContent = 'Search';                          // Add the text 'Search'

    function searchName(nameToSearch) {
        const searchResults = [];
        for ( let i = 0; i < allStudents.length; i++ ) {    // Loop through all the students
            const currentStudent = allStudents[i];
            const name = currentStudent.querySelector('h3').innerHTML;  // Get the content of the h3 (name)
            const found = name.includes(nameToSearch);      // If the name contains the value of the input push it to searchResults
            if(found) searchResults.push(currentStudent);
        }

        render(searchResults);

        if (searchResults.length === 0) {
            errorMessage.style.display = 'block';           // If nothing found show error message
        }
  }

  searchField.addEventListener( 'input', (e) => {
    if (e.target.value === '') render(allStudents);         // When you clear the searchbar reload all the students
    errorMessage.style.display = 'none';                    // If the searchbar is cleared, hide the error message
  })

  searchButton.addEventListener( 'click', () => {
    searchName(searchField.value);                                // When the search button is clicked search on name
  })

  searchbar.appendChild(searchField);                             // Add the input into the .student-search div
  searchbar.appendChild(searchButton);                            // Add the button into the .student-search div
}

// CREATEPAGINATION function
/* Pagination links display based on how many search results are returned.
**this is required for the Exceeds Expectations grade**/
function createPagination(students) {
    const div = document.createElement('div');              // Create a div
    div.classList.add('pagination');                        // Add pagination class to the div

    const totalPages = Math.ceil(students.length / studentsPerPage);  // Calculate the total pages needed

    for (let i = 0; i < totalPages; i++) {                  // Loop through all
        const li = document.createElement('li');            // Create a list item
        li.addEventListener('click', () => {
            showStudents(students, i)                       // By clicking on the page numbers, show the correct students for the page
        });

        const a = document.createElement('a');              // Create an anchor
        a.innerHTML = i + 1;                                // Set text to index + 1
        a.href = '#'                                        // Set href to #

        div.appendChild(li).appendChild(a);                 // Put the list in pagination and the anchor in the list
    }
    page.appendChild(div);                                  // Put the pagination div into the page div
}

// SHOWSTUDENTS function
function showStudents(students, index) {
    for (let i = 0; i < allStudents.length; i++) {
        allStudents[i].style.display = 'none';              // Hide all the students by default
    }

    const start = index * studentsPerPage;                  // Calculate the starting index
    const end = start + studentsPerPage;                    // Calculate the ending index

    for (let i = start; i < end && i < students.length; i++) {
        students[i].style.display = 'block';                // Show the correct students for the page
    }

    const pagination = document.querySelector('.pagination');  // Select the .pagination div
    if (pagination !== undefined && pagination !== null) {  // Run when pagination is not undefined or null
        const buttons = pagination.querySelectorAll('li');  // Select the list items in .pagination div
        for (let i = 0; i < buttons.length; i++) {
            const link = buttons[i].querySelector('a');     // Select the anchor
            if (i === index) link.classList.add('active');  // Add active class to the anchor on the current active page
            else link.classList.remove('active');           // else remove the active class
        }
    }
}

// RENDER function
function render(students) {
  cleanup();

  // If the lenght of students is bigger than allowed per page run createPagination() function
  if(students.length > studentsPerPage) createPagination(students);

  showStudents(students, 0);
}

// CLEANUP function
function cleanup() {
  const pagination = document.querySelector('.pagination'); // Select the .pagination div
  if (pagination !== undefined && pagination !== null) pagination.parentNode.removeChild(pagination);
  // If not undefined or null remove the pagination div
}

createSearch();

render(allStudents)
