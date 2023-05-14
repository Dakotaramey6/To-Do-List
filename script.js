//globel variables
const existingList = document.getElementById('list');
//childlist returns an array to use this properly need to iterate  over list
let childList = document.getElementsByTagName('LI'); 
const restart = document.querySelector('.new-Session');

//function that gets user input and puts it in the UI
const getInput = () => {
    const input = document.getElementById('myInput').value;
    let li = document.createElement('LI'); 
    li.className = ''
    existingList.appendChild(li).innerText = input;
    //adding a button to each element
    let button = document.createElement('button');
    li.appendChild(button).innerText = 'Remove';
    button.addEventListener('mousedown', () => {
        li.remove();
    })
    
}

//function to iterate over array and makes an event that will toggle class change on seleted element
const crossOut = () => {
    for(let i = 0; i < childList.length; i++) {
        childList[i].addEventListener('click', () => {
            try {
                childList[i].classList.toggle('crossout');
            } catch(e) {
                console.log('element no crossed out');
            }
        })}   
    }

//event handlers
existingList.addEventListener('click', crossOut);
restart.addEventListener('click', () => {
    window.location.reload();
})