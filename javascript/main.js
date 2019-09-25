function getData(){
    const fname = document.getElementById("txtFirst").value;
    const lname = document.getElementById("txtLast").value;
    const tpy = document.getElementById("txtType").value;
    const cmt = document.getElementById("txtComment").value.trim();
    let url = "../php/form.php?txtFirst=" + fname + "&txtLast=" + lname + "&txtType=" + tpy + "&txtComment=" + cmt;
    const secCmt = document.getElementById("CMSection");

    fetch(url)
        .then((res) => res.text())
        .then((data) => secCmt.innerHTML = data)
        .catch((error) => console.log(error));
}