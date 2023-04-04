// Array of students
const students = [  { ID: 1, name: 'Alice',email: 'alice@example.com', age: 21, grade: 'A', degree: 'Btech',  }, 
 { ID: 2, name: 'Bob', email: 'bob@example.com',age: 22, grade: 'B', degree: 'MBA',  }, 
  { ID: 3, name: 'Charlie',email: 'charlie@example.com', age: 20, grade: 'C', degree:'Arts',  }];

// Get table body element
const tableBody = document.getElementById('table-body');

// Render students table
function renderStudentsTable() {
  // Clear previous table
  tableBody.innerHTML = '';

  // Render new table
  for (const student of students) {
    const row = document.createElement('tr');
    for (const prop in student) {
      const cell = document.createElement('td');
      cell.textContent = student[prop];
      row.appendChild(cell);
    }

    // Add edit button
    const editCell = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function() {
      fillForm(student);
    }
    editCell.appendChild(editBtn);
    row.appendChild(editCell);

    // Add delete button
    const deleteCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
      deleteStudent(student);
    }
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  }
}

// Render initial table
renderStudentsTable();

// Get form element and form inputs
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const gradeInput = document.getElementById('grade');
const degreeInput = document.getElementById('degree');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const cancelBtn = document.getElementById('cancel');

// Fill form inputs with student data
function fillForm(student) {
  nameInput.value = student.name;
  ageInput.value = student.age;
  gradeInput.value = student.grade;
  degreeInput.value = student.degree;
  emailInput.value = student.email;
  submitBtn.textContent = 'Edit Student';
  submitBtn.onclick = function() {
    editStudent(student);
  }
}

// Add new student
function addStudent() {
  const newStudent = {
    ID: students.length + 1,
    name: nameInput.value,
    age: ageInput.value,
    grade: gradeInput.value,
    degree: degreeInput.value,
    email: emailInput.value
  };
  students.push(newStudent);
  renderStudentsTable();
  resetForm();
}

// Edit student
function editStudent(student) {
  student.name = nameInput.value;
  student.age = ageInput.value;
  student.grade = gradeInput.value;
  student.degree = degreeInput.value;
  student.email = emailInput.value;
  renderStudentsTable();
  resetForm();
}

// Delete student
function deleteStudent(student) {
  const index = students.indexOf(student);
  students.splice(index, 1);
  renderStudentsTable();
}

// Reset form inputs
function resetForm() {
  form.reset();
  submitBtn.textContent = 'Add Student';
  submitBtn.onclick = function() {
    addStudent();
  }
}

// Filter students by search query
function filterStudents() {
  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput.value.toLowerCase
}
