document.getElementById('exam-results-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.toLowerCase();
  const gender = document.getElementById('gender').value.toLowerCase();
  const classInput = document.getElementById('class').value.toLowerCase();
  const icNumber = document.getElementById('ic-number').value;

  const student = students.find(student =>
      student.name.toLowerCase() === name &&
      student.gender.toLowerCase() === gender &&
      student.class.toLowerCase() === classInput &&
      student.icNumber === icNumber
  );

  if (student) {
      // Store the results in sessionStorage
      sessionStorage.setItem('studentResults', JSON.stringify(student));
      // Redirect to results page
      window.location.href = 'results.html';
  } else {
      alert('Student not found!');
  }
});