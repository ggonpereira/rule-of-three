// that's my first project... take it easy lol

function testando() {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    const num3 = document.getElementById("num3").value

    const typeRule = document.getElementById("choose-type").value
    const inputs = document.querySelectorAll(".insert-data")
    const select = document.querySelector("select")

    // verify the type of rule of three selected by the user
    if (typeRule != "" & typeRule == 1) {
        const result = (num2 * num3) / num1

        document.getElementById("result").value = Math.round(result)
    }
    if (typeRule != "" & typeRule == 2) {
        const result = (num1 * num2) / num3

        document.getElementById("result").value = Math.round(result)
    }

    // verify if the user insert " E or , or . "
    if (num1, num2, num3 == "e" || num1, num2, num3 == "." || num1, num2, num3 == "," || num1, num2, num3 == "" & typeRule == "") {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.borderColor = "red";
        }

        select.style.borderColor = "red";
    } else {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.borderColor = "#838383";
        }

        select.style.borderColor = "#838383";
    }

}