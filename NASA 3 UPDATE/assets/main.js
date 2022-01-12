
// Inte kunna ta dagar som ej varit
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; // January är 0 addera 1 för att den ska bli 1
var yyyy = today.getFullYear();

if(dd<31) {
  dd = "0" + dd;
} 
if(mm<12) {
  mm = "0" + mm;
} 

today = yyyy + "-" + mm + "-" + dd;

document.getElementById("kalender").setAttribute("max", today);

// Funktion för att hämta bilder
function Nasa() {

    // Välja datum att hämta bilder ifrån
    let x = document.getElementById("kalender").value;
    console.log(x)
        
    // En inbyggd mekanism för att kommunicera i bakgrunden kallas XHR:
    let xhr = new XMLHttpRequest();

    // Vart ska vi?
    xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + x + "&api_key=2DddiIhG5DszE3ePZ9FMdXJ5e59Fj6N6Twgw5Xi0");

    // Vilket typ av svar förväntar vi oss?
    xhr.responseType = "json";
    document.getElementById("load").innerHTML="Loading... please wait";
    // Vad ska vi göra när svaret kommer?
    xhr.onload = function() {
        console.log(xhr.respone);
        let obj = xhr.response;
        document.getElementById("load").innerHTML= "";
        // Gå igenom varje objekt i arrayen vi får
        for (let i = 0; i < obj.photos.length; i++) {
            // Hämtar namn på kamera, bild och information om "roverN"
            document.getElementById("load").innerHTML += "<h2>" + obj.photos[i].camera.full_name + "</h2>"
            document.getElementById("load").innerHTML += "<img src='" + obj.photos[i].img_src + "'>"
            document.getElementById("load").innerHTML += "<p> Id: " + obj.photos[i].rover.id + "</p>"
            document.getElementById("load").innerHTML += "<p> Rover name: " + obj.photos[i].rover.name + "</p>"
            document.getElementById("load").innerHTML += "<p> Landing date: " + obj.photos[i].rover.landing_date + "</p>"
            document.getElementById("load").innerHTML += "<p> Launch date: " + obj.photos[i].rover.launch_date + "</p>" 
            document.getElementById("load").innerHTML += "<p> Status: " + obj.photos[i].rover.status + "</p> <br>"
         }
    };

    // Allt klart - skicka iväg vår request
    xhr.send();
}
//Bara få bilder ifrån "Front hazard kameran"
function Front_Hazard_Avoidance_Camera() {

    // Välja datum att hämta bilder ifrån
    let x = document.getElementById("kalender").value;
    console.log(x)

    // En inbyggd mekanism för att kommunicera i bakgrunden kallas XHR:
    let xhr = new XMLHttpRequest();

    // Vart ska vi?
    xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + x + "&api_key=2DddiIhG5DszE3ePZ9FMdXJ5e59Fj6N6Twgw5Xi0");

    // Vilket typ av svar förväntar vi oss?
    xhr.responseType = "json";
    document.getElementById("load").innerHTML="Loading... please wait";
    // Vad ska vi göra när svaret kommer?
    xhr.onload = function() {
        console.log(xhr.respone);
        let obj = xhr.response;
        document.getElementById("load").innerHTML = "";

        // Gå igenom varje objekt i arrayen vi får
        for (let i = 0; i < obj.photos.length; i++) {
            // Hämtar namn på kamera, bild och information om "roverN"
            if(obj.photos[i].camera.name == "FHAZ") {
                document.getElementById("load").innerHTML += "<h2>" + obj.photos[i].camera.full_name + "</h2>"
                document.getElementById("load").innerHTML += "<img src='" + obj.photos[i].img_src + "'>"
                document.getElementById("load").innerHTML += "<p> Id: " + obj.photos[i].rover.id + "</p>"
                document.getElementById("load").innerHTML += "<p> Rover name: " + obj.photos[i].rover.name + "</p>"
                document.getElementById("load").innerHTML += "<p> Landing date: " + obj.photos[i].rover.landing_date + "</p>"
                document.getElementById("load").innerHTML += "<p> Launch date: " + obj.photos[i].rover.launch_date + "</p>" 
                document.getElementById("load").innerHTML += "<p> Status: " + obj.photos[i].rover.status + "</p> <br>"
            }

            else {
                document.getElementById("load").innerHTML += "<p> Status: Don't do shit</p> <br>"
            }
        }
    };

    // Allt klart - skicka iväg vår request
    xhr.send();
};

function Rear_Hazard_Avoidance_Camera() {

    // Välja datum att hämta bilder ifrån
    let x = document.getElementById("kalender").value;
    console.log(x)
        
    // En inbyggd mekanism för att kommunicera i bakgrunden kallas XHR:
    let xhr = new XMLHttpRequest();

    // Vart ska vi?
    xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + x + "&api_key=2DddiIhG5DszE3ePZ9FMdXJ5e59Fj6N6Twgw5Xi0");

    // Vilket typ av svar förväntar vi oss?
    xhr.responseType = "json";
    document.getElementById("load").innerHTML="Loading... please wait";

    // Vad ska vi göra när svaret kommer?
    xhr.onload = function() {

        console.log(xhr.respone);
        let obj = xhr.response;
        document.getElementById("load").innerHTML= "";
        
        // Gå igenom varje objekt i arrayen vi får
        for (let i = 0; i < obj.photos[0].img_src.length; i++) {
            // Hämtar namn på kamera, bild och information om "roverN"
            if(obj.photos[i].camera.name == "RHAZ") {
            document.getElementById("load").innerHTML+= "<h2>" + obj.photos[i].camera.full_name + "</h2>"
            document.getElementById("load").innerHTML+="<img src='" + obj.photos[i].img_src + "'>"
            document.getElementById("load").innerHTML += "<p> Id: " + obj.photos[i].rover.id + "</p>"
            document.getElementById("load").innerHTML += "<p> Rover name: " + obj.photos[i].rover.name + "</p>"
            document.getElementById("load").innerHTML += "<p> Landing date: " + obj.photos[i].rover.landing_date + "</p>"
            document.getElementById("load").innerHTML += "<p> Launch date: " + obj.photos[i].rover.launch_date + "</p>" 
            document.getElementById("load").innerHTML += "<p> Status: " + obj.photos[i].rover.status + "</p> <br>"
            }     
        }
    };

    // Allt klart - skicka iväg vår request
    xhr.send();
}

function Chemistry_and_Camera_Complex() {

    // Välja datum att hämta bilder ifrån
    let x = document.getElementById("kalender").value;
    console.log(x)
    
    // En inbyggd mekanism för att kommunicera i bakgrunden kallas XHR:
    let xhr = new XMLHttpRequest();

    // Vart ska vi?
    xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + x + "&api_key=2DddiIhG5DszE3ePZ9FMdXJ5e59Fj6N6Twgw5Xi0");

    // Vilket typ av svar förväntar vi oss?
    xhr.responseType = "json";
    document.getElementById("load").innerHTML="Loading... please wait";

    // Vad ska vi göra när svaret kommer?
    xhr.onload = function() {

        console.log(xhr.respone);
        let obj = xhr.response;
        document.getElementById("load").innerHTML= "";

        // Gå igenom varje objekt i arrayen vi får
        for (let i = 0; i < obj.photos.length; i++) {
            // Hämtar namn på kamera, bild och information om "roverN"
            if(obj.photos[i].camera.name == "CHEMCAM") {
            document.getElementById("load").innerHTML+= "<h2>" + obj.photos[i].camera.full_name + "</h2>"
            document.getElementById("load").innerHTML+="<img src='" + obj.photos[i].img_src + "'>"
            document.getElementById("load").innerHTML += "<p> Id: " + obj.photos[i].rover.id + "</p>"
            document.getElementById("load").innerHTML += "<p> Rover name: " + obj.photos[i].rover.name + "</p>"
            document.getElementById("load").innerHTML += "<p> Landing date: " + obj.photos[i].rover.landing_date + "</p>"
            document.getElementById("load").innerHTML += "<p> Launch date: " + obj.photos[i].rover.launch_date + "</p>" 
            document.getElementById("load").innerHTML += "<p> Status: " + obj.photos[i].rover.status + "</p> <br>"
            }
        }
    };
    // Allt klart - skicka iväg vår request
    xhr.send();
}

function Mars_Hand_Lens_Imager() {
        
        
    // Välja datum att hämta bilder ifrån
    let x = document.getElementById("kalender").value;
    console.log(x)
    
    // En inbyggd mekanism för att kommunicera i bakgrunden kallas XHR:
    let xhr = new XMLHttpRequest();

    // Vart ska vi?
    xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + x + "&api_key=2DddiIhG5DszE3ePZ9FMdXJ5e59Fj6N6Twgw5Xi0");

    // Vilket typ av svar förväntar vi oss?
    xhr.responseType = "json";
    document.getElementById("load").innerHTML="Loading... please wait";
    // Vad ska vi göra när svaret kommer?
    xhr.onload = function() {
        console.log(xhr.respone);
        let obj = xhr.response;
        document.getElementById("load").innerHTML= "";
        
        // Gå igenom varje objekt i arrayen vi får
        for (let i = 0; i < obj.photos.length; i++) {
            // Hämtar namn på kamera, bild och information om "roverN"
            if(obj.photos[i].camera.name == "MAHLI") {
            document.getElementById("load").innerHTML+= "<h2>" + obj.photos[i].camera.full_name + "</h2>"
            document.getElementById("load").innerHTML+="<img src='" + obj.photos[i].img_src + "'>"
            document.getElementById("load").innerHTML += "<p> Id: " + obj.photos[i].rover.id + "</p>"
            document.getElementById("load").innerHTML += "<p> Rover name: " + obj.photos[i].rover.name + "</p>"
            document.getElementById("load").innerHTML += "<p> Landing date: " + obj.photos[i].rover.landing_date + "</p>"
            document.getElementById("load").innerHTML += "<p> Launch date: " + obj.photos[i].rover.launch_date + "</p>" 
            document.getElementById("load").innerHTML += "<p> Status: " + obj.photos[i].rover.status + "</p> <br>"
            }     
        }
    };

    // Allt klart - skicka iväg vår request
    xhr.send();
}

function Navigation_Camera() {

    // Välja datum att hämta bilder ifrån
    let x = document.getElementById("kalender").value;
    console.log(x)
    
    // En inbyggd mekanism för att kommunicera i bakgrunden kallas XHR:
    let xhr = new XMLHttpRequest();

    // Vart ska vi?
    xhr.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + x + "&api_key=2DddiIhG5DszE3ePZ9FMdXJ5e59Fj6N6Twgw5Xi0");

    // Vilket typ av svar förväntar vi oss?
    xhr.responseType = "json";
    document.getElementById("load").innerHTML="Loading... please wait";
    // Vad ska vi göra när svaret kommer?
    xhr.onload = function() {
        console.log(xhr.respone);
        let obj = xhr.response;
        document.getElementById("load").innerHTML=""

        // Gå igenom varje objekt i arrayen vi får
        for (let i = 0; i < obj.photos[0].img_src.length; i++) {
            // Hämtar namn på kamera, bild och information om "roverN"
            if(obj.photos[i].camera.name == "NAVCAM") {
            document.getElementById("load").innerHTML+= "<h2>" + obj.photos[i].camera.full_name + "</h2>"
            document.getElementById("load").innerHTML+="<img src='" + obj.photos[i].img_src + "'>"
            document.getElementById("load").innerHTML += "<p> Id: " + obj.photos[i].rover.id + "</p>"
            document.getElementById("load").innerHTML += "<p> Rover name: " + obj.photos[i].rover.name + "</p>"
            document.getElementById("load").innerHTML += "<p> Landing date: " + obj.photos[i].rover.landing_date + "</p>"
            document.getElementById("load").innerHTML += "<p> Launch date: " + obj.photos[i].rover.launch_date + "</p>" 
            document.getElementById("load").innerHTML += "<p> Status: " + obj.photos[i].rover.status + "</p> <br>"
            }     
        }
    };

    // Allt klart - skicka iväg vår request
    xhr.send();
}