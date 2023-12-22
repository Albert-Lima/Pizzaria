var bttShowCardapio = document.querySelector('#ShowCardapio')
var bttCloseCardápio = document.querySelector('#bttCloseCardápio')
var BttRedCard = document.querySelector('#BttRedCard')
var Cardapio = document.querySelector('#cardapio')
var Opções = document.querySelector('#Opções')
var LinhaBase = document.querySelector('#Especiais')

bttShowCardapio.addEventListener('click', ()=>{
    Cardapio.classList.toggle('Cardápio1-1')
    Cardapio.classList.toggle('Cardápio1-2')

    Opções.classList.toggle('Opções1')
    Opções.classList.toggle('Opções2')

    bttShowCardapio.classList.toggle('ShowCardapio1')
    bttShowCardapio.classList.toggle('ShowCardapio2')

    BttRedCard.classList.toggle('BttRedCard1')
    BttRedCard.classList.toggle('BttRedCard2')

    var elementoRect1 = LinhaBase.getBoundingClientRect()
    var centerY1 = elementoRect1.top + elementoRect1.height/ 2 - window.innerHeight/ 2
    window.scrollTo({
        top: centerY1 + window.scrollY,
        behavior: 'smooth'
    })
})

bttCloseCardápio.addEventListener('click', ()=>{
    Cardapio.classList.toggle('Cardápio1-2')
    Cardapio.classList.toggle('Cardápio1-1')

    Opções.classList.toggle('Opções2')
    Opções.classList.toggle('Opções1')

    bttShowCardapio.classList.toggle('ShowCardapio2')
    bttShowCardapio.classList.toggle('ShowCardapio1')

    BttRedCard.classList.toggle('BttRedCard2')
    BttRedCard.classList.toggle('BttRedCard1')
})