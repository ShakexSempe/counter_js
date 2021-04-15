//set initial count within a variable
let count = 0;

// select value and buttons 
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');


buttons.forEach(button => {
    //add event listener to each button in the loop.
    //access event object in the callback funtion, to check which button has been clicked by user
    button.addEventListener('click', e => {
        //save classList of each button clicked in a variable 
        const styles = e.currentTarget.classList;
        //if loop to determine which button is clicked based on the classList (if cl = reset then = reste button)
        if(styles.contains('decrease')) {
            count --;
        }else if(styles.contains('increase')) {
            count +=1;
        }else {
            count = 0;
        }
        //change colors for the values usng if statement
        if(count > 0) {
            //span is in the value variable which has access to color via style property 
            value.style.color = '#008000';
        }
        if(count < 0) {
            value.style.color = '#dc143c'; 
        }
        if(count === 0) {
            value.style.color = '#063251';
        }  
        value.textContent = count;
    })
});
