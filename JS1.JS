function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  const addButton = document.getElementById("add-row-button");
const tableBody = document.querySelector("tbody");

addButton.

addButton


add


addEventListener("click", function() {
  
 
const newRow = tableBody.insertRow();
  
  
  
 

  
const dateCell = newRow.insertCell();
  
 
const destinationCell = newRow.insertCell();
  
 
const activitiesCell = newRow.insertCell();
  
  dateCell.
  
  dateCell

  
  date

  
 

  
innerText = "Thursday, April 6th";
  destinationCell.
  destinationCell

  destination

 
innerText = "Miami";
  activitiesCell.
  activitiesCell

  activities

 
innerText = "Beach, Little Havana, Vizcaya Museum and Gardens";
});







