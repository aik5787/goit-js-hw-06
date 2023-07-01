const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    if (mail === "" || password === "") {
      alert('Please fill in all fields');
    }
    else {
     const formData = {
       email: mail,
      password: password,
     }
          console.log(formData);
    form.reset();
    }
   

    }




