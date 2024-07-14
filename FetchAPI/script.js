const button = document.querySelector(".button");

button.addEventListener("click", function (){
    console.log("click olundu");
    fetch("https://api.adviceslip.com/advice").then(response=>response.json()).then(gelendata =>{
        console.log(gelendata);
        const advice = gelendata.slip.advice;
            console.log(advice);
        });
    });
