function loadReplacementData() {
    fetch('replacements.csv')
        .then(response => response.text())
        .then(data => {
            document.getElementById("replacements").value = data;
        })
        .catch(error => {
            console.error('Error loading replacement data:', error);
            alert('Failed to load replacement data.');
        });
}

function loadReplacementDataLocal() {
    let data = `availabilityResults,AppAvailabilityResults
browserTimings,AppBrowserTimings
dependencies,AppDependencies`

    document.getElementById("replacements").value = data;
}

function processString() {
    let inputString = document.getElementById("inputString").value;
    let replacementdata = document.getElementById("replacements").value;

    const lines = replacementdata.split('\n');

    lines.forEach(line => {
        const [findString, replaceString] = line.split(',');

        if (findString && replaceString) {
            inputString = inputString.split(findString.trim()).join(replaceString.trim());
        }
    });

    document.getElementById("outputString").value = inputString;
    
}