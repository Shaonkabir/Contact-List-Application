// import axios from 'axios' // It should work ...... But not working...........


// Over View => Explore behind the sence of AJAX | Work with Promises

// XMLHttpRequest : Using for many years Traditionally
// Fetch API : Modern Technology
// Anxios library : Best Solution
 // For Anxios:
    // .then() =>  if everything goes well , this will be executed undoubtly
    // .catch() => if Error occour...
    // .finally() => always be executed if written. No problem if it is not written



    // const btn = document.querySelector('.boxed-btn');
    // const p = document.querySelector('.ajax-test p')
    
    // Ajax Request: XML Request
    // btn.addEventListener('click', (e) => {
    //     const xhr = new XMLHttpRequest();
    //     const URL = 'https://jsonplaceholder.typicode.com/users'
    
    //     xhr.open("GET", URL, true)
    //     xhr.onreadystatechange = () => {
    //         p.innerHTML = xhr.response
    //     }
    //     xhr.send()
    // })
    
    // Fetch Api:
    // btn.addEventListener('click', (e) => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => {
    //         data.forEach(user => {
    //             p.innerHTML = `${p.innerHTML} <br> userName : ${user.username} & Name: ${user.name}`
    //         })
    //     })
    //     .catch(err => console.log(err))
    //  });
    
    
    
     // Using Axios: a cute library for working with ajax in frontEnd and also backEnd
    //  btn.addEventListener('click' , (e) => {
    //     axios
    //     .get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => { 
    //         res.data.forEach(user => {
    //             p.innerHTML = `${p.innerHTML} <br> name : ${user.name}`
    //             })
    //     })
    //     .catch(err => console.log(err))
    //     .finally(() => {
    //         // this will be executed undoubtly always if written. No problem if it's used or not
    //         console.log('Hello')
    //     })
    //  });
    
    
    // Fetch API
    //  fetch('http://localhost:3000/user')
    //  .then(res => res.json())
    //  .then(data => {
    //      const name = document.querySelector('.name')
    //      const phone = document.querySelector('.phone')
    //      const email = document.querySelector('.email')
 
    //      data.forEach(person => {
    //          name.innerHTML = `${name.innerHTML} <br> ${person.name}`
    //          phone.innerHTML = `${phone.innerHTML} <br> ${person.phone}`
    //          email.innerHTML = `${email.innerHTML} <br> ${person.email}`
    //      });
    //  })
    //  .catch(err => console.log(err) )
 
 
    
    
    
/*
// NIGHT MOOD ACTIVATION
const nightMood = document.querySelector('.nightMode')

nightMood.addEventListener('click' ,(e) => {
    nightMood.innerHTML = "Click to see 'Default' Mood";
    nightMood.style = 'color:red'

    const body = document.querySelector('body')
    body.classList = 'nightMoodActive'

    //DEFAULT MOOD
    nightMood.addEventListener('click' , (e) => {
       body.classList = 'default'
    })

})
*/