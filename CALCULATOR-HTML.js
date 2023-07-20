let string = "";
let buttons = document.querySelectorAll('.buttons');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (ele) => {
        if (ele.target.innerHTML == '=') {
            string = eval(string); // eval method executes the "a/b" this 
            document.querySelector('input').value = string;
        }
        else if (ele.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(ele.target)
            string = string + ele.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});