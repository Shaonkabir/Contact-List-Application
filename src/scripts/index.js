// Date after Header
const date = document.querySelector('.date');
date.innerHTML =  new Date();


// CONTACT LIST APPLICATION
const URL = 'http://localhost:3000/user';
const nameField = document.querySelector('.nameField')
const phoneField = document.querySelector('.phoneField')
const emailField = document.querySelector('.emailField');

const tbody = document.querySelector('.tbody')

const btn = document.querySelector('.btn')
btn.addEventListener('click' , addNewContact)

// CONTACT LIST ADD FUNCTION
function addNewContact() {
    const contact = {
        name: nameField.value,
        phone: phoneField.value,
        email: emailField.value
    }
    axios.post(URL,contact)
        .then(res => {
            createTdElement(contact , tbody)
            nameField.value = ''
            phoneField.value = ''
            emailField.value = ''
        })
        .catch(err => console.log(err))

}

// WINDOW LOAD FUNCTION
window.onload = function() {

    // Get data from server
    axios.get(URL)
    .then(res => {
        res.data.forEach(contact => {
            createTdElement(contact , tbody)
        })
    })
    .catch(err => console.log(err))
}



// CREATING 'TR' FUNCTION
function createTdElement(contact,parentClass) {

    const tr = document.createElement('tr');

    const tdName = document.createElement('td')
    tdName.innerHTML = contact.name;
    tr.appendChild(tdName)

    const tdPhone = document.createElement('td')
    tdPhone.innerHTML = contact.phone ? contact.phone : 'N/A'
    tr.appendChild(tdPhone)

    const tdEmail = document.createElement('td')
    tdEmail.innerHTML = contact.email ? contact.email : 'N/A'
    tr.appendChild(tdEmail)

    // Actions Row and Button
    const tdActions = document.createElement('td')
    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.classList = 'btn btn-warning'
    editBtn.innerHTML = 'Edit';
    editBtn.addEventListener('click' , (e) => {
        // Codes for Editing the targeted field with Bootstrap Modal
        console.log("Hello I'm edit button")
    })
    tdActions.appendChild(editBtn)
    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'btn btn-danger mx-2'
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click' , (e) => {
        axios.delete(`${URL}/${contact.id}`)
            .then(res => {
                parentClass.removeChild(tr)
            })
            .catch(err => console.log(err))
    })
    tdActions.appendChild(deleteBtn)
    
    tr.appendChild(tdActions)
    parentClass.appendChild(tr) 
}

    
// NIGHT MOOD ACTIVATION
const nightMood = document.querySelector('a.nightMood')

// MAIN EVENT LISTENER FOR ACTIVATING NIGHT MOOD
nightMood.addEventListener('click' ,(e) => {
    nightMood.innerHTML = "Default Mood";
    nightMood.style = 'background: #28a745'

    // AlertBox text
    const activationText = document.querySelector('.activation-text');
    activationText.innerHTML = "Click the button to active Default Mood ==&gt </br> All Creadit goes to Twincle Cats. </br> &amp; </br> Dedicated to mySelf";

    // changing style of body
    const body = document.querySelector('body')
    body.classList = 'nightMoodActive'

    //DEFAULT MOOD : ANOTHER EVENTLISTENER INSIDE EVENTLISTENER
    nightMood.addEventListener('click' , (e) => {
       body.classList = 'default'
       activationText.innerHTML = "Thank you for being with us";
       nightMood.style.display = 'none';

        // Removing alertBox finally
        const alertBox = document.querySelector('.alert');
        alertBox.style.display = 'none'
    })

})

