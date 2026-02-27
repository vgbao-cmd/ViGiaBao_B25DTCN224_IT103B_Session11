let students = [
{ id: 1, name: "Nguyen Văn A", score: 8.5, gender: "Nam" },
{ id: 2, name: "Trân Thị B", score: 4.2, gender: "Nữ" },
{ id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
{ id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
{ id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" },
];
function superStudent(){
    let superS = students.filter(student => student.score > 8)
    console.log(superS)
}
superStudent();

function studentLow(){
    let low = students.some(student => student.score < 4)
    if (low) {
        console.log("Có sinh viên yếu");
    }else{
        console.log("Không có sinh viên yếu");       
    }
}
studentLow();

function studentLabels(){
    let listStudent = students.forEach(student => console.log(`Tên: ${student.name} - Điểm: ${student.score}`)
    )
}
studentLabels();
