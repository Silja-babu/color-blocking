/*const boxEl = document.querySelectorAll('.box-make')
boxEl.forEach( bg =>
    bg.addEventListener('click',()=>{
        bg.classList.add('colour-box')
        
    })
    
)*/


//when i click any of the any of the cube it tured to red and its horizontal and veritical
//boxes corresponds to the clickedcube it's tured to grey


const boxEl = document.querySelectorAll('.box-make')
const numofcolumn = 8
//console.log(boxEl)
let col;
let row;
boxEl.forEach((bg,idx)=>{
    bg.addEventListener('click',()=>{
        col = (idx%numofcolumn)+1
        row = Math.floor(idx/numofcolumn)+1
      //  console.log(idx%numofcolumn)
      //  console.log(idx/numofcolumn)
      //  console.log(row)
      //  console.log(`cliked ${row} and ${col}`)

        bg.classList.add('colour-box')
        columncheck(col,row,bg)
    })
})

function columncheck(clickedcol,clickedrow,clickedbox){
    boxEl.forEach((bg,idx)=>{
        col =(idx%numofcolumn)+1
        row = Math.floor(idx/numofcolumn)+1
        if((col===clickedcol || row===clickedrow || (row-col)===(clickedrow-clickedcol) || (row+col)===(clickedrow+clickedcol)) && bg !== clickedbox){
            bg.classList.add('uncolour-box')
            //console.log(`${row}and${col}`)
            if(bg.classList.contains('colour-box') || bg.classList.contains('uncolour-box')){
                bg.classList.add("disabled")
            }
        }
      //  console.log(`${row}=${col}`)
        
    })
}


