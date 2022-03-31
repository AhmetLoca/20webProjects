/*
Resize Observer API:

Bir şey yeniden boyutlandığında 
bunu yakalabileceğiniz
ve ona göre işlem yapabileceğiniz bir API.

Bir etiketin resize olup olmadığını 
takip etmek için Resize Observer kullanılıyor.

*/

const textareas = document.querySelectorAll('textarea')

const resizeObserver = new ResizeObserver(entries => {
    for ( let entry of entries){
        console.log('Height', entry.contentRect.height)
    }
})

textareas.forEach(textarea => resizeObserver.observe(textarea))
