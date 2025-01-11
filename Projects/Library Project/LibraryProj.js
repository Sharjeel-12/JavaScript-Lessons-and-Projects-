const myLibrary=[];

function refreshAndLoop() {
 
 refresh(); 
 looping(myLibrary);

 // Reattach event listeners to the new buttons
 let delbtns = document.querySelectorAll(".delBtn");
 delbtns.forEach((button, index) => {
 button.removeEventListener("click", handleDelete); 
 button.addEventListener("click", handleDelete); 
 });
 let stBtns=document.querySelectorAll(".statusBtn");
 let newStatus=document.querySelectorAll(".newStatus");
 let upBtns=document.querySelectorAll(".upBtn");
 let updatedInputs=document.querySelectorAll(".newStatus");
 stBtns.forEach((stBtn,ind)=>{
stBtn.addEventListener("click",(event)=>{

 console.log("HEllo");
if (newStatus[ind].style.display=="none" && upBtns[ind].style.display=="none"){
newStatus[ind].style.display="inline";
upBtns[ind].style.display="inline";
}
 else{
 newStatus[ind].style.display="none";
upBtns[ind].style.display="none";

 }
 })
 })
 upBtns.forEach((upBtn,index)=>{

 upBtn.removeEventListener("click",updateStatus);
upBtn.addEventListener("click",updateStatus);
Book.prototype.upStat=()=>{this.read=updatedInputs[index].value;
 }
})
 
}
function updateStatus(event){
 let updatedInputs=document.querySelectorAll(".newStatus");
let index=event.target.getAttribute("data-index");
 // console.log(updatedInputs[index].value);
myLibrary[index].read=updatedInputs[index].value;

 refreshAndLoop();
}

 


function handleDelete(event) {
 let index = event.target.getAttribute("data-index");
console.log(index)
 myLibrary.splice(index, 1); // Delete the book from myLibrary
 refreshAndLoop(); // Update and reattach listeners
}



function Book(title,author,pages,read){
 this.title=title;
this.author=author;
 this.pages=pages;
 this.read=read;
 this.info =()=>{
return (`The name of the book is ${this.title}, It's author is ${this.author}, It has ${this.pages} pages and its status is: ${this.read}`);
}
}


function addBooktoLib(title,author,pages,read){
const book=new Book(title,author,pages,read);
 myLibrary.push(book);
return myLibrary;
}
function refresh(){
document.getElementById("CardContainer").innerHTML="";
}
function looping(myLibrary){
myLibrary.forEach((element,index)=> {

 document.getElementById("CardContainer").innerHTML +=`<ul id="Book${index}" class="Book"><li><span>Book Name:</span>${element.title}</li><li><span>Book Author:</span>${element.author}</li><li><span>Book Pages:</span>${element.pages}</li><li><span>Book Status:</span>${element.read}</li><li><span>Book Info:</span>${element.info()}</li></ul><button  id="DeletetheBook${index}" class="delBtn" data-index="${index}">Delete this Book</button> <button   class="statusBtn" data-index="${index}">Change the Status</button> <input type="text" class="newStatus" value="hi" name="newStatus"  placeholder="Enter the Status" data-index="${index}"><button   class="upBtn" data-index="${index}">Update</button>`
 });

 }




lib=addBooktoLib("The Hobbit is Back!","Sharjeel",400,"read completely");
lib=addBooktoLib("Mechanics","Sharjeel",300,"not read completely");

looping(myLibrary);

let BookAddBtn=document.getElementById("bookAdder");
let BookForm=document.getElementById("BookForm");
let AddBook=document.getElementById("AddtheBook");

BookAddBtn.addEventListener("click",()=>{
if (BookForm.style.display=="none"){
 BookForm.style.display="block";
}
else{
 BookForm.style.display="none";
 }
})




let myForm=document.getElementById("BookForm");
myForm.addEventListener("submit",(event)=>{

 var title="";var author=""; var pages=0;var read="";

title=myForm.elements["title"].value;
author=myForm.elements["author"].value;
pages=myForm.elements["pages"].value;
read=myForm.elements["status"].value;

const book=new Book(title,author,pages,read);
 myLibrary.push(book);
 event.preventDefault();
 console.log(lib);
refresh();
looping(myLibrary);
refreshAndLoop();
});

refreshAndLoop();