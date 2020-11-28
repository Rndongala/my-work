// Function to get the data
d3.json("../Data/scraped_data.json").then((scraped_data) => {
    var players_data = scraped_data[0]["players_data"];
    console.log(players_data.length)
    var playersdataslice = players_data.slice(0, 10)
    for (i = 0; i < playersdataslice.length; i++) {
        // console.log(i)
        var players_name = playersdataslice[i]["name"]
        console.log(players_name)

    };

    var tableData = players_name;

    var button = d3.select("#selDataset");
    var form = d3.select("form");

    button.on("click", thatclick);
    form.on("submit", thatclick);

    function thatclick() {
        d3.event.preventDefault();
        const nametofilter = d3.select("#name").property("value");
        var results = tableData.filter((name2) => name2['name'] == nametofilter);

        renderTable(results);
    }   

    function renderTable() {
        var tbody = d3.select("tbody");
        tbody.html("");
        table.forEach((PlayerNames) => {
            console.log(PlayerNames);
            var row = tbody.append("tr");
            PlayerNames.forEach(name) {
                var cell = row.append("td");
                cell.text(name);
                console.log(name)
            };
        });
    }
});

renderTable(players_name);
// getDemonInfo();


// Map objet
//  const API_KEY = "pk.eyJ1IjoiZGF2aWQtc2VnZXIiLCJhIjoiY2toN3Z2dmEyMDM4czMwcWRpc29wdHpuNiJ9.Z1QpGUb7r4cyAWdjXB2NGQ";
// var myMap = L.map("map", {
//     center: [37.09, -95.71],
//     zoom: 5
// });
// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
// }).addTo(myMap);
// // Add a tile layer
// // L.tileLayer("https://api.mapbox.com/styles/v4/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
// //     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
// //     tileSize: 512,
// //     maxZoom: 18,
// //     zoomOffset: -1,
// //     id: "mapbox/streets-v11",
// //     accessToken: API_KEY
// // }).addTo(myMap);

// // An array containing each coumtries names and location
// var countries = [{
//         location: [48.52, 2.2],
//         name: "France",

//     },
//     {
//         location: [-15.47, -47.55],
//         name: "Brasil",

//     },
//     {
//         location: [50.5, 4.2],
//         name: "Belgium",

//     },
//     {
//         location: [51.3, -0.1],
//         name: "United kingdom",

//     },
//     {
//         location: [51.5, 0.01],
//         name: "United kingdom",

//     },
//     {
//         location: [52.31, 13.24],
//         name: "Germany",

//     },
//     {
//         location: [14.4, -17.26],
//         name: "senegal",

//     },
//     {
//         location: [30.03, 31.15],
//         name: "Egypt",

//     },
//     {
//         location: [46.03, 14.31],
//         name: "Slovenia",

//     },
//     {
//         location: [51.6, 0.06],
//         name: "United kingdom",

//     }
// ];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
//   for (var i = 0; i < countries.length; i++) {
//     var country = countries[i];
//     console.log(country)
//     L.marker(country.location)
//       .bindPopup("<h1>" + country.name + country.location )
//       .addTo(myMap);
// }