' index.js '

window.addEventListener('DOMContentLoaded',()=>{
    const tabsParent = document.querySelector('.tabheader__items'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
// Loader
    loader = document.querySelector('.loader');

    setTimeout(()=>{
        loader.style.opacity = '0'; 
        setTimeout(()=>{
            // loader.style.opacity = 'none';  // bu kod qatori ham xatolik olib keladi 
            loader.style.display = 'none';
        },500)
    },2000)

// Tabs

    // tablarni o'chirib tashlovchi funksiya
    function hidetabContent(){
        tabsContent.forEach((item)=>{
            // item.style.display = 'none';
            // yuqoridagi kodlardan farqi o'laroq klasslar bilan ishlash tavsiya etiladi
            // show bor bo'lsa olib o'rniga hide beradi
            item.classList.add('hide');
            item.classList.remove('show','fade');
        })
        tabs.forEach((item)=>{
            item.classList.remove('tabheader__item_active');
        })
    }

    // tablarni ko'rsatuvchi funksiya
    function showtabContent(i=1){ // i- indexdagi contentni ko'rsat  ES6 metodi
        // tabsContent[i].style.display = 'block';
        // klass berish bo'yicha ishlash
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active')
    }

    hidetabContent();
    // showtabContent(3);  <-- bu xatolik qaytaradi
    showtabContent();

    // Faqat aniq janrlar qismi tanlanganda ishga tushirish
    tabsParent.addEventListener('click', (e)=>{
        const target  = e.target;
        if(target && target.classList.contains('tabheader__item')){
            // console.log(1);
            // qaysi janr bosilsa shu janrning indeksini chiqarish
            tabs.forEach((itm,idx)=>{
                // console.log(idx);
                if(target == itm){
                    hidetabContent();
                    showtabContent(idx);
                    console.log(idx);
                }
            })
        }
    })
})