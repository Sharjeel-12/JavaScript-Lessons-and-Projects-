function Book(title,author,pages,read){
 this.author=author;
   this.pages=pages;
   this.read=read;
    this.info =()=>{
    return (`The name of the book is ${this.title}, It's author is ${this.author}, It has ${this.pages} pages and its status is: ${this.read}`);
   }
    }
    
    const TheHobbit=new Book("The Hobbit is Back!","Sharjeel",400,"read completely");
    TheHobbitInfo=TheHobbit.info()
    console.log(TheHobbitInfo);
    