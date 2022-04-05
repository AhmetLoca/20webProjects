/*
    Öncelikle oyunumuz önce X sonra O şeklinde iki
    taraflı olduğu için her rant'a bir taraf tek hamle yapacak.
    Dolayısıyla oyunumuz hangi tarafta olduğunu belirten bir
    değişken belirtelim.
    
    Skoru tuttuğumuz bir değişkenimiz olacak.

    Oyun bitti mi bitmedi mi bunu bulan bir fonksiyona 
    ihtiyacımız var.

    Her tıkladığımızda X'i ya da O'yu yazdıran bir
    fonksiyonumuzun olması lazım.
*/


class Game {
    constructor(document){
        this.turn = "X" //X ile başlayalım.
        this.document = document

        this.document.querySelectorAll(".tile").forEach(tile  => {
            tile.addEventListener('click', this.drawTile(tile))
        });
    }


    nextTurn(){                     //if    else
        this.turn = this.turn === 'X' ? 'O' : 'X'
    }


    drawTile(element){

    }

}