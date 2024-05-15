let todoList= [];
displayItems();
function AddPressed()
{
  let items=document.querySelector('#todo-items');
  let dates=document.querySelector('#dateElement');
  let item_val=items.value;
  let date_val=dates.value;
  //todoList=JSON.parse(localStorage.getItem('items'))|| [];
  todoList.push({item: item_val,dueDate: date_val});
  localStorage.setItem('items',JSON.stringify(todoList));
  items.value='';
  dates.value='';
  displayItems();
}
function displayItems(){
let displayContainer=document.querySelector('#todo-container');
let newHtml='';
todoList=JSON.parse(localStorage.getItem('items'))|| [];
for(let i=0;i<todoList.length;i++)
  {
    let {item,dueDate}=todoList;
    newHtml+=`
    <span>${todoList[i].item}</span>
    <span>${todoList[i].dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);
    localStorage.setItem('items',JSON.stringify(todoList));
    displayItems();">Delete</button>
    `
  }
  displayContainer.innerHTML=newHtml;
}