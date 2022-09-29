async function handlePrinter() {
    if (document.getElementById('file').files[0].type.includes('pdf')) {
        var iframe = document.createElement('iframe');
        // Hide the IFrame.  
        iframe.style.visibility = "hidden";
        // Define the source.  
        iframe.src = URL.createObjectURL(document.getElementById('file').files[0]);
        // Add the IFrame to the web page.
        document.body.appendChild(iframe);
        iframe.contentWindow.focus();
        iframe.contentWindow.print(); // Print.
    } else if (document.getElementById('file').files[0].type.includes('image')) {
        document.getElementById('myImg').src = URL.createObjectURL(document.getElementById('file').files[0])
        setTimeout(() => {
            window.print()
        }, 1500)
    }

    await waiting()
    location.reload();
}

async function waiting() {
    return new Promise((res) => {
        console.log('wait')
        setTimeout(() => {
            res()
        }, 5500)
    })
}
function isUploaded(getfile) {
    if (getfile.files[0]) {
        if (getfile.files[0].type.includes('image')) {
            closePopUp(true, 'image')
        } else {
            closePopUp(true, 'pdf')
        }
    }
}

function closePopUp(state, type = 'none') {
    if (state) {
        document.querySelector('.check-files-container').style = 'display: flex;'
        console.log(type)
        if (type === 'image') {
            document.querySelector('embed').style = 'display: none'
            document.getElementById('previewImg').style = 'display: block'
            document.getElementById('previewImg').src = URL.createObjectURL(document.getElementById('file').files[0])
        } else if (type === 'pdf') {
            document.getElementById('previewImg').style = 'display: none'
            document.querySelector('embed').style = 'display: block'
            document.querySelector('embed').src = URL.createObjectURL(document.getElementById('file').files[0])
        } else {
            document.querySelector('embed').style = 'display: none'
            document.getElementById('previewImg').style = 'display: none'
        }
    } else {
        document.querySelector('embed').style = 'display: none'
        document.getElementById('previewImg').style = 'display: none'
        document.querySelector('.check-files-container').style = 'display: none;'
    }
}

