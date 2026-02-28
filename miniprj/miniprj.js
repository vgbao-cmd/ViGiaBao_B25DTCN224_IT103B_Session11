let students = [
    { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
    { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
    { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];

let choice;
let nextId = 5;

const createStudent = () => {
    let name = prompt("Enter student name:");
    if (!name || name.trim() === "") return alert("Name cannot be empty!");

    let age = parseInt(prompt("Enter age:"));
    if (isNaN(age) || age <= 0) return alert("Invalid age!");

    let gpa = parseFloat(prompt("Enter GPA (0.0 - 10.0):"));
    if (isNaN(gpa) || gpa < 0 || gpa > 10) return alert("Invalid GPA!");

    let statusInput = prompt("Enter status (active / inactive):").trim().toLowerCase();
    if (statusInput !== "active" && statusInput !== "inactive")
        return alert('Status must be "active" or "inactive"!');

    let newStudent = {
        id: nextId++,
        name: name.trim(),
        age: age,
        gpa: gpa,
        status: statusInput,
    };

    students.push(newStudent);
    alert(
        `Student created successfully!
        ID: ${newStudent.id}
        Name: ${newStudent.name}
        Age: ${newStudent.age}
        GPA: ${newStudent.gpa}
        Status: ${newStudent.status}`
    );
}

const readAllStudents = (students) => {
    if (students.length === 0) return "No students found!";

    return students.map((student) => {
        return `ID: ${student.id} | Name: ${student.name} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}`
    }).join("\n");
};

const filterSCHOLARSHIPcandidates = () => {
    let filtered = students.filter(student => student.gpa > 8);

    if (filtered.length === 0) {
        alert("No scholarship candidates found!");
        return;
    }

    let result = filtered.map(student =>
        `ID: ${student.id} | Name: ${student.name} | GPA: ${student.gpa}`
    ).join("\n");

    alert("Scholarship Candidates:\n" + result);
};

function updateStudent() {
    let id = parseInt(prompt("Enter student ID to update:"));
    let studentUpdate = students.find((student) => student.id === id);

    if (!studentUpdate) return alert(`No student found with ID: ${id}`);

    let newName = prompt(`New name (old: ${studentUpdate.name}):`);
    let newGpa = prompt(`New GPA (old: ${studentUpdate.gpa}):`);

    if (newName && newName.trim() !== "") studentUpdate.name = newName.trim();

    if (newGpa && newGpa.trim() !== "") {
        const parsedGpa = parseFloat(newGpa);
        if (!isNaN(parsedGpa) && parsedGpa >= 0 && parsedGpa <= 10) {
            studentUpdate.gpa = parsedGpa;
        } else {
            alert("Invalid GPA value. GPA not updated.");
        }
    }

    alert(
        `Student updated successfully!
            ID: ${studentUpdate.id}
            Name: ${studentUpdate.name}
            Age: ${studentUpdate.age}
            GPA: ${studentUpdate.gpa}
            Status: ${studentUpdate.status}`
    );
}

const deleteStudent = () => {
    let deleteId = parseInt(prompt("Enter student ID to delete:"));
    let studentIndex = students.findIndex(student => student.id === deleteId);

    if (studentIndex === -1) {
        alert(`No student found with ID: ${deleteId}`);
        return;
    }

    let studentToDelete = students[studentIndex];

    let userConfirm = prompt(
        `Are you sure you want to delete this student?
        ID: ${studentToDelete.id}
        Name: ${studentToDelete.name}
        GPA: ${studentToDelete.gpa}

        Type "yes" to confirm:`
    );

    if (userConfirm && userConfirm.trim().toLowerCase() === "yes") {
        students.splice(studentIndex, 1);
        alert(`Student "${studentToDelete.name}" has been deleted.`);
    } else {
        alert("Deletion cancelled.");
    }
};

function complianceVerification() {
  let hasMinor = students.some(s => s.age < 18);
  let allActive = students.every(s => s.status === "active");

  alert(
    "Has student under 18: " + (hasMinor ? "YES" : "NO") +
    "\nAll students active: " + (allActive ? "YES" : "NO")
  );
}

function calcAverageGPA() {
    if (students.length === 0) {
        alert("No students!");
        return;
    }

    let sum = students.reduce((total, s) => total + s.gpa, 0);
    let avg = sum / students.length;

    alert("Average GPA: " + avg.toFixed(2));
}

function normalizeName() {
    let newList = students.map(s => {
        return {
            id: s.id,
            name: s.name.toUpperCase(),
            age: s.age,
            gpa: s.gpa,
            status: s.status
        };
    });

    let result = newList.map(s =>
        "ID: " + s.id + " | Name: " + s.name + " | GPA: " + s.gpa
    ).join("\n");

    alert(result);
}

do {
    choice = +prompt(`
    ===== STUDENT MANAGEMENT SYSTEM =====
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates(GPA > 8.0)
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
======================================
Enter your choice:
    `);
    switch (choice) {
        case 0:
            alert("Goodbye! Thank you for using Student Management System.");
            break;
        case 1:
            createStudent();
            break;
        case 2:
            alert(readAllStudents(students));
            break;
        case 3:
            filterSCHOLARSHIPcandidates();
            break;
        case 4:
            updateStudent();
            break;
        case 5:
            deleteStudent();
            break;
        case 6:
            complianceVerification();
            break;
        case 7:
            calcAverageGPA();
            break;
        case 8:
            normalizeName();
            break;
        default:
            alert("Invalid choice! Please enter a number from 0 to 8.");
    }
} while (choice != 0);
