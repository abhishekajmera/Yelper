function resetFunction() {
    // document.getElementById("foram").reset();
    var jason = JSON.parse('{ "businesses": [{ "id": "ZDEwTtHhCAeqQvc0mIHpKA", "alias": "ucsd-soccer-fields-la-jolla", "name": "UCSD Soccer Fields", "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/F7IBg_3C1W_Qryt5e293aQ/o.jpg", "is_closed": false, "url": "https://www.yelp.com/biz/ucsd-soccer-fields-la-jolla?adjust_creative=bKRO5uwhjcMii6V7nm195Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=bKRO5uwhjcMii6V7nm195Q", "review_count": 1, "categories": [{ "alias": "parks", "title": "Parks" }], "rating": 5.0, "coordinates": { "latitude": 32.88129, "longitude": -117.22924 }, "transactions": [], "location": { "address1": "University Of California San Diego", "address2": "", "address3": "Gilman Dr & Voigt Dr", "city": "La Jolla", "zip_code": "92093", "country": "US", "state": "CA", "display_address": ["University Of California San Diego", "Gilman Dr & Voigt Dr", "La Jolla, CA 92093"] }, "phone": "", "display_phone": "", "distance": 7.676517611614677 }], "total": 1, "region": { "center": { "longitude": -117.23407745361328, "latitude": 32.880017024633005 } } }');
    var pointes = (jason);
    // alert(JSON.stringify(pointes.businesses))

    var kw = document.getElementById('keyword').value;
    var mil = document.getElementById('distance').value * 1609.34;
    var e = document.getElementById("category");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;

    // alert(text)
    // alert(mil)
    // alert(kw)


    if (document.getElementById('check').checked) {

        fetch("https://ipinfo.io/?token=d6e980c1c918a3")
            .then((response) => {
                return response.json();
            }).then(jsonData => {
                var ip = (jsonData); // {lat: 45.425152, lng: -75.6998028}
                // alert(JSON.stringify(ip.loc).split(",")[0].substring(1));
                // alert(JSON.stringify(ip.loc).split(",")[1].slice(0, -1));

            })

            .catch(error => {
                console.log(error);
            })
    }
    else {
        // alert('no')





        var address = document.getElementById('location').value;
        // alert(address);


        fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDotiMJsHkIxEKGb2It95eY666clgy91dI")
            .then((response) => {
                return response.json();
            }).then(jsonData => {
                var lat = (jsonData.results[0].geometry.location.lat); // {lat: 45.425152, lng: -75.6998028}
                // alert(JSON.stringify(lat));
                var lng = (jsonData.results[0].geometry.location.lng);
                // alert(JSON.stringify(lng));
            })
            .catch(error => {
                console.log(error);
            })











    }




    // var jason = ('')

    // fetch(`/search/?kw=${keyword}&from=${from_date}&to=${to_date}&cat=${category}&src=${source}`)
    //     .then(
    //         function (response) {
    //             if (response.status !== 200) {
    //                 console.log(response);
    //                 return;
    //             }

    //             response.json()
    //                 .then(data => {
    //                     display_search_results(data);
    //                 });
    //         }
    //     )
    //     .catch(err => {
    //         console.log(err);
    // })

    // var customers = ['No.', 'Image', 'Business Name', 'Rating', 'Distance (miles)']
    // var table = document.getElementById("myTable");
    // var row = table.insertRow(-1);
    // for (var i = 0; i < 5; i++) {
    //     var headerCell = document.createElement("TH");
    //     headerCell.innerHTML = customers[i];
    //     row.appendChild(headerCell);
    // }





    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    // alert(pointes.businesses.length)

    for (var i in pointes.businesses) {
        var name = (pointes.businesses[0].name)
        var img = (pointes.businesses[0].image_url)
        var rating = (pointes.businesses[0].rating)
        var distance = (pointes.businesses[0].distance)


        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);



        // var img2 = document.createElement('img');
        // img.src = img;
        cell0.innerHTML = 1;


        cell2.innerHTML = "                      " + name + "                  ";
        cell1.innerHTML = '<img src=' + img + ' id="tabl">';



        cell3.innerHTML = rating;
        cell4.innerHTML = (distance * 0.000621371).toFixed(2)




    }





    for (var i in pointes.businesses) {
        var name = (pointes.businesses[0].name)
        var img = (pointes.businesses[0].image_url)
        var rating = (pointes.businesses[0].rating)
        var distance = (pointes.businesses[0].distance)


        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);



        // var img2 = document.createElement('img');
        // img.src = img;
        cell0.innerHTML = 1;


        cell2.innerHTML = "                      " + name + "                  ";
        cell1.innerHTML = '<img src=' + img + ' id="tabl">';



        cell3.innerHTML = 4;
        cell4.innerHTML = 6;




    }



    var jose = JSON.parse('{"id": "pPK3t0yYYw7Ct3E9aCp2JQ", "alias": "yogurt-world-ucsd-la-jolla", "name": "Yogurt World UCSD", "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/7lLKa4dwSozPQerW8GrNxQ/o.jpg", "is_claimed": true, "is_closed": false, "url": "https://www.yelp.com/biz/yogurt-world-ucsd-la-jolla?adjust_creative=bKRO5uwhjcMii6V7nm195Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=bKRO5uwhjcMii6V7nm195Q", "phone": "+18584528889", "display_phone": "(858) 452-8889", "review_count": 112, "categories": [{"alias": "icecream", "title": "Ice Cream & Frozen Yogurt"}], "rating": 4.0, "location": {"address1": "9500 Gilman Dr", "address2": "", "address3": "", "city": "La Jolla", "zip_code": "92037", "country": "US", "state": "CA", "display_address": ["9500 Gilman Dr", "La Jolla, CA 92037"], "cross_streets": ""}, "coordinates": {"latitude": 32.879205, "longitude": -117.235991}, "photos": ["https://s3-media3.fl.yelpcdn.com/bphoto/7lLKa4dwSozPQerW8GrNxQ/o.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/R6pzuRwrdVt9ywSYXwV7CA/o.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/Ab7Hi_IuQQ8UlQ0mb4qT_w/o.jpg"], "price": "$", "hours": [{"open": [{"is_overnight": false, "start": "1100", "end": "2100", "day": 0}, {"is_overnight": false, "start": "1100", "end": "2100", "day": 1}, {"is_overnight": false, "start": "1100", "end": "2100", "day": 2}, {"is_overnight": false, "start": "1100", "end": "2100", "day": 3}, {"is_overnight": false, "start": "1100", "end": "2100", "day": 4}, {"is_overnight": false, "start": "1200", "end": "1700", "day": 5}, {"is_overnight": false, "start": "1200", "end": "1700", "day": 6}], "hours_type": "REGULAR", "is_open_now": true}], "transactions": []}')
    alert(jose.display_phone)
    alert(jose.name)
    alert(jose.is_closed)
    alert(jose.categories[0]["title"])
    alert(jose.price)
    alert(jose.location["address1"])
    alert(jose.image_url)
    alert(jose.photos[0])
    document.getElementById('stat').style.background = "green";
    document.getElementById('stat').innerHTML = 'Open'
    document.getElementById('adress_id').innerHTML = ''

}

function checkFluency() {

    var checkbox = document.getElementById('check');

    if (checkbox.checked == true) {
        document.getElementById("location").value = "";
        document.getElementById("location").disabled = true;
    }


    if (checkbox.checked != true) {
        document.getElementById("location").disabled = false;
    }
}



function get_stuff() {


    fetch("https://ipinfo.io/?token=d6e980c1c918a3")
        .then((response) => {
            return response.json();
        }).then(jsonData => {
            var ip = (jsonData); // {lat: 45.425152, lng: -75.6998028}
            // alert(JSON.stringify(ip.loc).split(",")[0]);
            // alert(JSON.stringify(ip.loc).split(",")[1]);
            return ip;
        })

        .catch(error => {
            console.log(error);
        })
}






function get_loc() {
    var address = document.getElementById('location').value;
    // alert(address);


    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDotiMJsHkIxEKGb2It95eY666clgy91dI")
        .then((response) => {
            return response.json();
        }).then(jsonData => {
            var lat = (jsonData.results[0].geometry.location.lat); // {lat: 45.425152, lng: -75.6998028}
            // alert(JSON.stringify(lat));
            var lng = (jsonData.results[0].geometry.location.lng);
            // alert(JSON.stringify(lng));
        })
        .catch(error => {
            console.log(error);
        })
}









// var req = new XMLHttpRequest();
// req.responseType = 'json';
// req.open('GET', "https://ipinfo.io/?token=d6e980c1c918a3", true);
// req.onload = function () {
//     var jsonResponse = JSON.parse(req.responseText);
//     // do something with jsonResponse
//     alert(jsonResponse);
// };
// req.send(null);}


function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}









