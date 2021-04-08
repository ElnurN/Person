// Obyekt yaradiriq (inputdan gelen deyerleri ozunde saxlayir)
let Person = function (name, surname, age, position, salary, image) {
    this.input_name = name,
        this.input_surname = surname,
        this.input_age = age,
        this.input_position = position,
        this.input_salary = salary,
        this.input_image = image
}

///inputdan gelen deyerleri bos obyekte elave edir
document.getElementById("generalInformation").addEventListener("submit", function (e) {
    e.preventDefault();
    let input_name = document.getElementById("name").value;
    let input_surname = document.getElementById("surname").value;
    let input_age = document.getElementById("age").value;
    let input_position = document.getElementById("position").value;
    let input_salary = document.getElementById("salary").value;
    let input_image = document.getElementById("image").value;

    // input deyerlerini obyekde artirir
    const person=new Person(input_name, input_surname, input_age, input_position, input_salary, input_image)

    // input bos olarsa
const empty = new Empty();
if(input_name===''|| input_surname===''|| input_age===''|| input_position===''|| input_salary===''|| input_image===''){
   document.getElementById("alert-danger").classList.remove("d-none");
}else{
empty.AddNewPerson(person);
empty.Clear();
}
})

function Empty(){
}
// table elave edir
Empty.prototype.AddNewPerson=function(person){
let table=document.getElementById("tableBody");
let html=`
<tr>
<td>${person.input_name}</td>
<td>${person.input_surname}</td>
<td>${person.input_age}</td>
<td>${person.input_position}</td>
<td>${person.input_salary}</td>
<td><img src="img/${person.input_image}" class="img-thumbnail"></td>
<td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
</tr>
`;
table.innerHTML+=html;
}

// table elave edenden sonra input value sifirlayir
Empty.prototype.Clear=function(){
    let input_name = document.getElementById("name").value="";
    let input_surname = document.getElementById("surname").value="";
    let input_age = document.getElementById("age").value="";
    let input_position = document.getElementById("position").value="";
    let input_salary = document.getElementById("salary").value="";
    let input_image = document.getElementById("image").value="";
}

// click edende setri silir
Empty.prototype.DeleteRow=function(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove()
    }
}

document.getElementById('tableBody').addEventListener('click', function (e) {
    const empty = new Empty();
    empty.DeleteRow(e.target);
});