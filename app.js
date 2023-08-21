let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let name = document.getElementById("name");
    let img = document.getElementById("img");
    let inp = document.getElementById("inp");
    let width = document.getElementById("width");
    let height = document.getElementById("height");
    if (inp.value == "" && width.value == "" && height.value == "") {
        Swal.fire({
            title: `Input`,
            text: `Please Filled Input First `,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
    else {
        name.innerText = inp.value;
        img.src = `https://source.unsplash.com/${width.value}x${height.value}/?${inp.value}`
    }
})