const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic sit suscipit ab, aspernatur magni unde mollitia vitae distinctio doloremque nobis quidem amet iusto iste dolorem expedita ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic sit suscipit ab, aspernatur magni unde mollitia vitae distinctio doloremque nobis quidem amet iusto iste dolorem expedita",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic sit suscipit ab, aspernatur magni "
];

let currentIndex = 0;

const paragraphElement = document.getElementById('paragraph');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + paragraphs.length) % paragraphs.length;
    paragraphElement.textContent = paragraphs[currentIndex];
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % paragraphs.length;
    paragraphElement.textContent = paragraphs[currentIndex];
});