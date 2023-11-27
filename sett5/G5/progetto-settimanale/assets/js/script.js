document.addEventListener("DOMContentLoaded", function () {
    // Obter elementos do DOM
    var header = document.querySelector(".menu");
    var buttonGet = document.getElementById("button-get");
    var sectionPrincipale = document.querySelector(".contenitore-secondario");
  
    // Obter a posição superior da seção principale
    var sectionPrincipaleTop = sectionPrincipale.offsetTop;
  
    // Adicionar um ouvinte de rolagem à janela
    window.addEventListener("scroll", function () {
      // Obter a posição de rolagem atual
      var scrollPosition = window.scrollY;
  
      // Verificar se a posição de rolagem ultrapassou a posição da seção principale
      if (scrollPosition >= sectionPrincipaleTop - 5) {
        // Aplicar as mudanças de estilo quando o header estiver próximo da seção principale
        header.style.background = "white";
        buttonGet.style.background = "#1a8917";
      } else {
        // Reverter as mudanças quando não estiver próximo da seção principale
        header.style.background = "#ffc017";
        buttonGet.style.background = "#191919";
      }
    });
  });