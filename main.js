import {data } from './users.js'

let ListEl = document.getElementById('blok')
let sortBtn1=document.getElementById('sort1')
let sortBtn=document.getElementById('sort')
let filterBtn =document.getElementById('filter')

let selectbtn=document.getElementById('select')

let searchInput=document.getElementById('search-input')
let searchbtn=document.getElementById('search-btn')

searchbtn.addEventListener('click',()=>{
    let newarr=[]
    for(let i=0;i<data.length;i++){
      if( data[i].text.includes(searchInput.value)) newarr.push(data[i])
    }
    render(ListEl,newarr)
})

selectbtn.addEventListener('change',(e)=>{
    let filterd= data.filter(el=>el.priority== e.target.value)
    render(ListEl,filterd)
})


sortBtn.addEventListener('click',()=>{
    let sorted= data.sort((a,b)=>{
        return a.name.localeCompare(b.name)
    })
    render(ListEl,sorted)
})

sortBtn1.addEventListener('click',()=>{
    let sorted1= data.sort((a,b)=>{
        return b.name.localeCompare(a.name)
    })
    render(ListEl,sorted1)
})



function render(list,data){
   
    ListEl.innerHTML = ''

    data.forEach(el => {
        let  cardEl  = document.createElement('div')  
    cardEl.className = 'card'
    
    let imgEl=document.createElement('img')
    imgEl.className='card-img'
    imgEl.src=el.ava 

    let titleEl = document.createElement('h3')
    titleEl.textContent=el.text
    titleEl.className='titleel'
    
    
    let nameEl =document.createElement('h3')
    nameEl.textContent = el.name
    nameEl.className='nameel'    
    


    let dayEl =document.createElement('h3')
    dayEl.textContent = el.time

    let btnEl = document.createElement('button')
    btnEl.textContent=el.priority
    btnEl.className='btn-pri'

    cardEl.append(imgEl, titleEl, nameEl, dayEl,btnEl)

    list.append(cardEl)

    });
    

    
}

render(ListEl,data)