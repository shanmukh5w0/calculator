window.addEventListener("load",function(){
    let firstNumberElement = document.getElementById("firstNumber");
    let secondNumberElement = document.getElementById("secondNumber");
    let addButtonElement = document.getElementById("addition");
    let subButtonElement = document.getElementById("subtraction");
    let mulButtonElement = document.getElementById("multiplication");
    let divButtonElement = document.getElementById("division");

    let outputElement = document.getElementById("result");

    addButtonElement.addEventListener("click",function(){
        let firstNumber = firstNumberElement.value;
        let secondNumber = secondNumberElement.value;
        let url = "http://localhost:3000/addition?a="+firstNumber+"&b="+secondNumber;
        fetch(url)
        .then(function(res){
            res.json()
            .then(function(data) {
                outputElement.innerText = data.result;
            })
            .catch(function(error) {
                console.log("res.json()"+error);
            })
        })
        .catch(function(error){
            console.log("fetch()",error);
        })
    })

    subButtonElement.addEventListener("click",function(){
        let firstNumber = firstNumberElement.value;
        let secondNumber = secondNumberElement.value;
        let url = "http://localhost:3000/subtraction?a="+firstNumber+"&b="+secondNumber;
        fetch(url)
        .then(function(res){
            res.json()
            .then(function(data) {
                outputElement.innerText = data.result;
            })
            .catch(function(error) {
                console.log("res.json()"+error);
            })
        })
        .catch(function(error){
            console.log("fetch()",error);
        })
    })

    mulButtonElement.addEventListener("click",function(){
        let firstNumber = firstNumberElement.value;
        let secondNumber = secondNumberElement.value;
        let url = "http://localhost:3000/multiplication?a="+firstNumber+"&b="+secondNumber;
        fetch(url)
        .then(function(res){
            res.json()
            .then(function(data) {
                outputElement.innerText = data.result;
            })
            .catch(function(error) {
                console.log("res.json()"+error);
            })
        })
        .catch(function(error){
            console.log("fetch()",error);
        })
    })

    divButtonElement.addEventListener("click",function(){
        let firstNumber = firstNumberElement.value;
        let secondNumber = secondNumberElement.value;
        let url = "http://localhost:3000/division?a="+firstNumber+"&b="+secondNumber;
        fetch(url)
        .then(function(res){
            res.json()
            .then(function(data) {
                outputElement.innerText = data.result;
            })
            .catch(function(error) {
                console.log("res.json()"+error);
            })
        })
        .catch(function(error){
            console.log("fetch()",error);
        })
    })
})