var toDoList = JSON.parse(localStorage.getItem('ListItem')) || [];

var btn = document.querySelector('.btnIn');
var Do = document.querySelector('.toDo');
Do.addEventListener('click',deleteFun,false);
btn.addEventListener('click',addFun,false);

ListToDo(toDoList);
//增加list
function addFun(){
  var todo = document.querySelector('.todoText').value;
  var list = {
    content :todo
  }
  toDoList.push(list);
  ListToDo(toDoList);
  localStorage.setItem('ListItem',JSON.stringify(toDoList));
  document.querySelector('.todoText').value = '';
}


function ListToDo(items) {
  var str='';
  for(var i=0;i<items.length;i++)
  {
     str+='<li><a href="*" data-num="'+i+'">刪除</a><span>'+items[i].content+'</span></li>'; 
  }
  Do.innerHTML = str;
}
//刪除List
function deleteFun(e){
    e.preventDefault();
    toDoList.splice(e.target.dataset.num,1);
    ListToDo(toDoList); 
    localStorage.setItem('ListItem',JSON.stringify(toDoList));
}