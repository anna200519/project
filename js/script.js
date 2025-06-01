document.addEventListener("DOMContentLoaded", () => {
  console.log('Скрипт отработал корректно')

  const header = document.querySelector('.header');     
  if (header) {                                           
    console.log('Константа header существует');
    const heightHeader = header.offsetHeight;           
    document.addEventListener('scroll', () => {         
      console.log('Страница скролится');
      let scrollPageY = this.scrollY;                 
      if (scrollPageY > heightHeader) {               
        header.classList.add('header--scroll')     
      } else {
        header.classList.remove('header--scroll')  
      }})
  }
  
 /* Алгоритм:
  Получение элемента заголовка
  Проверка существования заголовка
  Определение начальной высоты заголовка
  Регистрация обработчика события прокрутки
  Изменения внешнего вида заголовка при прокрутке*/

  const signUp = document.querySelector('.header__sign-up');      
  signUp.addEventListener('click', () => {
    signUp.classList.toggle('button-mod');
  });

  const signIn = document.querySelector('.header__sign-in');   
  signIn.addEventListener('click', () => {
    signIn.classList.toggle('button-mod');
  });

  const bannerClick  = document.querySelector('.banner__link');   
  bannerClick.addEventListener('click', () => {
    bannerClick.classList.toggle('button-mod');
  });

  const iconsClick = document.querySelector('.icons__link');   
  iconsClick.addEventListener('click', () => {
    iconsClick.classList.toggle('button-mod');
  });


  const video = document.getElementById('myVideo')
  const videoOpener = document.querySelector('.openVideoBtn')
  const videoCloser = video.querySelector('.closeVideoBtn')

  function closeOnBackDropClick({ currentTarget, target }) {
    const video = currentTarget
    const isClickedOnBackDrop = target === video
    if (isClickedOnBackDrop) {
      close()
    }
  }

  function openModalAndLockScroll() {
    video.showModal()
    document.body.classList.add('scroll-lock')
  }

  function returnScroll() {
    document.body.classList.remove('scroll-lock')
  }

  function close() {
    video.close()
    returnScroll()
  }

  video.addEventListener('click', closeOnBackDropClick)
  video.addEventListener('cancel', (event) => {
    returnScroll()
  });
  videoOpener.addEventListener('click', openModalAndLockScroll)
  videoCloser.addEventListener('click', (event) => {
    event.stopPropagation()
    close()
  });

  document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top")
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  const slider = document.querySelector('.swiper');

    if (slider) {
        const swiper = new Swiper(slider, {

            slidesPerView: 2, 
            spaceBetween: 20,
            loop: true, 

            pagination: {
                el: '.swiper-pagination',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                768: {
                  slidesPerView: 3, 
                  spaceBetween: 30,
                }
            }
        });
    }

   const iconsContainer = document.querySelector('.icons');

    if (iconsContainer) {

        const dataTitleIcons = ['Развитие речи', 'Занимательная математика', 'Развивающая программа от 5 до 7 лет', 'Я - Художник'];

        const titleIcons = iconsContainer.querySelectorAll('.icons__title');

        console.log(titleIcons); 

        titleIcons.forEach((item, index) => {
            item.textContent = dataTitleIcons[index];
        });

    }

    if (iconsContainer) {
        const iconsList = iconsContainer.querySelector('.icons__block');

        const apiUrl = 'data.json';

        const createBlock = (iconUrl, iconAlt, title, text) => {

            const iconBlock = `
                <div class="icons__item">
                    <img src="${iconUrl}" alt="${iconAlt}" class="icons__image">
                    <p class="icons__title">${title}</p>
                    <p class="icons__text">${text}</p>
                </div>
            `;

            return iconBlock;
        }

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                console.log(typeof (data)); 

                data.forEach(item => {
                    const iconElement = createBlock(item.iconUrl, item.iconAlt, item.title, item.text);
                    iconsList.insertAdjacentHTML('beforeend', iconElement);
                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }
    
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    if (preloader && content) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            content.style.display = 'block';
            preloader.remove();
        }, 3000); 
    }

});
  