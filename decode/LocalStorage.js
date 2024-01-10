
const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");
const btnEl = document.getElementById("insert");
console.log(keyInput, valueInput, btnEl);

const isOutput = document.getElementById('isOutput')
console.log(isOutput);
let items;
btnEl.onclick = function () {
    const key = keyInput.value;
    const value = valueInput.value;
    console.log(key, value);
    if (!key || !value) {
        return;
    }
    localStorage.setItem(key, value)
    location.reload();
    items = { ...localStorage }
    console.log(items);
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, localStorage.getItem(key));
    // const newDiv = document.createElement("div");
    // newDiv.id = 'newDivId';
    // newDiv.textContent = `${key} : ${value}`

    // isOutput.appendChild(newDiv);
    isOutput.innerHTML += `${key} : ${value} </br>`

}



