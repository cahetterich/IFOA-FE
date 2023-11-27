document.addEventListener("DOMContentLoaded", function () {
   
    var header = document.querySelector(".menu");
    var buttonGet = document.getElementById("button-get");
    var sectionPrincipale = document.querySelector(".contenitore-secondario");
  
    
    var sectionPrincipaleTop = sectionPrincipale.offsetTop;
  
    
    window.addEventListener("scroll", function () {
      
      var scrollPosition = window.scrollY;
  
      if (scrollPosition >= sectionPrincipaleTop - 5) {
        
        header.style.background = "white";
        buttonGet.style.background = "#1a8917";
      } else {
        
        header.style.background = "#ffc017";
        buttonGet.style.background = "#191919";
      }
    });
  });

