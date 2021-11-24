const notifyBtn = document.querySelector('.notify-btn')
const emailInput = document.querySelector('.email-input')
const errMsg = document.querySelector('.err-msg')

notifyBtn.addEventListener('click', e => {
    e.preventDefault();
    if (emailInput.value === "") {
        emailInput.placeholder = "example@email/com";
        emailInput.classList.add('error');
        errMsg.textContent = 'Please provide a valid email address'
    }
})