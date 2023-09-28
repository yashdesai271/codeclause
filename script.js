let imageURL;
function handleUpload(){
    const fileInput = document.getElementById('filePicker');
    const image = fileInput.files[0];

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append('size','auto');

    const API_Key = 'j6qQ7dGnTr8Yuph8JH87A8hL';

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': API_Key,
        }, 
        body : formData
    })
    .then(function(response){
        return response.blob();
    })
    .then(function(finalResponse){
        console.log(finalResponse);
        const url = URL.createObjectURL(finalResponse);
        console.log(url);
        imageURL = url;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
    .catch(function(error){
        console.error(error);
    });

    console.log("Clicked");
}

function downloadFile(){
    var anchorElement = document.createElement('a');
    anchorElement.href = imageURL;
    anchorElement.download = 'no-bg.png';
    document.body.appendChild(anchorElement);

    anchorElement.click();

    document.body.removeChild(a);

}