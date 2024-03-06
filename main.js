function szamok(){
    let txt = "";
    for(let i =0; i< 9; i++){
        txt+=`<button>${i}</button>`
    }
    txt += `<div></div> <button>${9}</button>`
    return txt
}
const SZAMOK = document.querySelectorAll(".szamok")[0]
console.log(SZAMOK)
SZAMOK.innerHTML = szamok()
const szamokGOMB = document.querySelectorAll(".szamok button") 

for(let i = 0; i<szamokGOMB.length; i++){
    szamokGOMB[i].addEventListener("click", kattintas)
}
const KIJELZO = document.querySelectorAll(".kijelzo")[0]

function kattintas(event){
    /*ez a kód fut le ha rákattintunk a gombunkra*/
    //console.log(event.target)
    /*kijelzo elemet megfogjuk*/
    const kifejezesELEM = document.querySelector(".kifejezes")
    kifejezesELEM.innerHTML += event.target.innerHTML

}