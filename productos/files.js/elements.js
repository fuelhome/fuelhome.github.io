document.getElementById("inyector").addEventListener("click", ShowInjectors);

//var containerShow = document.getElementByClassName("element-row");

//document.ge


function ShowInjectors () {
    document.getElementById("element-row").innerHTML = `<div class="row">
    <div class="col m3 offset-m1 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/AaDUS2Ul.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                <span class="card-title">Injector Wolsvagen</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small>Price: <b>0.66$</b></small></p>
            </div>
        </div>
    </div>    
    <div class="col m3 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/qRLFvlFm.jpg">
                <span class="card-title">Injector Ford</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small><b>0.66$</b></small></p>
            </div>
        </div>        
    </div>
    <div class="col m3 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/DBC0l7Tm.jpg">
                <span class="card-title">Injector Renault</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small><b>0.66$</b></small></p>
            </div>
        </div>
    </div>
</div>`;
    var element = document.getElementById("hidenEl");
    element.classList.add("hiden");

    var catTitle = document.getElementById("elements-title-show");
    catTitle.innerHTML = `Inyectores`;
};

document.getElementById("repuestos").addEventListener("click", ShowRepuestos);

function ShowRepuestos () {
    document.getElementById("element-row").innerHTML = `<div class="img-r servicios" id="servicios">
    <div class="row">
        <div class="col m3 offset-m1 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/tTA2Vnfm.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Orings</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/fDJclE1l.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Microfiltros</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/IzdEQcgl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Puntas de Araña</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10 offset-m1">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/JftD1Eul.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Arandela Superior</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/WWIjyZEl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Tobera Bosch</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/YddkyxDl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Tobera para toyota</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10 offset-m1 push-m2 ">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/p2IOVvzl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Tobera Platillo</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10 push-m2 ">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/bqzx8Xnl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Arandela de Plastico</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
    </div>
</div>`;
    var element = document.getElementById("hidenEl");
    element.classList.add("hiden");

    var catTitle = document.getElementById("elements-title-show");
    catTitle.innerHTML = `Repuestos de inyectores`
};

document.getElementById("estaciones").addEventListener("click", showBancosDePruebas)

function showBancosDePruebas () {
    document.getElementById("element-row").innerHTML = `<div class="row">
    <div class="col m2 hide-on-small-only"></div>
    <div class="col m3 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/0KBCXGHl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                <span class="card-title">Ramal para banco de pruebas / launch</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small>Price: <b>0.66$</b></small></p>
            </div>
        </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/eSbI21Il.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Panel de control para Banco de Prubas</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
    </div>`
    var element = document.getElementById("hidenEl");
    element.classList.add("hiden");

    var catTitle = document.getElementById("elements-title-show");
    catTitle.innerHTML = `Repuestos de Bancos de pruebas para inyectores`
}

document.getElementById("Todos").addEventListener("click", ShowAll);

function ShowAll () {
    document.getElementById("element-row").innerHTML = `<div class="row">
    <div class="col m3 offset-m2 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/AaDUS2Ul.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                <span class="card-title">Injector Wolsvagen</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small>Price: <b>0.66$</b></small></p>
            </div>
        </div>
    </div>    
    <div class="col m3 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/qRLFvlFm.jpg">
                <span class="card-title">Injector Ford</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small><b>0.66$</b></small></p>
            </div>
        </div>        
    </div>
    <div class="col m3 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/DBC0l7Tm.jpg">
                <span class="card-title">Injector Renault</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small><b>0.66$</b></small></p>
            </div>
        </div>
    </div>
    <div class="col m3 offset-m2 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/tTA2Vnfm.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                <span class="card-title">Orings</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small>Price: <b>0.66$</b></small></p>
            </div>
        </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/fDJclE1l.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Microfiltros</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/IzdEQcgl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Puntas de Araña</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 offset-m1 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/JftD1Eul.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Arandela Superior</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/WWIjyZEl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Tobera Bosch</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/YddkyxDl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Tobera para toyota</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 offset-m1 s10 ">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/p2IOVvzl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Tobera Platillo</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10 ">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/bqzx8Xnl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Arandela de Plastico</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
        <div class="col m3 s10">
        <div class="card">
            <div class="card-image">
                <img src="https://i.imgur.com/0KBCXGHl.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                <span class="card-title">Ramal para banco de pruebas / launch</span>
            </div>
            <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <p class="center"><small>Price: <b>0.66$</b></small></p>
            </div>
        </div>
        </div>
        <div class="col m3 offset-m1 s10">
            <div class="card">
                <div class="card-image">
                    <img src="https://i.imgur.com/eSbI21Il.jpg" alt="injector wolsvagen volkswagen repuestos venezuela cojedes valencia">
                    <span class="card-title">Panel de control para Banco de Prubas</span>
                </div>
                <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    <p class="center"><small>Price: <b>0.66$</b></small></p>
                </div>
            </div>
        </div>
    </div>`
    var element = document.getElementById("hidenEl");
    element.classList.add("hiden");

    var catTitle = document.getElementById("elements-title-show");
    catTitle.innerHTML = `Todos los Productos`
};