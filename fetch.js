const idNumberInput = document.getElementById('idNumber');
idNumberInput.addEventListener('input', autofillInformation);

// if (idNumber.length !== 5) {
//     firstNameInput.value = '';
//     lastNameInput.value = '';
//     emailInput.value = '';
//     return; // Exit the function if the ID number is not complete
//   }



function autofillInformation() {
    
    const idNumberInput = document.getElementById('idNumber');
    const idNumber = idNumberInput.value.trim();
    
      
    // Make an AJAX request to fetch data from the JSON file
    if(idNumber.length===5){
        fetch('employees.json')
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.idNumber === idNumber);
        if (user) {
          document.getElementById('fullName').value = user.name;
          document.getElementById('designation').value = user.designation;
          document.getElementById('department').value = user.department;
          document.getElementById('concern').value = user.concern;
          document.getElementById('employeeID').value = user.employeeID;
          document.getElementById('phone').value=user.phone;
          
        } else {
          alert('User not found');
          // Clear the fields if the user is not found
          clearInputFields();
        }
      })
      .catch(error => {
        console.log(error);
        alert('Error occurred while fetching user data');
      });
    }
    else clearInputFields();
    function clearInputFields(){
        document.getElementById('fullName').value = '';
          document.getElementById('designation').value = '';
          document.getElementById('department').value = '';
          document.getElementById('concern').value = '';
          document.getElementById('employeeID').value = '';
      };
      
    }

    function toggleReasonMenu() {
        // const casualLeaveRadio = document.querySelector('input[value="Casual"]');
        // const sickLeaveRadio=document.querySelector('input[value="Sick"]');
        // const reasonInput = document.getElementById('reason');
        // reasonInput.value='';
        // reasonInput.disabled = true;
        // if(!sickLeaveRadio.checked && !casualLeaveRadio.checked){
        //     reasonInput.disabled=true;
        //     reasonInput.inputMode.valie='';
        // }
        
  
        // // Enable/disable the reason menu based on the selected leave type
        // if (casualLeaveRadio.checked) {
        //   reasonInput.disabled = false;
        // } else {
        //   reasonInput.disabled = true;
        //   reasonInput.value = ''; // Clear the reason input when disabled
        // }

        
            const reasonContainer = document.getElementById('reasonContainer');
            const sickLeaveRadio = document.querySelector('input[value="Sick"]');
            const casualLeaveRadio = document.querySelector('input[value="Casual"]');
            const reason = document.getElementById('reason');
            if (!casualLeaveRadio.checked && !sickLeaveRadio.checked) {
                reasonContainer.style.display = 'none';
            }
            if (casualLeaveRadio.checked) {
                reasonContainer.style.display = 'block';
              } else {
                reasonContainer.style.display = 'none';
              }
            // Show/hide the reason menu based on the selected leave type
            if (sickLeaveRadio.checked) {
              // reasonContainer.style.display = 'none';
              // reason.value='';

            } else {
              reasonContainer.style.display = 'block';
            }
            
      }