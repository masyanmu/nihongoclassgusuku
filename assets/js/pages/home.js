const fvSwiper = new Swiper('.fv-slider', {
    slidesPerView: 1, //　初期値（SP時は後で上書き）
    centeredSlides: true,
    loop: true,
    observeParents: true,
    spaceBetween: 60, //　スライド間の余白
    touchEventsTarget: 'container',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // PC表示時
        769: {
            slidesPerView: 2.2,
            spaceBetween: 30,
        },
        // SP表示時（768px以下）
        0: {
            slidesPerView: 'auto', // SPでは１枚が中央、左右が8~9割見切れる
            spaceBetween: 15,
        }
    },
    on: {
        resize: function () {
            this.update(); // 即座に再計算
            this.setTransition(0); // リサイズ時はアニメーション無効
        }
    }
});

// profileを揺らす
document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.profile-card');

    const options = {
        threshold: 0.2 // 20%見えたら発火
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 1回だけ発火させる場合
            }
        });
    }, options);

    targets.forEach(target => observer.observe(target));
});