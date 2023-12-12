// document.getElementById('fileInput').value='C:\Users\jeetd\OneDrive\Documents\GitHub\SIH_2023_Grand_Finale\Jeet-\app\login\prices.csv'
// document.getElementById('fileInput').dispatchEvent(new Event('change'));
document.getElementById('fileInput').addEventListener('change', handleFileSelect);
// let arrays=[];
// const file1 = "prices.csv";
function handleFileSelect(event) {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const csvContent = e.target.result;
        rowsAsArrays = processCSV(csvContent);
        // displayArrays(rowsAsArrays);
        const gr = genderratio(rowsAsArrays);
        // console.log(gr);
        piechartgen(gr);
    };

    reader.readAsText(file);
    // return gr;
}
handleFileSelect(file1);
function processCSV(csvContent) {
    const rows = csvContent.split('\n');
    const arrays = [];

    rows.forEach(row => {
        const columns = row.split(',');
        arrays.push(columns);
    });

    return arrays;
}

// function displayArrays(arrays) {
//   const outputDiv = document.getElementById('output');
//   outputDiv.textContent = '';

//   arrays.forEach((row, rowIndex) => {
//     const rowDiv = document.createElement('div');
//     rowDiv.textContent = row;
//     outputDiv.appendChild(rowDiv);
//   });
// }
function genderratio(arrays) {
    let m = 0;
    let f = 0;
    arrays.forEach((row, i) => {
        if (arrays[i][2] == "m") {
            m += 1;
        }
        if (arrays[i][2] == "f") {
            f += 1;
        }
    })
    console.log(m, f);
    return [m, f];
}


// let grr=handleFileSelect();

// console.log(arrays);
function piechartgen(gen) {
    var xValues = ['m', 'f'];
    var yValues = gen;
    var barColors = [
        "#b91d47",
        "#00aba9"
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "World Wide Wine Production 2018"
            }
        }
    });
}
