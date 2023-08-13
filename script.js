const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const apiKey = 'KvmnO-2jXRaLBGB9R3clBuIHzlOTWIR4zlFSIeVUexo';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Helper function to Set Attribtes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements for links & photos, add to dom
function displayPhotos() {
    photosArray.forEach(photo => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        // Put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotosFromUnsplashApi() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray)
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
}

// On Load
getPhotosFromUnsplashApi();