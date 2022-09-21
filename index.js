const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const operation = document.getElementById("operation");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");


calcBtn.addEventListener('click', calc);

function calc() 
{
    let resultado;
    const txtN1 = parseFloat(n1.value);
    const txtN2 = parseFloat(n2.value);
    
    if((operation.value == "+" || operation.value == "-" || operation.value == "*" || operation.value == "/") && !isNaN(txtN1) && !isNaN(txtN2))
    {
        result.style = "color:black";
        switch (operation.value) 
        {

            case "+":
            resultado = txtN1 + txtN2;
            console.log(resultado);
            result.innerText = "= " + resultado.toString();
            break;

            case "-":
            resultado = txtN1 - txtN2;
            console.log(resultado);
            result.innerText = "= " + resultado.toString();
            break;

            case "*":
            resultado = txtN1 * txtN2;
            console.log(resultado);
            result.innerText = "= " + resultado.toString();
            break;

            case "/":
            resultado = txtN1 / txtN2;
            console.log(resultado);
            result.innerText = "= " + resultado.toString();
            break;

            
            
        }
    } else
    {
        result.style = "color:red";
        result.innerText = "no valid data";
    }
}