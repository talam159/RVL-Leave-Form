// function generatePDF() {
//     // Get form input values
//     // var date = document.getElementById('date').value;
//     var name = document.getElementById('fullName').value;
//     var designation = document.getElementById('designation').value;
//     var department = document.getElementById('department').value;
//     var concern = document.getElementById('concern').value;
//     var employeeId = document.getElementById('idNumber').value;
    
//     // Create a new jsPDF instance
//     var doc = new jsPDF();
    
//     // Set the content of the PDF
//     // doc.text('Date: ' + date, 10, 10);
//     doc.text('Name: ' + name, 10, 10);
//     doc.text('Designation: ' + designation, 10, 10);
//     doc.text('Department: ' + department, 10, 10);
//     doc.text('ceoncern: ' + concern, 10, 10);
    
    
//     // Save the PDF
//     doc.save('output.pdf');
//   }
function formatDate() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Months are zero-based, so we add 1
    var year = today.getFullYear();
    
    // Pad the day and month with leading zeros if necessary
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    
    var formattedDate = day + '/' + month + '/' + year;
    document.getElementById('formatted-date').textContent = formattedDate;
    return formattedDate;
  }
function generatePDF() {
    // Get form input values
    var date= formatDate();
    var name = document.getElementById('fullName').value;
    var designation = document.getElementById('designation').value;
    var department = document.getElementById('department').value;
    var concern = document.getElementById('concern').value;
    var employeeId = document.getElementById('employeeID').value;
    var leaveType = document.querySelector('input[name="leaveType"]:checked').value;
    
    var reasonDropdown= document.getElementById('reason');
    var reason= reasonDropdown.value;
    // if(leaveType='Sick')
    // {
    //     reason='N/A';
    // }
    var comments= document.getElementById('comments').value;
    var leaveFrom=document.getElementById('leaveFromDate').value;
    var leaveFromDate = convertDateFormat(leaveFrom);
    var leaveTo = document.getElementById('leaveToDate').value;
    var leaveToDate = convertDateFormat(leaveTo);
    var totalLeaveDays = calculateTotalDays();
    const totalCasual = document.getElementById('total-casual-leave');
    const totalCasualLeave = parseInt(totalCasual.textContent);
    const enjoyedCasual = document.getElementById('enjoyed-casual-leave').value;
    var remainingCasual = document.getElementById('remaining-casual-leave').textContent;

    const totalSick = document.getElementById('total-sick-leave').textContent;
    var enjoyedSick = document.getElementById('enjoyed-sick-leave').value;
    var remainingSick = document.getElementById('remaining-sick-leave').textContent;


    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var joining= document.getElementById('joiningDate').value;
    var assignedPerson = document.getElementById('assignedPerson').value;
    var joiningDate=convertDateFormat(joining);


    var content='<h2 class="text-2xl font-bold text-center mt-6 mb-8">Relief Validation - Leave Request</h2>'+`
    <div class="flex justify-between items-center">
        <div class="mb-6 ml-16">
            <label class="block text-sm font-medium text-gray-700">Date</label>
            <p class="text-lg font-medium text-gray-800" >`+date+`</p>
        </div>    
        <div class="-mx-36 mb-4">
            <img style="width:50%;" src="relief-logo.png" alt="">
        </div>
    </div>`+

    `<div class=" mx-16 bg-gray-100 border-solid border-2 border-gray-300 rounded-md">
        <div class=" flex  justify-between mx-12 my-3">
            <div>
                <div class="mb-2">
                    <label class="block text-sm font-medium text-gray-500">Name</label>
                    <p class="text-lg font-medium text-gray-800" >`+name+`</p>
                </div>    
            
                <div class="">
                    <label class="block text-sm font-medium text-gray-500">Designation</label>
                    <p class="text-lg font-medium text-gray-800" >`+designation+   `</p>
                </div> 
            </div>   
        
            <div class="-ml-8">
                <div class="mb-2">
                    <label class="block text-sm font-medium text-gray-500">Department</label>
                    <p class="text-lg font-medium text-gray-800" >`+    department+    `</p>
                </div>    
            
                  <div class="">
                    <label class="block text-sm font-medium text-gray-500">ID No:</label>
                    <p class="text-lg font-medium text-gray-800" >`    +employeeId+    `</p>
                </div>  
            </div>  
        
        
            <div>
                <div class="">
                    <label class="block text-sm font-medium text-gray-500">Concern</label>
                    <p class="text-lg font-medium text-gray-800" >`    +concern+    `</p>
                </div> 
            </div>
        </div> 
    </div>`+
    `<div class="mx-16 my-5 bg-blue-100 border-solid border-2 border-blue-200 rounded-md">
        <div class=" flex justify-between mx-12 my-3">
            <div class="">
                <label class="block text-sm font-medium text-gray-500">Leave Type</label>
                <p class="text-lg font-medium text-gray-800" >`    +leaveType+' '+     `Leave</p>
            </div>    
            
            <div class="-ml-24">
                <label class="block text-sm font-medium text-gray-500">Reason</label>
                <p class="text-lg font-medium text-gray-800" >`    +reason+    `</p>
            </div>  
            <div class="">
                <label class=" block text-sm font-medium text-gray-500">Assigned Person</label>
                <p class="  text-base font-medium text-gray-800" > `+assignedPerson+    `</p>
            </div>  
        </div>
    </div>`+
    `<div class="mx-16 my-5 bg-blue-100 border-solid border-2 border-blue-200 rounded-md">
        <div class="mx-12 my-3">
            <label class="block text-sm font-medium text-gray-500">Comments</label>
            <p class="text-sm font-medium text-gray-800" >`+    comments +   `</p>
        </div> 
    </div>`+
    `<div class="mx-16 my-5 bg-blue-100 border-solid border-2 border-blue-200 rounded-md">
        <div class="flex  justify-between mx-12 my-3">
            <div class="">
                <label class="block text-sm font-medium text-gray-500">From Date</label>
                <p class="text-lg font-medium text-gray-800" >`    +leaveFromDate+    `</p>
            </div>    
        
              <div class="-ml-2">
                <label class="block text-sm font-medium text-gray-500">To Date</label>
                <p class="text-lg font-medium text-gray-800" >`    +leaveToDate+    `</p>
            </div>    
        
        
              <div class="">
                <label class="block text-sm font-medium text-gray-500">Total Days</label>
                <p class="text-lg font-medium text-gray-800" >`    +totalLeaveDays+    `</p>
            </div>
            
        </div>    
        <div class="border-t border-gray-300 border-dashed"></div>

    
        <div class="flex  justify-between mx-12 my-3">
            <div class="">
                <label class="block text-sm font-medium text-gray-500">Total Casual Leave</label>
                <p class="text-lg font-medium text-gray-800" >`    +totalCasualLeave+    `</p>
            </div>    
        
              <div class="">
                <label class="block text-sm font-medium text-gray-500">Enjoyed</label>
                <p class="text-lg font-medium text-gray-800" >`    +enjoyedCasual+    `</p>
            </div>    
        
              <div class="">
                <label class="block text-sm font-medium text-gray-500">Remaining</label>
                <p class="text-lg font-medium text-gray-800" >`    +remainingCasual+    `</p>
            </div>
        </div>    
        <div class="border-t border-gray-300 border-dashed"></div>
    
        <div class="flex  justify-between mx-12 my-3">
            <div class="">
                <label class="block text-sm font-medium text-gray-500">Total Sick Leave</label>
                <p class="text-lg font-medium text-gray-800" >`    +totalSick+    `</p>
            </div>    
        
              <div class="">
                <label class="block text-sm font-medium text-gray-500">Taken</label>
                <p class="text-lg font-medium text-gray-800" >`    +enjoyedSick+    `</p>
            </div>    
        
            <div class="">
                <label class=" block text-sm font-medium text-gray-500">Remaining</label>
                <p class=" text-lg font-medium text-gray-800" >`    +remainingSick+    `</p>
            </div>
        </div>    
    </div> `+

    `<div class="mx-16 my-5 bg-blue-100 border-solid border-2 border-blue-200 rounded-md">
        <div class="flex  justify-between mx-12 my-3">
            <div class="">
                <label class="block text-sm font-medium text-gray-500">Address During Leave</label>
                <p class="text-lg font-medium text-gray-800" >`    +address+    `</p>
            </div>    
        
              <div class="">
                <label class="block text-sm font-medium text-gray-500">Phone</label>
                <p class="text-lg font-medium text-gray-800" >`    +phone+    `</p>
            </div>   
        
              <div class="">
                <label class="block text-sm font-medium text-gray-500">Joining Date</label>
                <p class="text-lg font-medium text-gray-800" >`    +joiningDate+    `</p>
            </div> 
          </div> 
    </div>`+

    `<div class="mx-16 my-5 ">
        <p class="underline  text-sm">I agree, my leave may be canelled at any time upon company's requirement and policy</p>
    
        <div class="flex gap-24 mt-4 mb-2">
                <p style="text-decoration-line: overline" class="mt-16">Applicant Signature</p>
                <p style="text-decoration-line: overline" class="mt-16">Assigned Person's Signature</p>
        </div>
    </div>
    <div class="mx-16 my-5 ">
        <div class="my-16 flex  justify-between">
            <div class="">
                <!-- <div class="border-2 border-gray-700 border-dashed mt-16 w-36"></div> -->
                <p style="	text-decoration-line: overline;">Reporting Officer's Signature</p>
            </div>
            <div>
                <!-- <div class="border-2 border-gray-700 border-dashed mt-16 w-36"></div> -->
                <p style="	text-decoration-line: overline;">Admin Officer's Signature</p>
            </div>
            <div>
                <!-- <div class="border-2 border-gray-700 border-dashed mt-16 w-36"></div> -->
                <p style="	text-decoration-line: overline;">HR Officer's Signature</p>
            </div>
        </div>`
    
    ;
    // Create the HTML content for the PDF
    // var content = '<h2 class="text-2xl font-bold text-center mt-6 mb-2">Relief Validation - Leave Request</h2>' +
    // `<div class="mb-6 ml-9">
    //     <label class="block text-sm font-medium text-gray-700">Date</label>
    //     <p class="text-lg font-medium text-gray-800" >`+date+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Name</label>
    //     <p class="text-lg font-medium text-gray-800" >`+name+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Designation</label>
    //     <p class="text-lg font-medium text-gray-800" >`+designation+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Department</label>
    //     <p class="text-lg font-medium text-gray-800" >`+department+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">ID No:</label>
    //     <p class="text-lg font-medium text-gray-800" >`+employeeId+`</p>
    // </div>`+


    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Concern</label>
    //     <p class="text-lg font-medium text-gray-800" >`+concern+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Leave Type</label>
    //     <p class="text-lg font-medium text-gray-800" >`+leaveType+` Leave</p>
    // </div>`+
    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Reason</label>
    //     <p class="text-lg font-medium text-gray-800" >`+reason+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Comments</label>
    //     <p class="text-lg font-medium text-gray-800" >`+comments+`</p>
    // </div>`+


    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">From Date</label>
    //     <p class="text-lg font-medium text-gray-800" >`+leaveFromDate+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">To Date</label>
    //     <p class="text-lg font-medium text-gray-800" >`+leaveToDate+`</p>
    // </div>`+



    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Total Days</label>
    //     <p class="text-lg font-medium text-gray-800" >`+totalLeaveDays+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Total Casual Leave</label>
    //     <p class="text-lg font-medium text-gray-800" >`+totalCasualLeave+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Enjoyed</label>
    //     <p class="text-lg font-medium text-gray-800" >`+enjoyedCasual+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Remaining</label>
    //     <p class="text-lg font-medium text-gray-800" >`+remainingCasual+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Total Sick Leave</label>
    //     <p class="text-lg font-medium text-gray-800" >`+totalSick+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Taken</label>
    //     <p class="text-lg font-medium text-gray-800" >`+enjoyedSick+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Remaining</label>
    //     <p class="text-lg font-medium text-gray-800" >`+remainingSick+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Address During Leave</label>
    //     <p class="text-lg font-medium text-gray-800" >`+address+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Phone</label>
    //     <p class="text-lg font-medium text-gray-800" >`+phone+`</p>
    // </div>`+

    // `<div class="mb-2 ml-16">
    //     <label class="block text-sm font-medium text-gray-500">Joining Date</label>
    //     <p class="text-lg font-medium text-gray-800" >`+joiningDate+`</p>
    // </div>`+
    

    
    // // '<p class="ml-10"><strong>Date:</strong> ' + date + '</p>' +
    //   '<p class="ml-14"><strong>Name:</strong> ' + name + '</p>' +
    //   '<p><strong>Designation:</strong> ' + designation + '</p>' +
    //   '<p><strong>Department:</strong> ' + department + '</p>';
  
    // Set the options for html2pdf
    var options = {
        filename: 'output.pdf',
        // image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          text_rendering: 'display',
          pdfOutputIntent: false, // Ensure selectable and copyable text
        },
    };
  
    // Generate the PDF
    html2pdf().from(content).set(options).save();
  }
  