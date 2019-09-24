function save() {
    var fname = document.getElementById("txtFirst").value;
    var lname = document.getElementById("txtLast").value;
    var t = document.getElementById("txtType").value;
    var cm = document.getElementById("txtComment").value.trim();
    var url = "../php/form.php?txtFirst=" + fname + "&txtLast=" + lname + "&txtType=" + t + "&txtComment=" + cm;


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200)
        {
            document.getElementById("CMSection").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

    //alert(url);
}