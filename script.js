function calculateResult() {
  let m1 = Number(document.getElementById("m1").value);
  let m2 = Number(document.getElementById("m2").value);
  let m3 = Number(document.getElementById("m3").value);

  if (m1 === 0 || m2 === 0 || m3 === 0) {
    alert("Please enter all marks");
    return;
  }

  let total = m1 + m2 + m3;
  let average = total / 3;
  let grade = "";

  if (average >= 80) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 40) grade = "C";
  else grade = "Fail";

  localStorage.setItem("total", total);
  localStorage.setItem("grade", grade);

  let resultDiv = document.getElementById("result");
  resultDiv.classList.remove("d-none");
  resultDiv.innerHTML =
    `Total: ${total}<br>Average: ${average.toFixed(2)}<br>Grade: ${grade}`;
}
