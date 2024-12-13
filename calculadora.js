

function Suma(){
    const a = document.getElementById("first").value;
    const b = document.getElementById("second").value;
    document.getElementById("resultado").value = parseInt(a) + parseInt(b);

}



document.getElementById('sumabutton').addEventListener('click', Suma);