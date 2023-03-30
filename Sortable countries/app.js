const countries = [
    {
        name: "Russia",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Russia.jpg"
    },

    {
        name: "Canada",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"
    },

    {
        name: "China",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/China.jpg"
    },

    {
        name: "United States",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/United_States.jpg"
    },

    {
        name: "Brazil",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"
    },

    {
        name: "Australia",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Australia.jpg"
    },

    {
        name: "India",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
    },

    {
        name: "Argentina",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg"
    },

    {
        name: "Kazakhstan",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Kazakhstan.jpg"
    },

    {
        name: "Algeria",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags96/Algeria.jpg"
    },

];

const countryContainer = document.querySelector(".countries-container")
//shuffle the country list
function shuffleCountries() { 
    return countries.sort(()=>Math.random()-0.5);
 } 

 let gameCountries = shuffleCountries()

//create the country list dynamically
function createCountryList(){
        [...gameCountries]
        .forEach((person, index) => {
            const countryList = document.createElement("div");
            countryList.classList.add("country")
            countryList.innerHTML = `<img src="${person.flag}" alt="flag" class="country-flag">
                <div class="the-draggables" draggable="true">
                <p class="country-name">${person.name}</p>
                <i class="fas fa-grip-lines"></i>
                </div>`

            countryContainer.appendChild(countryList)   
        })

        addEventListeners(); 
}

createCountryList();

//drag and drop
function addEventListeners(){
    const draggables = document.querySelectorAll("the-draggables")
    const country = document.querySelectorAll(".country")

    draggables.forEach(function(draggable){
    draggable.addEventListener("dragstart", dragStart)

    function dragStart(){
        item.classList.add("dragging")
        console.log("drag")
    }  

    dragStart()
})

/*country.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });*/

}





