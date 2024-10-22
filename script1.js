
document.getElementById("readMoreBtn").addEventListener("click", function() {
    const moreText = document.querySelector(".more");
    const btn = document.getElementById("readMoreBtn");
    
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; // نمایش متن اضافه
        btn.textContent = "more."; // تغییر متن دکمه
    } else {
        moreText.style.display = "none"; // پنهان کردن متن اضافه
        btn.textContent = "more."; // تغییر متن دکمه به حالت اولیه
    }
});
