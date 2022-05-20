
let turno = false

let victoriA = false

let counter = 0

const handleClick = (event) => {
   const {id} = event.target
   const div = document.getElementById(id);

   if (div.innerText === "" && victoriA === false) {
       div.innerText = turno ? "O" : "X"
       theVictoria()
       turno = !turno
   }   
};

// Función de victoria
const theVictoria = () => {
    counter++
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    // TODAS LAS FORMAS DE JUEGO VICTORIOSO

    const way1 = 
    div1.innerText === div2.innerText &&
    div1.innerText === div3.innerText &&
    div1.innerText !== "";

    const way2 = 
    div4.innerText === div5.innerText &&
    div4.innerText === div6.innerText &&
    div4.innerText !== "";

    const way3 = 
    div7.innerText === div8.innerText &&
    div7.innerText === div9.innerText &&
    div7.innerText !== "";

    const way4 = 
    div1.innerText === div4.innerText &&
    div1.innerText === div7.innerText &&
    div1.innerText !== "";

    const way5 = 
    div2.innerText === div5.innerText &&
    div2.innerText === div8.innerText &&
    div2.innerText !== "";

    const way6 = 
    div3.innerText === div6.innerText &&
    div3.innerText === div9.innerText &&
    div3.innerText !== "";

    const way7 = 
    div1.innerText === div5.innerText &&
    div1.innerText === div9.innerText &&
    div1.innerText !== "";

    const way8 = 
    div3.innerText === div5.innerText &&
    div3.innerText === div7.innerText &&
    div3.innerText !== "";

    if( way1 || 
        way2 || 
        way3 || 
        way4 || 
        way5 || 
        way6 || 
        way7 ||
        way8 ) {
        victoriA = true
        alert("VICTORIA PARA " + (turno ? "O" : "X"))
    } else {
        if(counter === 9){
            alert("TIE!")
        }
    }
};

const replay = () => {
    
    
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    div1.innerText = ""
    div2.innerText = ""
    div3.innerText = ""
    div4.innerText = ""
    div5.innerText = ""
    div6.innerText = ""
    div7.innerText = ""
    div8.innerText = ""
    div9.innerText = ""
    
    turno = false
    victoriA = false
    counter = 0
}