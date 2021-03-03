const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true )
xhr.send()

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const JSONData = xhr.responseText
        const data = JSON.parse(JSONData)
        const pokemon = data.objects[0].pokemon
        makeList(pokemon)
    }
};

function makeList(arr){
    for (let i= 0; i < arr.length; i++){
        const element = document.createElement("h1")
        element.textContent = arr[i].name
        document.body.appendChild(element)
    }
};
