const input = document.getElementById("input")
const output = document.getElementById("output")

function revString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value
    const reverse = revString(value)
    if (value === reverse) {
        output.textContent = "It's a palindrome!"
    } else {
        output.textContent = "It's not a palindrome!"
    }

    input.value = ""

    setTimeout(() => { output.textContent = "" }, 2000)

}

