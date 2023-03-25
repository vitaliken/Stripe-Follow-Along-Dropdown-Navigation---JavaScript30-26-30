const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter() {
    //отображает выпадающий список элементов (без фона)
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    //добавляет белый фон
    background.classList.add('open');

    //вычисляем расположение выпадашки + добавить бел фон
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    console.log(dropdownCoords);
    const navCoords = nav.getBoundingClientRect();
    console.log(navCoords);

    //соеденим полученные коордионаты
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
    //еще 2 доп координаты - исп при смещении элементов на странице
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    //задать размер белому фону
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px`);

}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));