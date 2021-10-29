const display = document.getElementById("show");
const events = document.querySelectorAll("input");
events.forEach(Eve => Eve.addEventListener("click", calculate));
var result = false;
function calculate(e){
    const event = e.target.value;
    if (event === "=")
    {
        var ope = display.textContent;
        if (ope !== "")
        {
            ope = eval(ope);
            display.innerHTML = ope;
            result = true;
        }
    }
    else if (event === "C")
    {
        display.innerHTML = "";
    }
    else 
    {
        if (!isNaN(Number(event)))
        {
            if (result === true)
            {
                display.innerHTML = "";
                result = false;
            } 
        }
        display.innerHTML += event;
    }
}
