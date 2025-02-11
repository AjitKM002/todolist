let add=()=>{
    let data=document.getElementById('taskInput').value;
    if(data==""){
        alert("Empty input value")
        return
    }

    setData(data)
    todolist()
}

let setData=(item)=>{
    if(getData(item)){
        alert("Item already in list")
    }
    else{
        let newData=getData()||[]
        newData.push(item)
        localStorage.setItem("todolist",JSON.stringify(newData))
    }
}

let getData=(item=null)=>{
    let storeData=JSON.parse(localStorage.getItem("todolist")||'[]')
    if(item){
        return storeData.indexOf(item)!==-1
    }
    return storeData
}


let todolist=()=>{
    let html=``
    let data=getData()
    console.log(data)
    data.forEach((value,index) => {
        html+=`<li>${value}<button onClick="remove(${index})">Remove</button></li>`
    });
    document.getElementById('todo-item').innerHTML=html;
}

let remove=(index)=>{
    let data=getData()
    data.splice(index,1)
    localStorage.setItem("todolist",JSON.stringify(data))
    todolist()
}