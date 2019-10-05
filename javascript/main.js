function getData(){
    //Variables from HTML form get by ID
    const fname = document.getElementById("txtFirst").value;
    const lname = document.getElementById("txtLast").value;
    const tpy = document.getElementById("txtType").value;
    const cmt = document.getElementById("txtComment").value.trim();

    //Web url with all parameters being sent with get
    let str = "./php/form.php?txtFirst=" + fname + "&txtLast=" + lname + "&txtType=" + tpy + "&txtComment=" + cmt;

    //Location where to put data once it is sent back
    const seCmt = document.getElementById("CMSection");

    // Sends http request and does something with it.
    fetch(str)
        .then((res) => res.text())
        .then((data) => seCmt.innerHTML = data)
        .catch((error) => console.log(error));
}
