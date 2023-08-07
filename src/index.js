//Get data
fetch('https://dog.ceo/api/breeds/image/random/4')
.then(res => res.json())
.then(dogImagesArray => console.log(dogImagesArray))















const getConfig = (verb, body) => {
    const configurationObject = {
    method: verb,
    header: {
        "Content-Type": "applications/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(body)
}}