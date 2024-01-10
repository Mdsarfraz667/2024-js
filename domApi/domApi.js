console.log(document);

console.log({ document });

// document.onclick = () => {
//     console.log("Hello Dom");
// }

document.body.append("My New Thing")


// this will not work we are appending a string but we have to pass a node
// document.body.appendChild("Yet another Thing")

// const now = new Date();
// const myH1 = document.createElement('h1')
// document.body.appendChild(myH1)
// myH1.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;


// todo app

// const input = document.createElement('input')
// input.placeholder = 'TO DO'
// document.body.appendChild(input);
// const button = document.createElement('button')
// button.innerText = 'Submit'
// document.body.appendChild(button);

// button.addEventListener('click', () => {
//     const div = document.createElement('div');
//     div.innerText = input.value;
//     document.body.appendChild(div);
//     input.value = ''
// })


const form = document.createElement('form');
document.body.appendChild(form)

const input = document.createElement('input')
form.appendChild(input);
input.innerText = "To Do"

const button = document.createElement('button')
form.appendChild(button)
button.type = 'submit'
button.innerText = 'Submit'

const ul = document.createElement('ul');
document.body.appendChild(ul)




form.onsubmit = e => {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = ''
    li.onclick = () => {
        console.log(li);
        li.remove()
    }
}






