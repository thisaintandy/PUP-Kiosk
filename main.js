document.addEventListener('DOMContentLoaded', function() {
    var areas = document.querySelectorAll('map area');

    areas.forEach(function(area) {
        // Add a mouseover event listener to each <area> element
        area.addEventListener('mouseover', function() {
            var detailsDiv = document.getElementById('details');
            var areaName = area.getAttribute('alt');
            var areaDescription = area.getAttribute('data-description');
            var areaImage = area.getAttribute('data-img');

            var areaNameElement = document.getElementById('area-name');
            var imageElement = document.getElementById('area-image');
            var descriptionElement = document.getElementById('description');

            areaNameElement.textContent = areaName;
            imageElement.src = areaImage;
            descriptionElement.textContent = areaDescription;

            detailsDiv.style.display = 'block'; // Show details div
        });

        // Add a mouseout event listener to each <area> element
        area.addEventListener('mouseout', function() {
            var detailsDiv = document.getElementById('details');
            detailsDiv.style.display = 'none'; // Hide details div
        });
    });
});

// Function to show area information directly
// Update details div with provided information
function showSceneryBox(imgSource, heading, description) {
    let dis = document.getElementById("details");
    dis.innerHTML = "<img src='" + imgSource + "' alt='" + heading + "'>";
    dis.innerHTML += "<h3>" + heading + "</h3>";
    dis.innerHTML += "<p>" + description + "</p>";
}
