
  screen=document.querySelector("h4")
  observer = new IntersectionObserver(function(test)
  {
     
      if(test[0].intersectionRatio>0)
      {
        test[0].target.style.opacity ="1";
        document.querySelector("h5").style.opacity="1"
        document.querySelector(".editor").style.opacity="1"
       // document.querySelector(".second_page").style.color="green"
//document.querySelector(".first_page").style.color="white"
       document.querySelector(".second_page").style.color="green"
       document.querySelector(".first_page").style.color="white"
        
      
      }
      else
      {test[0].target.style.opacity ="0";
      document.querySelector("h5").style.opacity="0"
      document.querySelector(".editor").style.opacity="0"
    document.querySelector(".second_page").style.color="white"
     document.querySelector(".first_page").style.color="green"

      }
  })
   observer.observe(screen)