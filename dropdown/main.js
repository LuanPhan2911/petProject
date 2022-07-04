let arrDropdown= Array.from(document.querySelectorAll('.dropdown'));
//console.log(arrDropdown);
arrDropdown.forEach((items)=>{
    let btn= items.querySelector('.btn-dropdown');
    btn.addEventListener('click',(event)=>{
        
       if(items.classList.value.indexOf('open')===-1){
           items.classList.add('open');
       }else{
           items.classList.remove('open');
       }
    })
})