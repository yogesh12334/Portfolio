var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for ( tablink of tablinks) {
        tablink.classList.remove("active-link"); 
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab"); 
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); 
}

var sidememu= document.getElementById("sidemenu");

function openmenu (){
    sidemenu.style.right = "0";
}

function closemenu (){
    sidemenu.style.right = "-200px";
}

const scriptURL = '<https://script.google.com/macros/s/AKfycbyCMN9uuC-V1QTn2h-efBIlnbLRPzOSC6tQSz7A-Rkm9qrnw_S00eQshiA-ZCPJomk-OQ/exec>'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
