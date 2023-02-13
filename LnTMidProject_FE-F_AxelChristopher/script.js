const form = document.getElementById('form')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const linkedIn = document.getElementById('linkedIn')
const comment = document.getElementById('comment')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if(fullName.value ==''){
        messages.push('Name is required')
    } else if(fullName.value.length <5){
        messages.push('Name required min 5 characters')
    }
    if (email.value == '' || email.value == null){
        messages.push('Email is required')
    } else if(email.value.indexOf("@gmail.com")== -1){
        messages.push('Please input the email correctly')
    }
    if (linkedIn.value == '' || linkedIn.value == null) {         
        messages.push('Your LinkedIn URL is required');     
    } else if(linkedIn.value.indexOf("https://www.linkedin.com")== -1){
        messages.push('Please input valid URL, https://linkedin.com/**')
    }    
    if (comment.value.length<25){
        messages.push('We need more comment, atleast 25 characters, thanks!')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')    
    }
})

function storeData(){
    document.getElementById('fullName').innerHTML.value = fullName
    document.getElementById('email').innerHTML.value = email
    document.getElementById('linkedIn').innerHTML.value = linkedIn
    document.getElementById('comment').innerHTML.value = comment
}
console.log(storeData)