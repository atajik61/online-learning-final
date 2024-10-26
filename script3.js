
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function animateCards() {
    // حذف کلاس active و inactive از تمام کارت‌ها
    cards.forEach(card => {
        card.classList.remove('active');
        card.classList.add('inactive');
    });

    // افزودن کلاس active به کارت فعلی
    cards[currentIndex].classList.add('active');
    cards[currentIndex].classList.remove('inactive');

    // بروزرسانی ایندکس
    currentIndex = (currentIndex + 1) % cards.length;

    // انیمیشن را هر 2 ثانیه تکرار کنید
    setTimeout(animateCards, 2000);
}

// شروع انیمیشن
animateCards();

