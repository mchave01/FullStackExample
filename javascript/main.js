function getData(){
    const fname = document.getElementById("txtFirst").value;
    const lname = document.getElementById("txtLast").value;
    const tpy = document.getElementById("txtType").value;
    const cmt = document.getElementById("txtComment").value.trim();
    let str = "./php/form.php?txtFirst=" + fname + "&txtLast=" + lname + "&txtType=" + tpy + "&txtComment=" + cmt;
    const seCmt = document.getElementById("CMSection");

    fetch(str)
        .then((res) => res.text())
        .then((data) => seCmt.innerHTML = data)
        .catch((error) => console.log(error));
}