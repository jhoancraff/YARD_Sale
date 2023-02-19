const emailDespiegue = document.querySelector('#despliegue')
const desktopMenu = document.querySelector('.desktop-menu ')
const body = document.querySelector('.cuerpo')
const menuIconoMobile = document.querySelector('.menu')
const categoriaMobile = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardProduct = document.querySelector('.cards-container')
const closeAside = document.querySelector('.porfavor')


emailDespiegue.addEventListener('click', toggleDesktopMenu)
menuIconoMobile.addEventListener('click', toogleCtegorias)
menuCarritoIcon.addEventListener('click', toogleCarrito)
closeAside.addEventListener('click', closeAsideCarrito)


function toggleDesktopMenu(){
    const isDesktopMenuClose = aside.classList.contains('inactiva')
    if (!isDesktopMenuClose){
        aside.classList.add('inactiva')
    }

    if (!isDesktopMenuClose){}
    desktopMenu.classList.toggle('inactiva')
    
    
}

function toogleCtegorias(){
    const isAsideClosed = aside.classList.contains('inactiva')
    if(!isAsideClosed){
        aside.classList.add('inactiva')
    }

    categoriaMobile.classList.toggle('inactiva')
}

function toogleCarrito(){
    const isCarritoClosed = menuCarritoIcon.classList.contains('inactiva')
    
    if (!isCarritoClosed){
        categoriaMobile.classList.add('inactiva')
    }
    if(!isCarritoClosed){
        desktopMenu.classList.add('inactiva')
    }
    if (!isCarritoClosed){
        closeAside.classList.add('inactiva')
    }

    aside.classList.toggle('inactiva')
    
   
    
}

function openProductAside(){
    
    
    closeAside.classList.remove('inactiva')
    
}

function closeAsideCarrito(){
    const isAsideClosed = aside.classList.contains('inactiva')
    if (!isAsideClosed){
        aside.classList.add('inactiva')
    }
    

    closeAside.classList.add('inactiva')
}





const productoLista = [];
productoLista.push({
    nombre: 'Bike',
    precio: 120,
    imagen: '/logos/D_NQ_NP_786773-MLV45673700255_042021-V.jpg'

})
productoLista.push({
    nombre: 'Car',
    precio: 11120,
    imagen: './logos/corolla-2020-1-3.png'
    
})
productoLista.push({
    nombre: 'Motocycle',
    precio: 1932,
    imagen: '/logos/Moto-Fratelli-FS-110-Semi-automatica-1.jpg'
    
})


function renderFuntion(lista){
    for(producto of lista){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        productCard.addEventListener('click', openProductAside)
    
        const img = document.createElement('img')
        img.setAttribute('src', producto.imagen )
        
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const cajaDiv = document.createElement('div')
    
        const productName = document.createElement('p')
        productName.innerText = producto.nombre
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + producto.precio
    
        const figure = document.createElement('figure')
    
        const imgFigureCarrito = document.createElement('img')
        imgFigureCarrito.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        figure.appendChild(imgFigureCarrito)
    
        cajaDiv.appendChild(productName)
        cajaDiv.appendChild(productPrice)
    
        productInfo.appendChild(cajaDiv)
        productInfo.appendChild(figure)
    
        productCard.appendChild(productInfo)
        
        productCard.appendChild(img)
    
        cardProduct.appendChild(productCard)
        
}


    
}

renderFuntion(productoLista)
