function lower() {
    var text = document.getElementById("table_input").value;
    var result = text.toLowerCase();
    document.getElementById("output").innerHTML = ("<b>" + result + "</b>");
}

function upper() {
    var text = document.getElementById("table_input").value;
    var result = text.toUpperCase();
    document.getElementById("output").innerHTML = ("<b>" + result + "</b>");
}

function cap() {
    var text = document.getElementById("table_input").value;
    var result = "<span style='text-transform: capitalize;'>" + text + "</span>"
    document.getElementById("output").innerHTML = ("<b>" + result + "</b>");
}

function better() {
    var text = document.getElementById("table_input").value;
    text = text.toLowerCase();
    var result = "<span style='text-transform: capitalize;'>" + text + "</span>"
    document.getElementById("output").innerHTML = ("<b>" + result + "</b>");
}

function printCity() {
    var city = ["Faisalabad", "Lahore", "Islamabad", "Rawalpandi"];
    city.push(city);
    document.getElementById("output").innerHTML = ("<b>" + city + "</b>");
}

function addCity() {
    var text = document.getElementById("table_input").value;
    var city = ["Faisalabad", "Lahore", "Islamabad", "Rawalpandi"];
    city.push(text);
    document.getElementById("output").innerHTML = ("<b>" + city + "</b>");
}

function checkCity() {
    var text = document.getElementById("table_input").value;
    var city = ["Faisalabad", "Lahore", "Islamabad", "Rawalpandi"];
    var l = city.length;
    var i = 0;
    for (i = 0; i < l; i++) {
        if (city[i] == text) {
            document.getElementById("output").innerHTML = "Yes";
            continue;
        } else {
            document.getElementById("output").innerHTML = "NO";
        }
    }
}

function find(){
    document.getElementById("output").innerHTML = "";
    var city = ["Lahore", "Faisalabad", "Multan", "Rawalpandi", "Islamabad", "Toba tak singh"];
    var input = document.getElementById("find").value;
    var l = city.length;
    var n = 0;
    var test = 0;
    while(n<l){
        if(city[n]==input){
            test+=1;
        }
        n++;
    }
    if(test>0){
        document.getElementById("output").innerHTML= "Yes Found";
    }else{
        document.getElementById("output").innerHTML= "not found";
    }
}

function replace(){
    document.getElementById("output").innerHTML = "";
    var city = ["Lahore", "Faisalabad", "Multan", "Rawalpandi", "Islamabad", "Toba tak singh"];
    var input = document.getElementById("find").value;
    var re = document.getElementById("replace").value;
    var l = city.length;
    for(var i = 0; i<l; i++){
        if(city[i]==input){
            city[i] = re;
            continue;
        }
    }
    document.getElementById("output").innerHTML = city;
}