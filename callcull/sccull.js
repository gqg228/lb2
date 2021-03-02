// vvod sobsna
function insert(number) {
    document.form.textview.value = document.form.textview.value + number
}


// уборка в комнате :V
function clean() {
    document.form.textview.value = ''
}


// бекскейп
function back(){
    var a =  document.form.textview.value
    document.form.textview.value = a.substring(0,a.length-1)
}



// решение
function ravno(){
    var a = document.form.textview.value
    if(a){
        document.form.textview.value = eval(a)
    }
}


let block = document.querySelectorAll('.check')

let text = document.getElementsByTagName('span')

let box = document.querySelectorAll('.ursa')

const line = document.querySelector('[maxLength="20"]')


const checklist = document.querySelector('[class="checklist"]')

let count = 4

line.addEventListener('keydown', function(event){
    if(event.keyCode===13){
        enterClick(line.value)
        line.value = ''
    }
})

function enterClick (line) {
    var div = document.createElement('div')

    var p = document.createElement('p')

    var input = document.createElement('input')

    var span = document.createElement('span')

    var img = document.createElement('img')

    div.className = 'list check'
    input.type = "checkbox"
    input.name = "check"
    input.className = "ursa"
    input.id = `${count}`
    input.setAttribute('onclick', 'checkboxClick(id)')
    span.innerHTML=line
    img.src = "x.png"
    img.alt = "img"


    
    img.addEventListener('click', function(){
        div.hidden = true
    })


    checklist.appendChild(div)
    div.appendChild(p)
    p.appendChild(input)
    p.appendChild(span)
    p.appendChild(img)

    count++

}

const checkboxClick = number => {
    text[number].style.color='grey'
    text[number].style.textDecoration = 'line-through'
    // box[number].style.display = 'none'
    
    // if(box[number].classList.contains('del')==false){
       
    //     box[number].classList.add('del');
    // }
}

const deleteString = number => {
    block[number].classList.add('del')
}

