
document.getElementById("button").addEventListener("click" , function(){
    fetchApi();
});
function fetchApi(){
    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10',{
        headers: {
            "X-Mashape-Key" : "",
            "Accept" : "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("quote").innerHTML = data.quote;
        document.getElementById("author").innerHTML = data.author;
    })
    .catch(function(error){
        console.log(error);
    });
}

fetchApi();