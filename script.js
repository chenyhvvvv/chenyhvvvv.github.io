// 共享脚本 - 用于多个页面
document.addEventListener('DOMContentLoaded', function() {
    // 添加滚动效果到头部
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 20px rgba(31, 38, 135, 0.3)';
                header.style.backdropFilter = 'blur(25px)';
            } else {
                header.style.boxShadow = 'none';
                header.style.backdropFilter = 'blur(20px)';
            }
        });
    }
    
    // 主页卡片动画
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay') || '0.1';
                    entry.target.style.animation = `slideUp 0.8s ${delay}s forwards`;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        
        cards.forEach(card => {
            observer.observe(card);
        });
    }
    
    // 按钮悬停效果
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('mouseenter', () => {
            heroBtn.style.transform = 'translateY(-5px)';
        });
        
        heroBtn.addEventListener('mouseleave', () => {
            heroBtn.style.transform = 'translateY(0)';
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});