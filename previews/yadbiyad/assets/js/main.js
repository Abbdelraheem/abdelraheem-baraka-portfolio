(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initSmoothScroll();
        initHeaderScroll();
        initContactForm();
        initDonationButtons();
        initAnimations();
        initSliders();
    });

    function initMobileMenu() {
        var menuToggle = document.getElementById('menuToggle');
        var mainNav = document.getElementById('mainNav');
        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
            });
            mainNav.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    mainNav.classList.remove('active');
                });
            });
        }
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    var header = document.querySelector('.site-header');
                    var headerHeight = header ? header.offsetHeight : 0;
                    window.scrollTo({ top: targetElement.offsetTop - headerHeight, behavior: 'smooth' });
                }
            });
        });
    }

    function initHeaderScroll() {
        var header = document.getElementById('header');
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) { header.classList.add('scrolled'); }
                else { header.classList.remove('scrolled'); }
            });
        }
    }

    function initContactForm() {
        var contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                var formData = new FormData(this);
                var name = formData.get('name') || '';
                var email = formData.get('email') || '';
                var phone = formData.get('phone') || '';
                var subject = formData.get('subject') || '';
                var message = formData.get('message') || '';
                var customAmount = formData.get('customAmount') || '';
                var activeAmountBtn = document.querySelector('.amount-btn.active');
                var donationAmount = activeAmountBtn ? activeAmountBtn.dataset.amount : customAmount;
                var whatsappMessage = '*رسالة جديدة من الموقع*\n\n';
                whatsappMessage += '*الاسم:* ' + name + '\n';
                whatsappMessage += '*البريد:* ' + email + '\n';
                whatsappMessage += '*الهاتف:* ' + phone + '\n';
                whatsappMessage += '*الموضوع:* ' + subject + '\n';
                if (donationAmount) { whatsappMessage += '*مبلغ التبرع:* $' + donationAmount + '\n'; }
                whatsappMessage += '\n*الرسالة:*\n' + message;
                var whatsappNumber = typeof yadBiyadSettings !== 'undefined' ? yadBiyadSettings.whatsapp : '970592486498';
                window.open('https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(whatsappMessage), '_blank');
            });
        }
    }

    function initDonationButtons() {
        var amountBtns = document.querySelectorAll('.amount-btn');
        var customAmountInput = document.querySelector('input[name="customAmount"]');
        amountBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                amountBtns.forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');
                if (customAmountInput) customAmountInput.value = '';
            });
        });
        if (customAmountInput) {
            customAmountInput.addEventListener('input', function() {
                if (this.value) amountBtns.forEach(function(btn) { btn.classList.remove('active'); });
            });
        }
    }

    function initAnimations() {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) { entry.target.classList.add('animate-in'); observer.unobserve(entry.target); }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.campaign-card, .stat-item, .contact-item').forEach(function(el) {
            el.classList.add('animate-element');
            observer.observe(el);
        });
    }

    // ═══════════════════════════════════════════════════════════
    // Image Slider System (Fade)
    // ═══════════════════════════════════════════════════════════
    var sliderIntervals = {};

    function initSliders() {
        document.querySelectorAll('.card-slider').forEach(function(slider) {
            var id = slider.dataset.slider;
            var count = parseInt(slider.dataset.count);
            var interval = parseInt(slider.dataset.interval) || 3000;
            
            if (count <= 1) return;
            
            sliderIntervals[id] = { current: 0, count: count, interval: null };
            startAutoSlide(id, interval);
            
            slider.addEventListener('mouseenter', function() {
                if (sliderIntervals[id].interval) clearInterval(sliderIntervals[id].interval);
            });
            
            slider.addEventListener('mouseleave', function() {
                startAutoSlide(id, interval);
            });
        });
    }

    function startAutoSlide(id, interval) {
        if (sliderIntervals[id] && sliderIntervals[id].interval) {
            clearInterval(sliderIntervals[id].interval);
        }
        sliderIntervals[id].interval = setInterval(function() {
            slideMove(id, 1);
        }, interval);
    }

    function slideMove(id, direction) {
        var state = sliderIntervals[id];
        if (!state) return;
        var newIndex = state.current + direction;
        if (newIndex >= state.count) newIndex = 0;
        if (newIndex < 0) newIndex = state.count - 1;
        slideTo(id, newIndex);
    }
    window.slideMove = slideMove;

    function slideTo(id, index) {
        var state = sliderIntervals[id];
        if (!state) return;
        state.current = index;
        
        var slider = document.querySelector('[data-slider="' + id + '"]');
        if (!slider) return;
        
        var imgs = slider.querySelectorAll('.slides img');
        imgs.forEach(function(img, i) {
            img.classList.toggle('active-slide', i === index);
        });
        
        slider.querySelectorAll('.slider-dot').forEach(function(dot, i) {
            dot.classList.toggle('active', i === index);
        });
    }
    window.slideTo = slideTo;
})();
