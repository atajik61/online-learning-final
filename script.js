const columns = [
    ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg', 'images/image6.jpg','images/image10.jpg'], // کالم اول
    ['images/image7.jpg', 'images/image8.jpg', 'images/image9.jpg', 'images/image10.jpg', 'images/image11.jpg', 'images/image12.jpg','images/image6.jpg'], // کالم دوم
    ['images/image13.jpg', 'images/image14.jpg', 'images/image15.jpg', 'images/image16.jpg', 'images/image17.jpg', 'images/image18.jpg','images/image3.jpg']  // کالم سوم
];

columns.forEach((images, index) => {
    const wrapper = document.getElementById(`column${index + 1}`).querySelector('.image-wrapper');

    // اضافه کردن تصاویر
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'image';
        img.alt = `Image ${src}`;
        wrapper.appendChild(img);
    });

    // تکرار تصاویر برای پر کردن خلا
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'image';
        img.alt = `Image ${src}`;
        wrapper.appendChild(img);
    });
});
setTimeout(() => {
    img.classList.add('show'); 
}, index * 2000);
