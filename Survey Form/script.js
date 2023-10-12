function submitForm(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    if (!firstName || !lastName || !dob || !country || genderInputs.length === 0 || !profession || !email || !mobile) {
      alert('All fields are required.');
      return;
    }
  
    let selectedGenders = [];
    genderInputs.forEach(input => {
      selectedGenders.push(input.value);
    });
  
    const resultMessage = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Date of Birth: ${dob}
      Country: ${country}
      Gender: ${selectedGenders.join(', ')}
      Profession: ${profession}
      Email: ${email}
      Mobile Number: ${mobile}
    `;
  
    alert('Survey Form Submitted!\n\n' + resultMessage);
    document.getElementById('surveyForm').reset();
  }
  
  function resetForm() {
    document.getElementById('surveyForm').reset();
  }
  