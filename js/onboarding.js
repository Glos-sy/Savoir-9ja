const otps = document.querySelectorAll('.token input');
const submit = document.querySelector('.sign-btn');
const modal = document.querySelector('.modal-loader');
const modal_close = document.querySelector('.continue');
// const resend = document.querySelector();

otps.forEach((input, index)=>{
    input.addEventListener("input", (e)=>{
        const target = e.target;
        const value = target.value;
    
        if (isNaN(value)) {
            target.value = "";
            return;
        }
    
        if(value != "") {
            const next = target.nextElementSibling;
            const end = document.querySelector('#six');
            if(next) {
                next.focus();
            }
            if (end.value.length == 1) {
                submit.setAttribute("disabled", "false")
                submit.style.background = '#193028';
                submit.style.color = "#fff"
            }
        }
    });

    input.addEventListener("keyup", (e)=>{
        // console.log(e);
        const target = e.target;
        const key = e.key.toLowerCase();

        if (key == "backspace" || key === "delete") {
            target.value = "";
            const prev = target.previousElementSibling;
            const end = document.querySelector('#six');
            if (end.value.length < 1) {
                submit.style.background = 'black';
            }
            if (prev) {
                prev.focus();        
            }
            return;
        }
    });
});
console.log(submit);
submit.addEventListener("click", ()=> {
    setTimeout(() => {
        modal.classList.remove("hide");
    }, 1000);
});

modal_close.addEventListener('focus', ()=> {
    setTimeout(() => {
        modal.classList.add("hide");
    }, 1000);
    window.location = "../index.html";
});



