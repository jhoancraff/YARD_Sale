const emailDespiegue = document.querySelector('#despliegue')
const desktopMenu = document.querySelector('.desktop-menu ')
const body = document.querySelector('.cuerpo')
const menuIconoMobile = document.querySelector('.menu')
const categoriaMobile = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardProduct = document.querySelector('.cards-container')

emailDespiegue.addEventListener('click', toggleDesktopMenu)
menuIconoMobile.addEventListener('click', toogleCtegorias)
menuCarritoIcon.addEventListener('click', toogleCarrito)


function toggleDesktopMenu(){
    const isDesktopMenuClose = aside.classList.contains('inactiva')
    if (!isDesktopMenuClose){
        aside.classList.add('inactiva')
    }
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

    aside.classList.toggle('inactiva')

   
    
}



const productoLista = [];
productoLista.push({
    nombre: 'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productoLista.push({
    nombre: 'Carro',
    precio: 11120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
})
productoLista.push({
    nombre: 'Moto',
    precio: 1932,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
})


function renderFuntion(lista){
    for(producto of lista){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
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
