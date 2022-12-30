const picturesListElement = document.querySelector('.pictures');
const previewModalElement = document.querySelector('.big-picture')
const previewModalCloseButtonElement = document.querySelector('.big-picture__cancel')
const commentsListElement = document.querySelector('.social__comments');

const pictureTempLateElement = document.getElementById('picture')
    .content
    .querySelector('.picture');

const commentTempLateElement = document.getElementById('comment')
    .content
    .querySelector('.social__comment');

const renderCommentsList = (comments) => {
    for (const comment of comments) {
        const commentElement = commentTempLateElement.cloneNode(true);
        commentElement.querySelector('.social__text').textContent = comment.message;

        commentsListElement.append(commentElement);
    }
}

const renderPicturesList = (pictures) => {
    for (const picture of pictures) {
        const pictureElement = pictureTempLateElement.cloneNode(true);

        pictureElement.dataset.id = picture.id;
        pictureElement.querySelector('img').src = picture.url;
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

        picturesListElement.append(pictureElement);
    }

    picturesListElement.addEventListener('click', function (evt) {
        const picture = evt.target.closest(".picture");

        if (picture) {
            const id = picture.dataset.id;
            const pictureItem = pictures.find(function (picture) {
                return picture.id === Number(id);
            });

            previewModalElement.querySelector('img').src = pictureItem.url;
            renderCommentsList(pictureItem.comments);
            previewModalElement.classList.remove('hidden');
        }
    });

    previewModalCloseButtonElement.addEventListener('click', function () {
        previewModalElement.classList.add('hidden')
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.code === "Escape") {
            console.log(evt);
            previewModalElement.classList.add('hidden')
        }
    });
};

export {renderPicturesList};
