var txtInput = document.getElementById("txt_input")
var txtOutput = document.getElementById("txt_output")
var btnElaborate = document.getElementById("btn_elaborate")



btnElaborate.addEventListener("click", ()=>{
    var input = txtInput.value
    
    var sliced = input.split(",")

    var list = Array()

    txtOutput.value = ""

    sliced.forEach(element => {
        var result = ' const val ' + element.trim() + ' = "' + element.trim() + '"\n'
        txtOutput.value += result
    });
})

 