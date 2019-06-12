
 
  var images=["images/camera.jpg","images/drone.jpg","images/mobile.jpg","images/computer.jpg","images/laptops.jpg"]; //<!-- images to slide -->
    var i=0;
   // <!-- function to slide image-->
    function changeImage(){

      document.getElementById("slideimage").src=images[i];
      if(i<(images.length-1)){
        i++;
      }
      else{
        i=0;
      }
    }
    setInterval(changeImage,2000)  //<!-- setting time interval of slide show -->
    
