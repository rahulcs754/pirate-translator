const  tranButton = document.querySelector('#tranButton');
const url = "https://api.funtranslations.com/translate/pirate.json";

function textTranslation(){
    const inputText = document.querySelector('#inputText').value;
    const outputArea =  document.querySelector('#translate-output');
    const callUrl = constructURL(inputText);
    if( inputText ){
    fetch(callUrl)
    .then(res => res.json() )
    .then(data => {
        console.log(data)
        outputArea.innerHTML = data.contents.translated;
    }).catch( () => alert('Something wrong happend') );
    }else{
        alert("Please write something");
    }

}





tranButton.addEventListener('click',textTranslation);


function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}