function handlePrinter() {
    // console.log(document.getElementById('file').files)
    // document.getElementById('myImg').style = 'width: 100vw; height: 100vw;'
    // pwin = window.open()
    // pwin.onload = function () { window.print(); }
    // document.querySelector('#myImg img').style = 'width: 100vw; height: 100vh;'
    // let divToPrint = document.getElementById('myImg')
    // newWin = window.open("")
    // newWin.document.write(divToPrint.outerHTML);
    // newWin.document.querySelector('body').style = 'background: black;'
    // newWin.print();
    // document.querySelector('#myImg img').style = 'width: 25px; height: 25px;'
    document.getElementById('myImg').src = URL.createObjectURL(document.getElementById('file').files[0])
    setTimeout(() => {
        window.print()
    }, 1000)
}