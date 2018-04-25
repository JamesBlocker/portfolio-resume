$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;

        document.querySelector(hash).scrollIntoView({ 
            behavior: 'smooth',
            block :'start' 
          });

      } 
    });
  });