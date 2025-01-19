

import ContactData from "./ContactData.html"


// "document" can beaccessed only in index.js 
function createContactTab(content,document){
    if(content){
        content.innerHTML=ContactData;
        console.log(ContactData);
    }
    
    
}
export default createContactTab;