const photo = document.querySelector(".slider__image");
const slider = document.querySelector(".slider__input");

const sliderChange = (value) => {
  const scale = value / 100;
  photo.style.transform = `scale(${scale})`;
};

const debouncedChange = _.debounce(sliderChange, 100);

slider.addEventListener("input", () => {
  debouncedChange(slider.value);
});