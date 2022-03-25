const list_items = document.querySelectorAll('.list-item')
const lists = document.querySelectorAll('.list')

let dragged_item = null

for(let i = 0; i < list_items.length; i++){
    const item = list_items[i]
    item.addEventListener('dragstart', function(){
        console.log('dragstart')
        dragged_item = item
        setTimeout(() => {
            item.style.display = 'none'
        }, 0);        
    })

    item.addEventListener('dragend', function(){
        console.log('dragend')
        setTimeout(function(){
            dragged_item.style.display = 'block'
            dragged_item = null
        }, 0)
    })
    for(let j = 0; j < lists.length; j++){
        const list = lists[j]
        list.addEventListener('dragover', (e)=>{
            e.preventDefault()
        })
        list.addEventListener('dragenter', (e)=>{
            e.preventDefault()
            // this.style.backgroundColor = 'rgba(169,169,169,1)'
            // this.style.backgroundColor = 'rgba(128,128,128,1)'
        })
        list.addEventListener('dragleave', (e)=>{
            // this.style.backgroundColor = 'rgba(128,128,128,1)'
        })
        list.addEventListener('drop', function(e){
            this.append(dragged_item)
            // this.style.backgroundColor = 'rgba(128,128,128,1)'
            // this.style.backgroundColor = 'rgba(169,169,169,1)'
        })
    }
}