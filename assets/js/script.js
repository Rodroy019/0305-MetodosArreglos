const btnAgregar = document.getElementById("btnAgregar");
const inputTarea = document.getElementById("inputTarea");
const spanTotal = document.getElementById("spanTotal"); 
const spanRealizadas = document.getElementById("spanRealizadas"); 
const idList = document.getElementById("idList");
const tareaList = document.getElementById("tareaList");
const checkList = document.getElementById("checkList");
const borrarList = document.getElementById("borrarList");
const divList = document.getElementById("divList");



let tareas = [
    { id: 1, descripcion: "Cambiar Pañales", realizada: true },
    { id: 2, descripcion: "Preparar Mamdera", realizada: false },
    { id: 3, descripcion: "Hacer comida para el Bebé", realizada: false }
];


let agregar = () => {
    tareas.push({
        id: tareas.length +1, descripcion: inputTarea.value , realizada: false
    })
    console.log(tareas)
    list()
};

let list = () => {
    let templateId = "", templateTarea = "",templateCheck = "", templateBorrar ="", templateTotal="", TemplateRealizadas="";
    for(let tarea of tareas){
        templateId += `<li>${tarea.id}</li>`
        templateTarea += `<li>${tarea.descripcion}</li>`
        templateCheck += `<input type="checkbox"><br>`
        templateBorrar += `<button class="btnBorrar">x</button><br>`
    }
/*     idList.innerHTML = templateId;
    tareaList.innerHTML = templateTarea;
    checkList.innerHTML = templateCheck;
    borrarList.innerHTML = templateBorrar;*/
    spanTotal.innerHTML = tareas.length; 
    divList.innerHTML = `
    <ul id="idList">
        <h4>ID</h4>`+
        templateId
    +`</ul>
    <ul id="tareaList">
        <h4>Tarea</h4>`+
       templateTarea
    +`</ul>
    <ul id="checkList">
        <br>`+
       templateCheck
    +`</ul>
    <ul id="borrarList">
        <br>`+
        templateBorrar
    +`</ul>
    `

}


btnAgregar.addEventListener("click", agregar);

