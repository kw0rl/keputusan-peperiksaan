document.addEventListener('DOMContentLoaded', function() {
    const storedResults = sessionStorage.getItem('studentResults');
    if (storedResults) {
        const student = JSON.parse(storedResults);
        displayResults(student);
    } else {
        alert('No results found!');
        // Redirect back to the search page or handle as appropriate
        window.location.href = 'index.html';
    }
});

function displayResults(student) {
    const resultsDiv = document.getElementById('results');

    const table = document.createElement('table');
    table.id = 'results-table';

    // Table headers
    const headers = ['SUBJECT', 'MARKS', 'GRADE'];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Table content
    const subjects = Object.keys(student.results);
    subjects.forEach(subject => {
        const tr = document.createElement('tr');
        
        // Subject name cell
        const subjectTd = document.createElement('td');
        subjectTd.textContent = subject;
        tr.appendChild(subjectTd);

        // Marks cell
        const marksTd = document.createElement('td');
        marksTd.textContent = student.results[subject];
        tr.appendChild(marksTd);

        // Grade cell
        const gradeTd = document.createElement('td');
        gradeTd.textContent = calculateGrade(student.results[subject]);
        tr.appendChild(gradeTd);

        table.appendChild(tr);
    });

    resultsDiv.appendChild(table);

    // Display student details above the table
    const detailsParagraphs = `
        <p>NAME: ${student.name}</p>
        <p>GENDER: ${student.gender}</p>
        <p>CLASS: ${student.class}</p>
        <p>IC NUM: ${student.icNumber}</p>
    `;
    resultsDiv.insertAdjacentHTML('afterbegin', detailsParagraphs);
}

function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A+';
    } else if (marks >= 80) {
        return 'A';
    } else if (marks >= 70) {
        return 'A-';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'F';
    }
}
