
  screen=document.querySelector("h4")
  observer = new IntersectionObserver(function(test)
  {
     
      if(test[0].intersectionRatio>0)
      {
        test[0].target.style.opacity ="1";
        document.querySelector("h5").style.opacity="1"
        document.querySelector(".editor").style.opacity="1"
      
      }
      else
      {test[0].target.style.opacity ="0";
      document.querySelector("h5").style.opacity="0"
      document.querySelector(".editor").style.opacity="0"

      }
  })
   observer.observe(screen)