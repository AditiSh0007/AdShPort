
//Jquery UI accordian
 $(function() {
   $( "#accordion" ).accordion({
       collapsible: true
        });
     });
document.getElementById('foot1').innerHTML = 
" <p>&copy;  " + new Date().getFullYear() + " .All rights reserved.</p>";


//Geolocation
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}




//title header of the page
var hcanvas = document.getElementById("tCanvas");
var mcan = hcanvas.getContext("2d");
  //create gradient
    var hgrd = mcan.createLinearGradient(0,0,100,5000);
    hgrd.addColorStop(0,"red");
    hgrd.addColorStop(1,"blue");
    
    mcan.fillStyle = hgrd;
    mcan.fillRect(0,0,5000,100);
    mcan.font ="30px Arial center";
    mcan.strokeText("Aditi Sharma",500,50);
    
//example of Canvas (Circular Gradient)
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.arc(50, 50, 50, 0, 2*Math.PI);
ctx.fillStyle = grd;
ctx.fill();

//Drag and Drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


// LOCAL storage
// Check browser support
if (typeof(Storage) != "undefined") {
    // Store
    localStorage.setItem("feature", "HTML5 local storage");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("feature");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

//Angular Js
function personController($scope) {
    $scope.firstName = "John",
    $scope.lastName = "Doe",
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
}

//angular bootstrap
function userController($scope) {
$scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, fName:'Hege',  lName:"Pege" },
{id:2, fName:'Kim',   lName:"Pim" },
{id:3, fName:'Sal',   lName:"Smith" },
{id:4, fName:'Jack',  lName:"Jones" },
{id:5, fName:'John',  lName:"Doe" },
{id:6, fName:'Peter', lName:"Pan" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 

$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.fName = '';
    $scope.lName = '';
    } else {
    $scope.edit = false;
    $scope.fName = $scope.users[id-1].fName;
    $scope.lName = $scope.users[id-1].lName; 
  }
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});

$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.fName.length ||
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
       $scope.incomplete = true;
  }
};

}

//css3


//Ajax and Json

var xmlhttp = new XMLHttpRequest();
var url = "http://www.w3schools.com/website/Customers_MYSQL.php";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    for(i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
        arr[i].Name +
        "</td><td>" +
        arr[i].City +
        "</td><td>" +
        arr[i].Country +
        "</td></tr>";
    }
    out += "</table>"
    document.getElementById("id01").innerHTML = out;
}
//

//Angular JS

var app = angular.module("myNoteApp", []);
app.controller("myNoteCtrl", function($scope) {
    $scope.message = "";
    $scope.left  = function() {return 150 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved");};
});

//Rectangle
var can = document.getElementById("can1");
var ctx= can.getContext("2d");
ctx.fillStyle = "#0F0";
ctx.fillRect(0,0,150,70);

//Circle
var cir = document.getElementById("can2");
var cirtx =cir.getContext("2d");
cirtx.beginPath();
cirtx.arc(95,50,40,0,2*Math.PI);
cirtx.stroke();

//text
var txt = document.getElementById("can3");
var txtcan = txt.getContext("2d");
txtcan.font ="30px Arial",
txtcan.strokeText("Hello World",10,50);

//gradient
var grad =document.getElementById("can4");
var cang =grad.getContext("2d");

//create gradient
var crgrad =cang.createLinearGradient(0,0,200,0);
crgrad.addColorStop(0, "red");
crgrad.addColorStop(1, "white");

//Fill with gradient
cang.fillStyle = crgrad;
cang.fillRect(10,10,150,80);

 


