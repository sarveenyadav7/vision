console.log('testing')

alert('Hello everyone from our Team Vision')

function accessmaterial(){
    let Persons_Name = document.querySelector('#user_person').value
    console.log(Persons_Name)

    let Persons_Length = Persons_Name.length
    console.log(Persons_Length)

    let EmailId = document.querySelector('#user_email').value
    console.log(EmailId)

    let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailStructure)

    let Persons_Subject = document.querySelector('#user_subject').value
    console.log(Persons_Name)

    let Persons_Slength = Persons_Subject.length
    console.log(Persons_Slength)



    let Persons_Message = document.querySelector('#user_message').value
    console.log(Persons_Name)

    let Persons_Mlength = Persons_Message.length
    console.log(Persons_Mlength)


    if (Persons_Length <=2){
        document.querySelector('.input_wrong').innerText = 'Persons name should contain minimum 3 letters!!'
    }
    else if(!EmailId.match(emailStructure)){
        document.querySelector('.input_wrong').innerText = 'Enter valid e-mail...'
        document.querySelector('.input_success').innerText = ''
    }
    else if (Persons_Slength <=2){
        document.querySelector('.input_wrong').innerText = 'Pls enter valid Subject!!'
        document.querySelector('.input_success').innerText = ''
    }
    else if (Persons_Mlength <=2){
        document.querySelector('.input_wrong').innerText = 'Pls write something!!'
        document.querySelector('.input_success').innerText = ''
    }
    else if (Persons_Mlength >=2){
        document.querySelector('.input_wrong').innerText = ''
        document.querySelector('.input_success').innerText = 'Thanks for your important Feedback ....'
    }
    else{
        document.querySelector('.input_wrong').innerText = 'Wrong Input'
    }



}