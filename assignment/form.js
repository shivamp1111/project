function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function submitForm() {
    let name = document.querySelector('.name').value;
    let lastname = document.querySelector('.lastname').value;
    let email = document.querySelector('.email').value;
    let gender = document.querySelector('#gender').value;
    let dob = document.querySelector('.date').value;
    let age = document.querySelector('.age').value;
    let password = document.querySelector('.password').value;
    let confirmpassword = document.querySelector('.confirmpassword').value;

    if (name === '' || name === null) {
        alert('Name is mandatory');
        return;
    }

    if (lastname === '' || lastname === null) {
        alert('Last name is mandatory');
        return;
    }

    if (email === '' || email === null) {
        alert('Email is mandatory');
        return;
    }

    if (dob === '' || dob === null) {
        alert('DOB is mandatory');
        return;
    }

    if (age === '' || age === null) {
        alert('Age is mandatory');
        return;
    }

    if (gender === '' || gender === null) {
        alert('Gender is mandatory');
        return;
    }

    if (password === '' || password === null) {
        alert('Password is mandatory');
        return;
    }

    if (password !== confirmpassword) {
        alert('Password and Confirm Password should be the same');
        return;
    }

    const calculatedAge = calculateAge(dob);
    if (calculatedAge != age) {
        alert('The age does not match the date of birth');
        return;
    }

    document.querySelector('.result').innerHTML = `
        <p>Name: ${name}</p>
        <p>Last Name: ${lastname}</p>
        <p>Email: ${email}</p>
        <p>Date Of Birth: ${dob}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>Password: ${password}</p>
        <p>Confirm Password: ${confirmpassword}</p>
    `;

    alert('Successful Submit');

    // Clear the input fields
    document.querySelector('.name').value = '';
    document.querySelector('.lastname').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.date').value = '';
    document.querySelector('.age').value = '';
    document.querySelector('#gender').value = '';
    document.querySelector('.password').value = '';
    document.querySelector('.confirmpassword').value = '';
}
