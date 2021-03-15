const inputBox = document.querySelector('.InputField input');
const addBtn = document.querySelector('.InputField button');
const todoList = document.querySelector('.todoList');
const pendtask = document.querySelector('.pendtask');
const delBtnAll = document.querySelector('.footer button');



inputBox.addEventListener('keyup', addToDo);
addBtn.addEventListener('click', clickToDo);
delBtnAll.addEventListener('click', delAll)
  
   function addToDo(){
      let userData = inputBox.value;//getting user enter value
      if(userData.trim() !=0){;// if user values arent only spaces
         addBtn.classList.add('active');
      }else{

            addBtn.classList.remove('active');
      }
   }


//if user click on the add button

function clickToDo(){
      let userData = inputBox.value;//getting user enter value
      let getLocalStorage = localStorage.getItem('New Todo');
      if(getLocalStorage == null){ // if localstorage is null

         listArr = []; // creating blank array

      }else{
            listArr = JSON.parse(getLocalStorage) // transforming into js object
      }
      
      listArr.push(userData)// pushing or adding user data
      localStorage.setItem('New Todo',JSON.stringify(listArr)); // transforming js into a json string
      showTasks()//calling showtask function
   }

function showTasks(){
   let getLocalStorage = localStorage.getItem('New Todo');// gettin localstorage
   if(getLocalStorage == null){ // if localstorage is null

      listArr = []; // creating blank array

   }else{
         listArr = JSON.parse(getLocalStorage) // transforming into js object
         
   }
   const pendtask = document.querySelector('.pendtask');
  pendtask.textContent = listArr.length;
  if(listArr>0){
     delBtnAll.classList.add('active')
  }else{
           
         delBtnAll.classList.add('active')
  } 
  let newLiTag = "";
   listArr.forEach((element,index) => {
       newLiTag += `<li>${element}<span onclick="deleteTask(${index})"; ><i class='fa fa-trash'></i></span></li>`;// adding new tag li inside todoList
   });
   todoList.innerHTML=newLiTag;
   inputBox.value = '';
}
     


function deleteTask(index){

   let getLocalStorage = localStorage.getItem('New Todo');// gettin localstorage
   listArr = JSON.parse(getLocalStorage);//delete or remove particular index li
   listArr.splice(index,1);
   // after remove the li again update the local storage
   localStorage.setItem('New Todo',JSON.stringify(listArr)); // transforming js into a json string
   showTasks()

}
   

// delete all button

function delAll(){

    listArr=[]; //list an array
      // after remove the li again update the local storage
   localStorage.setItem('New Todo',JSON.stringify(listArr)); // transforming js into a json string
   showTasks()

}