console.log(document)
console.log(document.getElementsByTagName('p').length)

document.getElementById('count').textContent = document.getElementsByTagName('p').length;

for (i = 0; i < document.getElementsByClassName('trash').length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function(){
        console.log("click detecte")
        this.parentNode.remove()
        document.getElementById('count').textContent = document.getElementsByTagName('p').length;
    }

)

}

