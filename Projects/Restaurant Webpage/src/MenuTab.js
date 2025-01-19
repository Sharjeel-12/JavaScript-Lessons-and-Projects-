

import MenuData from "./MenuData.html"
// "document" can beaccessed only in index.js 
function createMenuTab(content,document){
    if(content){
        content.innerHTML=MenuData;
        console.log(MenuData);
    }
    
    
}

export default createMenuTab;