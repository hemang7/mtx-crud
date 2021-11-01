var selectedRow = null;
function onFormSubmit() {
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["department"] = document.getElementById("department").value;
  formData["ID"] = document.getElementById("ID").value;
  formData["Salary"] = document.getElementById("Salary").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("empList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.department;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.ID;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Salary;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("department").value = selectedRow.cells[1].innerHTML;
  document.getElementById("ID").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Salary").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.department;
  selectedRow.cells[2].innerHTML = formData.ID;
  selectedRow.cells[3].innerHTML = formData.Salary;
}

//Delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("empList").deleteRow(row.rowIndex);
  }
  resetForm();
}

//Reset the data
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("department").value = "";
  document.getElementById("ID").value = "";
  document.getElementById("Salary").value = "";
  selectedRow = null;
}

//search function

const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();

  let myTable = document.getElementById("empList");

  let tr = myTable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let textvalue = td.textContent || td.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
    }
  }
};
