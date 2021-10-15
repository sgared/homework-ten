
function initLIsteners(){
     $("nav .links a").click(function(e){
         //this stores the id from the anchor tag
         let aID = e.currentTarget.id;
         let contentID = aID + "Content";
        
         MODEL.changePageContent(contentID)
    
        
     });
}

$(document).ready(function(){
          initLIsteners();
          // our page loads right off 
        MODEL.changePageContent("homeContent");
          

});