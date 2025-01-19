

import HomeData from "./HomeData.html"
// "document" can beaccessed only in index.js 
function createHomeTab(content,document){
    if(content){
        console.log(HomeData);
        content.innerHTML=HomeData;
    
    
}
}

export default createHomeTab;
