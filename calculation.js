function calculateRemainingLeave() {
    // Get the input and span elements
    const enjoyedLeaveInput = document.getElementById('enjoyed-casual-leave');
    const remainingLeaveSpan = document.getElementById('remaining-casual-leave');
    const totalLeaveSpan = document.getElementById('total-casual-leave');

    // Get the values of enjoyed leave and total leave
    const enjoyedLeave = parseInt(enjoyedLeaveInput.value);
    const totalLeave = parseInt(totalLeaveSpan.textContent);

    // Calculate the remaining leave
    var remainingLeave = totalLeave - enjoyedLeave;
    remainingLeave = Math.max(remainingLeave, 0);
    

    // Update the remaining leave span with the calculated value
    remainingLeaveSpan.textContent = remainingLeave;
}

function calculateRemainingSickLeave() {
    // Get the input and span elements
    const enjoyedLeaveInput = document.getElementById('enjoyed-sick-leave');
    const remainingSickLeaveSpan = document.getElementById('remaining-sick-leave');
    const totalLeaveSpan = document.getElementById('total-sick-leave');

    // Get the values of enjoyed leave and total leave
    const enjoyedSickLeave = parseInt(enjoyedLeaveInput.value);
    const totalSickLeave = parseInt(totalLeaveSpan.textContent);

    // Calculate the remaining leave
    var remainingSickLeave = totalSickLeave - enjoyedSickLeave;
    remainingSickLeave = Math.max(remainingSickLeave, 0);
    

    // Update the remaining leave span with the calculated value
    remainingSickLeaveSpan.textContent = remainingSickLeave;
}