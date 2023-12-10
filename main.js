const menuMobile = document.querySelector('.menu_mobile');
const menuMobileIcon = document.querySelector('.menu_mobile_icon');
const logoNav = document.querySelector('.logo');
const mainSector = document.querySelector('.inicio_main');
const princiMobile = document.querySelector('.logo_menu_mobile');
const inicioNav = document.querySelector('.inicio');
const inicioMobile = document.querySelector('.inicio_mobile');
const sobreMi = document.querySelector('.sobre_mi');
const contenedorTarjetasEstudio = document.querySelector('.swiper-wrapper');
const contenedorTarjetasEstudioMobile = document.querySelector('.slider_mobile');
const tarjestasEstudio = document.querySelector('.tarjetas_estudio');
const contenedorSlider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnAnterior = document.querySelector('.anterior');
const btnSiguiente = document.querySelector('.siguiente');
const estudiosH2 = document.querySelector('.estudios_h2');
const flechaPrev = document.querySelector('.swiper-button-prev');
const flechaNext = document.querySelector('.swiper-button-next');
const swiperMain = document.querySelector('.swiper');
const navSwiperMain = document.querySelector('.swiper-pagination');
const swiperMainMobile = document.querySelector('.swiper_mobile');
const portafolio = document.querySelector('.portafolio_main');
const portafolioNav = document.querySelector('.Portafolio');
const portafolioBtnMobile = document.querySelector('.Portafolio_mobile');
const redesSocialesNav = document.querySelector('.Redes_sociales');
const redesSocialesMobile = document.querySelector('.Redes_sociales_mobile');
const redesSociales = document.querySelector('.Redes_sociales_main');
const portafolioWarp = document.querySelector('.portafolio_wrapper');
const portafolio3DBtn = document.querySelector('.portafolio_3D');
const portafolioDescripcion = document.querySelector('.portafolio_detalle_container');
const portafolioDescripcionBtnClose = document.querySelector('.close_icon_portafolio');
const portafolioVideoBtn = document.querySelector('.portafolio_Video');
const portafolioProgBtn = document.querySelector('.portafolio_Prog');

let estudios = [];
let contenidos3D = [];
let contenidosVideos = [];
let contenidosProg = [];

class estudio {
    constructor (nombre, fecha, diploma){
        this.nombre = nombre;
        this.fecha = fecha;
        this.diploma = diploma;
    }
}

class contenido3D {
    constructor (nombre, imagenes, descripcion, logos){
        this.nombre = nombre;
        this.imagenes = imagenes;
        this.descripcion = descripcion;
        this.logos = logos;
    }
}

class contenidoVideos {
    constructor (nombre, imagenes, descripcion, logos, link){
        this.nombre = nombre;
        this.imagenes = imagenes;
        this.descripcion = descripcion;
        this.logos = logos;
        this.link = link;
    }
}

class contenidoProg {
    constructor (nombre, imagenes, descripcion, logos, link){
        this.nombre = nombre;
        this.imagenes = imagenes;
        this.descripcion = descripcion;
        this.logos = logos;
        this.link = link;
    }
}

let javaBasico = new estudio ('Diplomado Basico JavaScript', 'AGO-2023', './Cursos_Diplomas/diploma-basico-javascript.svg');
let frontDev = new estudio ('Diplomado frontend developer', 'AGO-2023', './Cursos_Diplomas/diploma-frontend-developer.svg');
let practicoFrontDev = new estudio ('Diplomado frontend developer practico', 'AGO-2023', './Cursos_Diplomas/diploma-frontend-developer-practico.svg');
let gitGithub = new estudio ('Diplomado Git & GitHub', 'AGO-2023', './Cursos_Diplomas/diploma-git-github.svg');
let HtmlCss = new estudio ('Diplomado HTML & CSS', 'AGO-2023', './Cursos_Diplomas/diploma-html-css.svg');
let practicoJava = new estudio ('Diplomado JavaScript practico', 'AGO-2023', './Cursos_Diplomas/diploma-javascript-practico.svg');
let programacionBasica = new estudio ('Diplomado programación basica', 'AGO-2022', './Cursos_Diplomas/diploma-programacion-basica (1).svg');
let animacion = new estudio('Tecnólogo animación digital', 'NOV-2021', './Cursos_Diplomas/WhatsApp Image 2023-12-09 at 11.54.53 AM.jpeg');

estudios.push(javaBasico, frontDev, practicoFrontDev, gitGithub, HtmlCss, practicoJava, programacionBasica, animacion);

let rose = new contenido3D ('Rose', ['./recursos/Portafolio/Maya/Rose/rose render 2.png', './recursos/Portafolio/Maya/Rose/rose render.png'], 
'Este modelo 3D en Maya muestra un rombo geométricamente perfecto con un anillo de flores flotantes, fusionando lo abstracto con lo orgánico para crear una escena impactante que combina la naturaleza con la precisión geométrica.',
['./recursos/logo Maya.svg']);

let reloj = new contenido3D('Reloj', ['./recursos/Portafolio/Maya/Reloj/reloj 4.jpg', './recursos/Portafolio/Maya/Reloj/reloj 2.jpg', './recursos/Portafolio/Maya/Reloj/reloj.jpg'],
'Este modelo 3D en Maya representa un reloj negro con un diseño elegante y preciso. Sus agujas y números ofrecen una lectura clara del tiempo, lo convierten en un elemento destacado para proyectos digitales sofisticados.',
['./recursos/logo Maya.svg']);

let blueRose = new contenido3D('Blue Rose', ['./recursos/Portafolio/Maya/BlueRose/blue rose p2.jpg', './recursos/Portafolio/Maya/BlueRose/blue rose p1.jpg'],
'Este modelo 3D en Maya representa una espada de cristal con una hoja, adornada en forma de rosa azul. Su diseño combina la elegancia del cristal con la belleza orgánica de la flor, creando una pieza única para proyectos digitales.',
['./recursos/logo Maya.svg']);

let bigBen = new contenido3D('Big Ben', ['./recursos/Portafolio/Maya/BigBen/BigBen 1.PNG', './recursos/Portafolio/Maya/BigBen/BigBen 2.PNG', './recursos/Portafolio/Maya/BigBen/BigBen 3.PNG'],
'Este modelo 3D en Maya es una representación del icónico Big Ben con un toque único: está elaborado con parafina rosa. Esta fusión de lo clásico y lo inusual crea una pieza sorprendente para proyectos digitales.',
['./recursos/logo Maya.svg']);

let magic = new contenido3D('Magic', ['./recursos/Portafolio/Maya/Magic/magic.PNG'],
'Este modelo 3D en Maya representa una bola abierta que emana humo y lanza bolas de variados materiales. Con un letrero que dice "Magic", crea un efecto mágico, perfecto para proyectos digitales asombrosos.',
['./recursos/logo Maya.svg']);

let habitacion1 = new contenido3D('Habitación', ['./recursos/Portafolio/Maya/Habitacion1/habitacion_1.PNG', './recursos/Portafolio/Maya/Habitacion1/habitacion_3.PNG', './recursos/Portafolio/Maya/Habitacion1/habitacion_2.PNG'],
'Este modelado 3D de una habitación estilo cartoon presenta un espacio lleno de colores vivos y muebles caricaturescos. Con un ambiente lúdico y alegre, es perfecto para proyectos digitales que buscan un toque de diversión y fantasía.',
['./recursos/logo Maya.svg']);

let habitacion2 = new contenido3D('Habitación', ['./recursos/Portafolio/Maya/Habitacion2/Habitacion_1.PNG', './recursos/Portafolio/Maya/Habitacion2/Habitacion_3.PNG', './recursos/Portafolio/Maya/Habitacion2/Habitacion_2.PNG'],
'Este modelado 3D de una habitación estilo cartoon nocturna ofrece un ambiente encantador y relajado con tonos oscuros y destellos de estrellas. Ideal para proyectos digitales que buscan una atmósfera mágica y tranquila.',
['./recursos/logo Maya.svg']);

let ring = new contenido3D('Ring', ['./recursos/Portafolio/Maya/Ring/ring.PNG'],
'Este modelado 3D presenta un elegante anillo dorado con intrincados huecos que le confieren un aspecto único y sofisticado. Perfecto para proyectos digitales que buscan un toque de belleza y detalle.',
['./recursos/logo Maya.svg']);

let lambo = new contenido3D('Huracan', ['./recursos/Portafolio/Maya/Huracan/huracan_1.PNG', './recursos/Portafolio/Maya/Huracan/huracan_2.PNG', './recursos/Portafolio/Maya/Huracan/huracan_3.PNG'],
'Este modelado 3D del Lamborghini Huracán captura la esencia de la velocidad y el lujo. Con líneas aerodinámicas y detalles realistas, es perfecto para proyectos digitales que buscan una elegancia deportiva.',
['./recursos/logo Maya.svg']);

let diamante = new contenido3D('Diamante', ['./recursos/Portafolio/Maya/Diamante/diamante.PNG'],
'Este modelado 3D de un diamante presenta un cristal deslumbrante con facetas perfectamente cortadas que capturan la luz de manera brillante. Ideal para proyectos digitales que buscan un toque de elegancia y lujo.',
['./recursos/logo Maya.svg']);

contenidos3D.push(rose, reloj, blueRose, bigBen, magic, habitacion1, habitacion2, ring, lambo, diamante);

let spot1 = new contenidoVideos('Spot CVC #1', ['./recursos/Portafolio/Video/Spot1/WhatsApp Image 2023-09-13 at 12.43.57 PM (1).jpeg'],
'Edición de video, corrección de color y generación de animaciones para Ecología Digital. Transformamos sus tomas en producciones impactantes, añadiendo calidad y creatividad a los medios digitales de la empresa.',
['./recursos/logo Dav.svg'],
'https://youtu.be/O97O-XQqmOU');

let spot2 = new contenidoVideos('Spot CVC #2', ['./recursos/Portafolio/Video/Spot2/WhatsApp Image 2023-09-30 at 2.30.27 PM.jpeg'],
'Edición de video, corrección de color y generación de animaciones para Ecología Digital. Transformamos sus tomas en producciones impactantes, añadiendo calidad y creatividad a los medios digitales de la empresa.',
['./recursos/logo Dav.svg'],
'https://youtu.be/QuflP1xZL6g');

let tesis = new contenidoVideos('Tesis de grado', ['./recursos/Portafolio/Video/Tesis/WhatsApp Image 2023-09-30 at 3.08.13 PM.jpeg'],
'Esta animación es el resultado de una extensa investigación realizada como parte del proyecto de grado en la carrera de Animación Digital. Representa el fruto de un profundo estudio y esfuerzo en busca de la excelencia creativa y técnica.',
['./recursos/logo AE.svg'],
'https://youtu.be/9bRptq2lfmY');

contenidosVideos.push(spot1, spot2, tesis);

let Garden = new contenidoProg('Yard Sale', ['./recursos/Portafolio/Prog/Yard Sale Css/WhatsApp Image 2023-09-30 at 5.36.03 PM.jpeg', './recursos/Portafolio/Prog/Yard Sale Css/WhatsApp Image 2023-09-30 at 5.34.00 PM.jpeg', './recursos/Portafolio/Prog/Yard Sale Css/WhatsApp Image 2023-09-30 at 5.33.16 PM.jpeg'],
'Maquetación de una página web para un evento de venta de garaje (yard sale). Esta creación combina estética y funcionalidad para proporcionar una experiencia atractiva y eficiente a los usuarios interesados en el evento.',
['./recursos/logo HTML.svg', './recursos/logo css.svg'],
'https://github.com/kimjoo01/Curso_Practico_de_Frontend_Developer');

let Garden2 = new contenidoProg('Yard Sale', ['./recursos/Portafolio/Prog/Yard sale js/WhatsApp Image 2023-09-30 at 6.42.00 PM.jpeg', './recursos/Portafolio/Prog/Yard sale js/WhatsApp Image 2023-09-30 at 6.42.49 PM.jpeg', './recursos/Portafolio/Prog/Yard sale js/WhatsApp Image 2023-09-30 at 6.43.52 PM.jpeg'],
'Maquetación de una página web para un evento de venta de garaje (yard sale) con implementación de JavaScript para una experiencia interactiva.',
['./recursos/logo HTML.svg', './recursos/logo css.svg', './recursos/logo js.svg'],
'https://github.com/kimjoo01/Curso_Practico_de_JavaScript/tree/fusion_e_incorporacion_de_JS');

let porta = new contenidoProg('Portafolio', ['./recursos/Portafolio/Prog/Portafolio/WhatsApp Image 2023-09-30 at 7.00.15 PM.jpeg', './recursos/Portafolio/Prog/Portafolio/WhatsApp Image 2023-09-30 at 7.01.45 PM.jpeg'],
'Mi portafolio web exhibe mi trabajo creativo y profesional. Desde diseño hasta desarrollo, muestra mi pasión por la innovación y la excelencia en diversos proyectos y habilidades.',
['./recursos/logo HTML.svg', './recursos/logo css.svg', './recursos/logo js.svg'],
'https://github.com/kimjoo01/kimjoo01.github.io');

contenidosProg.push(Garden, Garden2, porta);

menuMobileIcon.addEventListener('click', add_menu_mobile);
princiMobile.addEventListener('click', add_main_cont);
logoNav.addEventListener('click', add_main_cont);
inicioNav.addEventListener('click', add_sobreMi_cont);
inicioMobile.addEventListener('click', add_sobreMi_cont);
portafolioNav.addEventListener('click', add_portafolio_cont);
portafolioBtnMobile.addEventListener('click', add_portafolio_cont);
redesSocialesNav.addEventListener('click', add_redesSociales_cont);
redesSocialesMobile.addEventListener('click', add_redesSociales_cont);
portafolio3DBtn.addEventListener('click', portafolio3D);
portafolioVideoBtn.addEventListener('click', portafolioVideo);
portafolioProgBtn.addEventListener('click', portafolioProg);

var observador = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        estudiosH2.classList.add('elemento_estudiosH2_visible');
    } else {
        estudiosH2.classList.remove('elemento_estudiosH2_visible');
    }
    }, {
    threshold: 0.5,
});

observador.observe(estudiosH2);

var observador = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        flechaPrev.classList.add('elemento_flechaprev_visible');
    } else {
        flechaPrev.classList.remove('elemento_flechaprev_visible');
    }
    }, {
    threshold: 0.5,
});

observador.observe(flechaPrev);

var observador = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        flechaNext.classList.add('elemento_flechanext_visible');
    } else {
        flechaNext.classList.remove('elemento_flechanext_visible');
    }
    }, {
    threshold: 0.5,
});

observador.observe(flechaNext);

var observador = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        swiperMain.classList.add('elemento_swipe_visible');
    } else {
        swiperMain.classList.remove('elemento_swipe_visible');
    }
    }, {
    threshold: 0.02,
});

observador.observe(swiperMain);

var observador = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        navSwiperMain.classList.add('elemento_navSwipe_visible');
    } else {
        navSwiperMain.classList.remove('elemento_navSwipe_visible');
    }
    }, {
    threshold: 0.5,
});

observador.observe(navSwiperMain);

var observador = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
        swiperMainMobile.classList.add('elemento_swipe_visible');
    } else {
        swiperMainMobile.classList.remove('elemento_swipe_visible');
    }
    }, {
    threshold: 0.02,
});

observador.observe(swiperMainMobile);

function add_menu_mobile(){

    menuMobile.classList.toggle('inactive');
    logoNav.classList.toggle('difuse');
}

function add_main_cont(){
    const is_mobileMnu_open = menuMobile.classList.contains('inactive');
    const is_sobreMi_open = sobreMi.classList.contains('inactive');
    const is_portafolio_open = portafolio.classList.contains('inactive');
    const is_redesSociales_open = redesSociales.classList.contains('inactive');
    const is_portafolios_open = portafolioWarp.classList.contains('inactive');
    const is_portafolio_descripcion_open = portafolioDescripcion.classList.contains('inactive');
    if(!is_portafolio_descripcion_open){
        portafolioDescripcion.classList.add('inactive');
    }

    if(!is_redesSociales_open) {
        redesSociales.classList.add('inactive');
        redesSocialesNav.classList.remove('bloquear');
    }
    if (!is_mobileMnu_open) {
        menuMobile.classList.add('inactive');
        menuMobileIcon.classList.remove('difuse');
        logoNav.classList.remove('difuse');
    }
    if(!is_sobreMi_open) {
        sobreMi.classList.add('inactive');
        inicioNav.classList.remove('bloquear');
    }
    if(!is_portafolio_open) {
        portafolio.classList.add('inactive');
        portafolioNav.classList.remove('bloquear');
    }
    if(!is_portafolios_open) {
        portafolioWarp.classList.add('inactive');
        portafolioNav.classList.remove('bloquear');
    }

    mainSector.classList.remove('inactive');
}

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {

        speed: 400,
        autoplay: {
            delay: 5000,
        },

        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
      
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper_mobile', {

        speed: 600,

        effect: 'flip',
        flipEffect: {
            slideShadows: false,
        },

        pagination: {
            el: '.swiper-pagination',
        },
      
    });
});

function add_sobreMi_cont(){
    const is_mobileMnu_open = menuMobile.classList.contains('inactive');
    const is_mainCont_open = mainSector.classList.contains('inactive');
    const is_portafolio_open = portafolio.classList.contains('inactive');
    const is_redesSociales_open = redesSociales.classList.contains('inactive');
    const is_portafolios_open = portafolioWarp.classList.contains('inactive');
    const is_portafolio_descripcion_open = portafolioDescripcion.classList.contains('inactive');

    if(!is_portafolio_descripcion_open){
        portafolioDescripcion.classList.add('inactive');
    }
    if(!is_redesSociales_open) {
        redesSociales.classList.add('inactive');
        redesSocialesNav.classList.remove('bloquear');
    }
    if (!is_mobileMnu_open) {
        menuMobile.classList.add('inactive');
        menuMobileIcon.classList.remove('difuse');
        logoNav.classList.remove('difuse');
    }
    if(!is_mainCont_open) {
        mainSector.classList.add('inactive');
    }
    if(!is_portafolio_open) {
        portafolio.classList.add('inactive');
        portafolioNav.classList.remove('bloquear');
    }
    if(!is_portafolios_open) {
        portafolioWarp.classList.add('inactive');
        portafolioNav.classList.remove('bloquear');
    }

    contenedorTarjetasEstudio.innerHTML = ' ';

    for (var i = 0; i < estudios.length; i++){

        const SwiperDiv = document.createElement('div');
        SwiperDiv.classList.add('swiper-slide');

            const tarjetaEstudio = document.createElement('div');
            tarjetaEstudio.classList.add('tarjetas_estudio');

                const diplomaImg = document.createElement('img');
                diplomaImg.setAttribute('src', estudios[i].diploma);

                const especiDiv = document.createElement('div');
                especiDiv.classList.add('especificacion');

                    const especiDivH3 = document.createElement('h3');
                    especiDivH3.innerText = estudios[i].nombre;

                    const especiDivP = document.createElement('p');
                    especiDivP.innerText = estudios[i].fecha;

                especiDiv.appendChild(especiDivH3);
                especiDiv.appendChild(especiDivP);

            tarjetaEstudio.appendChild(diplomaImg);
            tarjetaEstudio.appendChild(especiDiv);

        SwiperDiv.appendChild(tarjetaEstudio);

        contenedorTarjetasEstudio.appendChild(SwiperDiv);

    }

    contenedorTarjetasEstudioMobile.innerHTML = ' ';

    for (var i = 0; i < estudios.length; i++){

        const SwiperDiv = document.createElement('div');
        SwiperDiv.classList.add('swiper-slide');

            const tarjetaEstudio = document.createElement('div');
            tarjetaEstudio.classList.add('tarjetas_estudio');

                const diplomaImg = document.createElement('img');
                diplomaImg.setAttribute('src', estudios[i].diploma);

                const especiDiv = document.createElement('div');
                especiDiv.classList.add('especificacion');

                    const especiDivH3 = document.createElement('h3');
                    especiDivH3.innerText = estudios[i].nombre;

                    const especiDivP = document.createElement('p');
                    especiDivP.innerText = estudios[i].fecha;

                especiDiv.appendChild(especiDivH3);
                especiDiv.appendChild(especiDivP);

            tarjetaEstudio.appendChild(diplomaImg);
            tarjetaEstudio.appendChild(especiDiv);

        SwiperDiv.appendChild(tarjetaEstudio);

        contenedorTarjetasEstudioMobile.appendChild(SwiperDiv);

    }

    sobreMi.classList.remove('inactive');
    inicioNav.classList.add('bloquear');
}

function add_portafolio_cont() {

    const is_mobileMnu_open = menuMobile.classList.contains('inactive');
    const is_sobreMi_open = sobreMi.classList.contains('inactive');
    const is_mainCont_open = mainSector.classList.contains('inactive');
    const is_redesSociales_open = redesSociales.classList.contains('inactive');
    const is_portafolios_open = portafolioWarp.classList.contains('inactive');
    const is_portafolio_descripcion_open = portafolioDescripcion.classList.contains('inactive');

    if(!is_portafolio_descripcion_open){
        portafolioDescripcion.classList.add('inactive');
    }
    if (!is_mobileMnu_open) {
        menuMobile.classList.add('inactive');
        menuMobileIcon.classList.remove('difuse');
        logoNav.classList.remove('difuse');
    }
    if(!is_sobreMi_open) {
        sobreMi.classList.add('inactive');
        inicioNav.classList.remove('bloquear');
    }
    if(!is_mainCont_open) {
        mainSector.classList.add('inactive');
    }
    if(!is_redesSociales_open) {
        redesSociales.classList.add('inactive');
        redesSocialesNav.classList.remove('bloquear');
    }
    if(!is_portafolios_open) {
        portafolioWarp.classList.add('inactive');
        portafolioNav.classList.remove('bloquear');
    }

    portafolio.classList.remove('inactive');
    portafolioNav.classList.add('bloquear');

}

document.addEventListener("DOMContentLoaded", function() {
    class AtroposComponent extends HTMLElement {
        constructor() {
          super();
        }
    
        connectedCallback() {
          this.atropos = new Atropos({
            el: this.querySelector('.atropos'),
            onEnter() {
              console.log('Atropos Component: Enter');
            },
            onLeave() {
              console.log('Atropos Component: Leave');
            },
            onRotate(x, y) {
              console.log('Atropos Component: Rotate', x, y);
            }
          });
    
          console.log('Atropos Component: Connected!', this);
        }
    
        disconnectedCallback() {
          this.atropos.destroy();
    
          console.log('Atropos Component: Disconnected!', this);
        }

    }
    
    customElements.define('atropos-component', AtroposComponent);

});

function portafolio3D () {

    const is_mobileMnu_open = menuMobile.classList.contains('inactive');
    const is_mainCont_open = mainSector.classList.contains('inactive');
    const is_portafolio_open = portafolio.classList.contains('inactive');
    const is_sobreMi_open = sobreMi.classList.contains('inactive');
    const is_redesSociales_open = redesSociales.classList.contains('inactive');

    if(!is_sobreMi_open) {
        sobreMi.classList.add('inactive');
        inicioNav.classList.remove('bloquear');
    }
    if (!is_mobileMnu_open) {
        menuMobile.classList.add('inactive');
        menuMobileIcon.classList.remove('difuse');
        logoNav.classList.remove('difuse');
    }
    if(!is_mainCont_open) {
        mainSector.classList.add('inactive');
    }
    if(!is_portafolio_open) {
        portafolio.classList.add('inactive');
    }
    if(!is_redesSociales_open) {
        redesSociales.classList.add('inactive');
        redesSocialesNav.classList.remove('bloquear');
    }

    portafolioWarp.innerHTML = ' ';

    for(var i = 0; i < contenidos3D.length; i++){

        const cartaPortafolio = document.createElement('div');
        cartaPortafolio.classList.add('carta_portafolio');
        cartaPortafolio.setAttribute('card', i);

            const imagenPortafolio = document.createElement('div');
            imagenPortafolio.classList.add('imagen_portafolio');

                const imagenPortafolioImg = document.createElement('img');
                imagenPortafolioImg.setAttribute('src', contenidos3D[i].imagenes[0]);

            imagenPortafolio.appendChild(imagenPortafolioImg);

            const descripcionPortafolio = document.createElement('div');
            descripcionPortafolio.classList.add('descripcion_portafolio');

                const tituloDescripcion = document.createElement('h2');
                tituloDescripcion.classList.add('titulo_descripcion_portafolio');
                tituloDescripcion.innerText = contenidos3D[i].nombre;

                const logoDescripcion = document.createElement('div');
                logoDescripcion.classList.add('logos_descripcion_portafolio_contenedor');

                    for(var e = 0; e < contenidos3D[i].logos.length; e++){

                        const logoPortafolio = document.createElement('img');
                        logoPortafolio.classList.add('logo_portafolio_wrapper');
                        logoPortafolio.setAttribute('src', contenidos3D[i].logos[e]);

                        logoDescripcion.appendChild(logoPortafolio);

                    }
                
                const parrafoDescripcion = document.createElement('h3');
                parrafoDescripcion.classList.add('parrafo_descripcion_portafolio');
                parrafoDescripcion.innerText = contenidos3D[i].descripcion;

            descripcionPortafolio.appendChild(tituloDescripcion);
            descripcionPortafolio.appendChild(logoDescripcion);
            descripcionPortafolio.appendChild(parrafoDescripcion);

        cartaPortafolio.appendChild(imagenPortafolio);
        cartaPortafolio.appendChild(descripcionPortafolio);
        cartaPortafolio.addEventListener('click', descripcionPortafolioMain);

        portafolioWarp.appendChild(cartaPortafolio);

    }

    portafolioWarp.classList.remove('inactive');

}

function descripcionPortafolioMain(event) {

    const botonAgregar = event.currentTarget;
    const indice = botonAgregar.getAttribute('card');

    portafolioDescripcion.innerHTML = ' ';

    const portafolioDetalle = document.createElement('div');
    portafolioDetalle.classList.add('portafolio_detalle');

        const detalleImgDiv = document.createElement('div');
        detalleImgDiv.classList.add('portafolio_detalle_img');

            const detalleImg = document.createElement('img');
            detalleImg.setAttribute('src', contenidos3D[indice].imagenes[0]);

        detalleImgDiv.appendChild(detalleImg);

        const seccion2 = document.createElement('div');
        seccion2.classList.add('portafolio_detalle_seccion_2');

            const iconoCerrado = document.createElement('img');
            iconoCerrado.setAttribute('src', './recursos/close_icon.png');
            iconoCerrado.classList.add('close_icon_portafolio');

            iconoCerrado.addEventListener('click', closeDescripcionPortafolio);

            const titulo = document.createElement('h2');
            titulo.classList.add('titulo_descripcion_portafolio_detalle');
            titulo.innerText = contenidos3D[indice].nombre;

            const logoDescripcion = document.createElement('div');
            logoDescripcion.classList.add('logos_descripcion_portafolio_contenedor_detalle');

                for(var e = 0; e < contenidos3D[indice].logos.length; e++){

                    const logoPortafolio = document.createElement('img');
                    logoPortafolio.classList.add('logo_portafolio_wrapper');
                    logoPortafolio.setAttribute('src', contenidos3D[indice].logos[e]);

                    logoDescripcion.appendChild(logoPortafolio);

                }

            const parrafoDescripcion = document.createElement('h3');
            parrafoDescripcion.classList.add('parrafo_descripcion_portafolio_detalle');
            parrafoDescripcion.innerText = contenidos3D[indice].descripcion;

            const seleccionarImg = document.createElement('div');
            seleccionarImg.classList.add('seleccionador_imagen_container');

                for(var i = 0; i < contenidos3D[indice].imagenes.length; i++){

                    if(contenidos3D[indice].logos[i] == contenidos3D[indice].logos[0]) {

                        const imgSeleccionar = document.createElement('img');
                        imgSeleccionar.classList.add('seleccionado');
                        imgSeleccionar.setAttribute('src', contenidos3D[indice].imagenes[i]);
                        imgSeleccionar.setAttribute('img', i);

                        imgSeleccionar.addEventListener('click', imgseleccion);

                        seleccionarImg.appendChild(imgSeleccionar);

                    } else {

                        const imgSeleccionar = document.createElement('img');
                        imgSeleccionar.setAttribute('src', contenidos3D[indice].imagenes[i]);
                        imgSeleccionar.setAttribute('img', i);

                        imgSeleccionar.addEventListener('click', imgseleccion);

                        seleccionarImg.appendChild(imgSeleccionar);

                    }

                } 

        seccion2.appendChild(iconoCerrado);
        seccion2.appendChild(titulo);
        seccion2.appendChild(logoDescripcion);
        seccion2.appendChild(parrafoDescripcion);
        seccion2.appendChild(seleccionarImg);

    portafolioDetalle.appendChild(detalleImgDiv);
    portafolioDetalle.appendChild(seccion2);

    portafolioDescripcion.appendChild(portafolioDetalle);

    function imgseleccion(event) {
        const botonImg = event.target;
        const index = botonImg.getAttribute('img');
    
        detalleImgDiv.innerHTML = ' ';
    
        const detalleImg = document.createElement('img');
        detalleImg.setAttribute('src', contenidos3D[indice].imagenes[index]);
    
        detalleImgDiv.appendChild(detalleImg);
    
        const todasLasImagenes = seleccionarImg.querySelectorAll('img');
        todasLasImagenes.forEach((img) => {
            img.classList.remove('seleccionado');
        });
    
        botonImg.classList.add('seleccionado');
    }
    

    portafolioDescripcion.classList.remove('inactive');

}

function portafolioVideo () {

    const is_mobileMnu_open = menuMobile.classList.contains('inactive');
    const is_mainCont_open = mainSector.classList.contains('inactive');
    const is_portafolio_open = portafolio.classList.contains('inactive');
    const is_sobreMi_open = sobreMi.classList.contains('inactive');
    const is_redesSociales_open = redesSociales.classList.contains('inactive');

    if(!is_sobreMi_open) {
        sobreMi.classList.add('inactive');
        inicioNav.classList.remove('bloquear');
    }
    if (!is_mobileMnu_open) {
        menuMobile.classList.add('inactive');
        menuMobileIcon.classList.remove('difuse');
        logoNav.classList.remove('difuse');
    }
    if(!is_mainCont_open) {
        mainSector.classList.add('inactive');
    }
    if(!is_portafolio_open) {
        portafolio.classList.add('inactive');
    }
    if(!is_redesSociales_open) {
        redesSociales.classList.add('inactive');
        redesSocialesNav.classList.remove('bloquear');
    }

    portafolioWarp.innerHTML = ' ';

    for(var i = 0; i < contenidosVideos.length; i++){

        const cartaPortafolio = document.createElement('div');
        cartaPortafolio.classList.add('carta_portafolio');
        cartaPortafolio.setAttribute('card', i);

            const imagenPortafolio = document.createElement('div');
            imagenPortafolio.classList.add('imagen_portafolio');

                const imagenPortafolioImg = document.createElement('img');
                imagenPortafolioImg.setAttribute('src', contenidosVideos[i].imagenes[0]);

            imagenPortafolio.appendChild(imagenPortafolioImg);

            const descripcionPortafolio = document.createElement('div');
            descripcionPortafolio.classList.add('descripcion_portafolio');

                const tituloDescripcion = document.createElement('h2');
                tituloDescripcion.classList.add('titulo_descripcion_portafolio');
                tituloDescripcion.innerText = contenidosVideos[i].nombre;

                const logoDescripcion = document.createElement('div');
                logoDescripcion.classList.add('logos_descripcion_portafolio_contenedor');

                    for(var e = 0; e < contenidosVideos[i].logos.length; e++){

                        const logoPortafolio = document.createElement('img');
                        logoPortafolio.classList.add('logo_portafolio_wrapper');
                        logoPortafolio.setAttribute('src', contenidosVideos[i].logos[e]);

                        logoDescripcion.appendChild(logoPortafolio);

                    }
                
                const parrafoDescripcion = document.createElement('h3');
                parrafoDescripcion.classList.add('parrafo_descripcion_portafolio');
                parrafoDescripcion.innerText = contenidosVideos[i].descripcion;

            descripcionPortafolio.appendChild(tituloDescripcion);
            descripcionPortafolio.appendChild(logoDescripcion);
            descripcionPortafolio.appendChild(parrafoDescripcion);

        cartaPortafolio.appendChild(imagenPortafolio);
        cartaPortafolio.appendChild(descripcionPortafolio);
        cartaPortafolio.addEventListener('click', descripcionVideoPortafolioMain);

        portafolioWarp.appendChild(cartaPortafolio);

    }

    portafolioWarp.classList.remove('inactive');

}

function descripcionVideoPortafolioMain(event) {

    const botonAgregar = event.currentTarget;
    const indice = botonAgregar.getAttribute('card');

    portafolioDescripcion.innerHTML = ' ';

    const portafolioDetalle = document.createElement('div');
    portafolioDetalle.classList.add('portafolio_detalle');

        const detalleImgDiv = document.createElement('div');
        detalleImgDiv.classList.add('portafolio_detalle_img');

            const ahref = document.createElement('a');
            ahref.setAttribute('href', contenidosVideos[indice].link);
            ahref.setAttribute('target', '_blank');

                const detalleImg = document.createElement('img');
                detalleImg.setAttribute('src', contenidosVideos[indice].imagenes[0]);

                const playBtn = document.createElement('img');
                playBtn.setAttribute('src', './recursos/play.svg');
                playBtn.classList.add('play_btn')

            ahref.appendChild(detalleImg);
            ahref.appendChild(playBtn);

        detalleImgDiv.appendChild(ahref);

        const seccion2 = document.createElement('div');
        seccion2.classList.add('portafolio_detalle_seccion_2');

            const iconoCerrado = document.createElement('img');
            iconoCerrado.setAttribute('src', './recursos/close_icon.png');
            iconoCerrado.classList.add('close_icon_portafolio');

            iconoCerrado.addEventListener('click', closeDescripcionPortafolio);

            const titulo = document.createElement('h2');
            titulo.classList.add('titulo_descripcion_portafolio_detalle');
            titulo.innerText = contenidosVideos[indice].nombre;

            const logoDescripcion = document.createElement('div');
            logoDescripcion.classList.add('logos_descripcion_portafolio_contenedor_detalle');

                for(var e = 0; e < contenidosVideos[indice].logos.length; e++){

                    const logoPortafolio = document.createElement('img');
                    logoPortafolio.classList.add('logo_portafolio_wrapper');
                    logoPortafolio.setAttribute('src', contenidosVideos[indice].logos[e]);

                    logoDescripcion.appendChild(logoPortafolio);

                }

            const parrafoDescripcion = document.createElement('h3');
            parrafoDescripcion.classList.add('parrafo_descripcion_portafolio_detalle');
            parrafoDescripcion.innerText = contenidosVideos[indice].descripcion;

            const seleccionarImg = document.createElement('div');
            seleccionarImg.classList.add('seleccionador_imagen_container');

                for(var i = 0; i < contenidosVideos[indice].imagenes.length; i++){

                    if(contenidosVideos[indice].logos[i] == contenidosVideos[indice].logos[0]) {

                        const imgSeleccionar = document.createElement('img');
                        imgSeleccionar.classList.add('seleccionado');
                        imgSeleccionar.setAttribute('src', contenidosVideos[indice].imagenes[i]);
                        imgSeleccionar.setAttribute('img', i);

                        imgSeleccionar.addEventListener('click', imgseleccion);

                        seleccionarImg.appendChild(imgSeleccionar);

                    } else {

                        const imgSeleccionar = document.createElement('img');
                        imgSeleccionar.setAttribute('src', contenidosVideos[indice].imagenes[i]);
                        imgSeleccionar.setAttribute('img', i);

                        imgSeleccionar.addEventListener('click', imgseleccion);

                        seleccionarImg.appendChild(imgSeleccionar);

                    }

                } 

        seccion2.appendChild(iconoCerrado);
        seccion2.appendChild(titulo);
        seccion2.appendChild(logoDescripcion);
        seccion2.appendChild(parrafoDescripcion);
        seccion2.appendChild(seleccionarImg);

    portafolioDetalle.appendChild(detalleImgDiv);
    portafolioDetalle.appendChild(seccion2);

    portafolioDescripcion.appendChild(portafolioDetalle);

    function imgseleccion(event) {
        const botonImg = event.target;
        const index = botonImg.getAttribute('img');
    
        detalleImgDiv.innerHTML = ' ';
    
        const detalleImg = document.createElement('img');
        detalleImg.setAttribute('src', contenidosVideos[indice].imagenes[index]);
    
        detalleImgDiv.appendChild(detalleImg);
    
        const todasLasImagenes = seleccionarImg.querySelectorAll('img');
        todasLasImagenes.forEach((img) => {
            img.classList.remove('seleccionado');
        });
    
        botonImg.classList.add('seleccionado');
    }
    

    portafolioDescripcion.classList.remove('inactive');

}

function portafolioProg () {

    const is_mobileMnu_open = menuMobile.classList.contains('inactive');
    const is_mainCont_open = mainSector.classList.contains('inactive');
    const is_portafolio_open = portafolio.classList.contains('inactive');
    const is_sobreMi_open = sobreMi.classList.contains('inactive');
    const is_redesSociales_open = redesSociales.classList.contains('inactive');

    if(!is_sobreMi_open) {
        sobreMi.classList.add('inactive');
        inicioNav.classList.remove('bloquear');
    }
    if (!is_mobileMnu_open) {
        menuMobile.classList.add('inactive');
        menuMobileIcon.classList.remove('difuse');
        logoNav.classList.remove('difuse');
    }
    if(!is_mainCont_open) {
        mainSector.classList.add('inactive');
    }
    if(!is_portafolio_open) {
        portafolio.classList.add('inactive');
    }
    if(!is_redesSociales_open) {
        redesSociales.classList.add('inactive');
        redesSocialesNav.classList.remove('bloquear');
    }

    portafolioWarp.innerHTML = ' ';

    for(var i = 0; i < contenidosProg.length; i++){

        const cartaPortafolio = document.createElement('div');
        cartaPortafolio.classList.add('carta_portafolio');
        cartaPortafolio.setAttribute('card', i);

            const imagenPortafolio = document.createElement('div');
            imagenPortafolio.classList.add('imagen_portafolio');

                const imagenPortafolioImg = document.createElement('img');
                imagenPortafolioImg.setAttribute('src', contenidosProg[i].imagenes[0]);

            imagenPortafolio.appendChild(imagenPortafolioImg);

            const descripcionPortafolio = document.createElement('div');
            descripcionPortafolio.classList.add('descripcion_portafolio');

                const tituloDescripcion = document.createElement('h2');
                tituloDescripcion.classList.add('titulo_descripcion_portafolio');
                tituloDescripcion.innerText = contenidosProg[i].nombre;

                const logoDescripcion = document.createElement('div');
                logoDescripcion.classList.add('logos_descripcion_portafolio_contenedor');

                    for(var e = 0; e < contenidosProg[i].logos.length; e++){

                        const logoPortafolio = document.createElement('img');
                        logoPortafolio.classList.add('logo_portafolio_wrapper');
                        logoPortafolio.setAttribute('src', contenidosProg[i].logos[e]);

                        logoDescripcion.appendChild(logoPortafolio);

                    }
                
                const parrafoDescripcion = document.createElement('h3');
                parrafoDescripcion.classList.add('parrafo_descripcion_portafolio');
                parrafoDescripcion.innerText = contenidosProg[i].descripcion;

            descripcionPortafolio.appendChild(tituloDescripcion);
            descripcionPortafolio.appendChild(logoDescripcion);
            descripcionPortafolio.appendChild(parrafoDescripcion);

        cartaPortafolio.appendChild(imagenPortafolio);
        cartaPortafolio.appendChild(descripcionPortafolio);
        cartaPortafolio.addEventListener('click', descripcionProgPortafolioMain);

        portafolioWarp.appendChild(cartaPortafolio);

    }

    portafolioWarp.classList.remove('inactive');

}

function descripcionProgPortafolioMain(event) {

    const botonAgregar = event.currentTarget;
    const indice = botonAgregar.getAttribute('card');

    portafolioDescripcion.innerHTML = ' ';

    const portafolioDetalle = document.createElement('div');
    portafolioDetalle.classList.add('portafolio_detalle');

        const detalleImgDiv = document.createElement('div');
        detalleImgDiv.classList.add('portafolio_detalle_img');

            const ahref = document.createElement('a');
            ahref.setAttribute('href', contenidosProg[indice].link);
            ahref.setAttribute('target', '_blank');

                const detalleImg = document.createElement('img');
                detalleImg.setAttribute('src', contenidosProg[indice].imagenes[0]);

                const playBtn = document.createElement('img');
                playBtn.setAttribute('src', './recursos/mas.svg');
                playBtn.classList.add('plus_btn')

            ahref.appendChild(detalleImg);
            ahref.appendChild(playBtn);

        detalleImgDiv.appendChild(ahref);

        const seccion2 = document.createElement('div');
        seccion2.classList.add('portafolio_detalle_seccion_2');

            const iconoCerrado = document.createElement('img');
            iconoCerrado.setAttribute('src', './recursos/close_icon.png');
            iconoCerrado.classList.add('close_icon_portafolio');

            iconoCerrado.addEventListener('click', closeDescripcionPortafolio);

            const titulo = document.createElement('h2');
            titulo.classList.add('titulo_descripcion_portafolio_detalle');
            titulo.innerText = contenidosProg[indice].nombre;

            const logoDescripcion = document.createElement('div');
            logoDescripcion.classList.add('logos_descripcion_portafolio_contenedor_detalle');

                for(var e = 0; e < contenidosProg[indice].logos.length; e++){

                    const logoPortafolio = document.createElement('img');
                    logoPortafolio.classList.add('logo_portafolio_wrapper');
                    logoPortafolio.setAttribute('src', contenidosProg[indice].logos[e]);

                    logoDescripcion.appendChild(logoPortafolio);

                }

            const parrafoDescripcion = document.createElement('h3');
            parrafoDescripcion.classList.add('parrafo_descripcion_portafolio_detalle');
            parrafoDescripcion.innerText = contenidosProg[indice].descripcion;

            const seleccionarImg = document.createElement('div');
            seleccionarImg.classList.add('seleccionador_imagen_container');

                for(var i = 0; i < contenidosProg[indice].imagenes.length; i++){

                    if(contenidosProg[indice].logos[i] == contenidosProg[indice].logos[0]) {

                        const imgSeleccionar = document.createElement('img');
                        imgSeleccionar.classList.add('seleccionado');
                        imgSeleccionar.setAttribute('src', contenidosProg[indice].imagenes[i]);
                        imgSeleccionar.setAttribute('img', i);

                        imgSeleccionar.addEventListener('click', imgseleccion);

                        seleccionarImg.appendChild(imgSeleccionar);

                    } else {

                        const imgSeleccionar = document.createElement('img');
                        imgSeleccionar.setAttribute('src', contenidosProg[indice].imagenes[i]);
                        imgSeleccionar.setAttribute('img', i);

                        imgSeleccionar.addEventListener('click', imgseleccion);

                        seleccionarImg.appendChild(imgSeleccionar);

                    }

                } 

        seccion2.appendChild(iconoCerrado);
        seccion2.appendChild(titulo);
        seccion2.appendChild(logoDescripcion);
        seccion2.appendChild(parrafoDescripcion);
        seccion2.appendChild(seleccionarImg);

    portafolioDetalle.appendChild(detalleImgDiv);
    portafolioDetalle.appendChild(seccion2);

    portafolioDescripcion.appendChild(portafolioDetalle);

    document.addEventListener('DOMContentLoaded', function () {
    
        const miDiv = portafolioDetalle;
           
        const windowHeight = window.innerHeight;
        
        const divHeight = miDiv.clientHeight;
        const topPosition = (windowHeight - divHeight) / 2;
        
        miDiv.style.top = topPosition + 'px';
        
    });

    function imgseleccion(event) {
        const botonImg = event.target;
        const index = botonImg.getAttribute('img');
    
        ahref.innerHTML = ' ';
    
        const detalleImg = document.createElement('img');
        detalleImg.setAttribute('src', contenidosProg[indice].imagenes[index]);

        const playBtn = document.createElement('img');
        playBtn.setAttribute('src', './recursos/mas.svg');
        playBtn.classList.add('plus_btn')
    
        ahref.appendChild(detalleImg);
        ahref.appendChild(playBtn);
    
        const todasLasImagenes = seleccionarImg.querySelectorAll('img');
        todasLasImagenes.forEach((img) => {
            img.classList.remove('seleccionado');
        });
    
        botonImg.classList.add('seleccionado');
    }
    
    portafolioDescripcion.classList.remove('inactive');

}

function closeDescripcionPortafolio() {

    portafolioDescripcion.classList.add('inactive');

}

function add_redesSociales_cont () {

    const is_mobileMnu_open = menuMobile.classList.contains('inactive');
    const is_mainCont_open = mainSector.classList.contains('inactive');
    const is_portafolio_open = portafolio.classList.contains('inactive');
    const is_sobreMi_open = sobreMi.classList.contains('inactive');
    const is_portafolios_open = portafolioWarp.classList.contains('inactive');
    const is_portafolio_descripcion_open = portafolioDescripcion.classList.contains('inactive');

    if(!is_sobreMi_open) {
        sobreMi.classList.add('inactive');
        inicioNav.classList.remove('bloquear');
    }
    if (!is_mobileMnu_open) {
        menuMobile.classList.add('inactive');
        menuMobileIcon.classList.remove('difuse');
        logoNav.classList.remove('difuse');
    }
    if(!is_mainCont_open) {
        mainSector.classList.add('inactive');
    }
    if(!is_portafolio_open) {
        portafolio.classList.add('inactive');
        portafolioNav.classList.remove('bloquear');
    }
    if(!is_portafolios_open) {
        portafolioWarp.classList.add('inactive');
        portafolioNav.classList.remove('bloquear');
    }
    if(!is_portafolio_descripcion_open){
        portafolioDescripcion.classList.add('inactive');
    }

    redesSociales.classList.remove('inactive');
    redesSocialesNav.classList.add('bloquear');

}