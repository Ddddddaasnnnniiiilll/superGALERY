const picturesListElement = document.querySelector('.pictures');
const previewModalElement = document.querySelector('.big-picture')
const previewModalCloseButtonElement = document.querySelector('.big-picture__cancel')
const pictureTempLateElement = document.getElementById('picture')
    .content
    .querySelector('.picture');



const renderPicturesList = (pictures) => {
    for (const picture of pictures) {
        const pictureElement = pictureTempLateElement.cloneNode(true);

        pictureElement.dataset.id = picture.id;
        pictureElement.querySelector('img').src = picture.url;
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

        picturesListElement.append(pictureElement)

        pictureElement.addEventListener('click', function () {
            const id = pictureElement.dataset.id;

            const pictureItem = pictures.find(function (picture) {
                return picture.id === Number(id);
            });

            previewModalElement.querySelector('img').src = pictureItem.url;
            previewModalElement.classList.remove('hidden');
        });
    }
    previewModalCloseButtonElement.addEventListener('click', function () {
        previewModalElement.classList.add('hidden')
    });

    
};

export {renderPicturesList};