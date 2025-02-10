function loadReplacementData() {
    fetch('replacements.csv')
        .then(response => response.text())
        .then(data => {
            const replacementsContainer = document.getElementById("replacements");
            replacementsContainer.innerHTML = ''; // Clear previous replacements

            const lines = data.split('\n');

            lines.forEach(line => {
                const [findString, replaceString] = line.split(',');

                if (findString && replaceString) {
                    const replacementItem = document.createElement("div");
                    replacementItem.className = "replacement-item";

                    const findInput = document.createElement("input");
                    findInput.type = "text";
                    findInput.value = findString.trim();
                    findInput.readOnly = true;

                    const replaceInput = document.createElement("input");
                    replaceInput.type = "text";
                    replaceInput.value = replaceString.trim();
                    replaceInput.readOnly = true;

                    replacementItem.appendChild(findInput);
                    replacementItem.appendChild(replaceInput);
                    replacementsContainer.appendChild(replacementItem);
                }
            });
        })
        .catch(error => {
            console.error('Error loading replacement data:', error);
            alert('Failed to load replacement data.');
        });
}

function processString() {
    let inputString = document.getElementById("inputString").value;

    fetch('replacements.csv')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');

            lines.forEach(line => {
                const [findString, replaceString] = line.split(',');

                if (findString && replaceString) {
                    inputString = inputString.split(findString.trim()).join(replaceString.trim());
                }
            });

            document.getElementById("outputString").value = inputString;
        })
        .catch(error => {
            console.error('Error processing string:', error);
            alert('Failed to process string.');
        });
}