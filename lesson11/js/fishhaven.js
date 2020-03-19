onload = function(){
    document.getElementById("lastModified").innerHTML = formatDate(new Date());
    document.getElementById("copyright-year").innerHTML = new Date().getFullYear();   
    checkBannerDisplay();          
  }
  
  function formatDate(date) {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    const dayNames = [
        "Sunday", "Monday", "Tuesday", 
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    const dayOfWeek = date.getDay();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return dayNames[dayOfWeek] + ", " + day + " " + monthNames[monthIndex] + " " + year;
  }
  
  function checkBannerDisplay(){
    const date = new Date();
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 2)
    {
      document.querySelector(".banner").classList.toggle("show");
    }
  }