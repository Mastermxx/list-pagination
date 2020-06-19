/******************************************
Treehouse FSJS Techdegree:
project 2 - List Filter and Pagination
Script by Mark Reijgwart
I am aiming for a "Exceeds Expectations" grade.
If I don't get this grade I would like to redo it.
******************************************/

const allStudents = document.querySelector('.student-list').querySelectorAll('li');
const totalStudents = allStudents.length;    // +++ 1x .length berekenen

const studentsPerPage = 10;
const totalPages = Math.ceil(totalStudents / studentsPerPage); // ~~~ niet 2x .length meer berekenen maar nieuwe const gebruiken

// SHOWPAGE FUNCTION
function showPage(pageIndex = 0) {
  const buttons = document.querySelector('.pagination').querySelectorAll('li');
  const totalButtons = buttons.length;
  for (let b = 0; b < totalButtons; b++) {
    const link = buttons[b].querySelector('a');
    if (b === pageIndex) link.classList.add('active');
    else link.classList.remove('active');
  }

  for (let i = 0; i < totalStudents; i++) {
    const rangeStart = pageIndex * studentsPerPage; // +++ index in array waar de page start
    const rangeEnd = rangeStart + studentsPerPage-1; // +++ index in array waar de page end
    const isOutCurrentRange = i < rangeStart || i > rangeEnd; // +++ boolean check of ie binnen range is
    if (isOutCurrentRange) allStudents[i].style.display = 'none'; // ~~~ buiten range op none
    else allStudents[i].style.display = 'block'; // ~~~ else op visible
  }
}

// CREATE A PAGINATION LIST
const page = document.querySelector('.page'); // ~ iets simpelere selector
const div = document.createElement('div');
div.classList.add('pagination');

for (let i = 0; i < totalPages; i++) {
  const li = document.createElement('li');
  li.addEventListener('click', () => { showPage(i) });

  const a = document.createElement('a');
  a.innerHTML = i + 1;
  a.href = '#'

  div.appendChild(li).appendChild(a);
}

page.appendChild(div);

showPage();


// CREATE A SEARCHBAR WITH BUTTON
const searchBar = document.createElement('div');
const pageHeaderDiv = document.querySelector('.page-header');
const searchInput = document.createElement('input');
pageHeaderDiv.appendChild(searchBar).classList.add('student-search');
const searchBarDiv = document.querySelector('.student-search');
const searchbarHTML =
`       <input placeholder="Search for students...">
        <button>Search</button>
`
searchBarDiv.innerHTML = searchbarHTML;

function searchName(nameToSearch){
  for(let i = 0; i < totalStudents; i++){
    const currentStudent = allStudents[i];
    const name = currentStudent.querySelector('h3').innerHTML;
    currentStudent.style.display = name.includes(nameToSearch) ? 'block' : 'none';
  }
}

const toSearch = document.getElementsByTagName('input')[0]; // input.value
const searchButton = document.querySelector('button');

searchButton.addEventListener('click', () => {
    searchName(toSearch.value)
})
