document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Animate hamburger icon
      const bars = navToggle.querySelectorAll('.bar');
      bars[0].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(45deg) translate(8px, 6px)' 
        : 'none';
      bars[1].style.opacity = navLinks.classList.contains('active') 
        ? '0' 
        : '1';
      bars[2].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(-45deg) translate(8px, -6px)' 
        : 'none';
    });
  
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
            navToggle.click();
          }
        }
      });
    });
  
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'all 0.6s ease-out';
      observer.observe(section);
    });
  
    // FAQ Accordion
    document.querySelectorAll('.faq-question-header').forEach(header => {
      header.addEventListener('click', () => {
        const question = header.parentElement;
        const content = question.querySelector('.faq-question-content');
        
        // Close other open questions
        document.querySelectorAll('.faq-question.active').forEach(openQuestion => {
          if (openQuestion !== question) {
            openQuestion.classList.remove('active');
          }
        });
        
        question.classList.toggle('active');
      });
    });
  
    // Stat Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    
    const animateStats = () => {
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
  
        const updateCount = () => {
          if (current < target) {
            current += increment;
            stat.textContent = Math.round(current).toLocaleString();
            requestAnimationFrame(updateCount);
          } else {
            stat.textContent = target.toLocaleString();
          }
        };
  
        updateCount();
      });
    };
  
    // Observe stats section
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          statsObserver.unobserve(entry.target);
        }
      });
    });
  
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  
    // Floating CTA visibility
    window.addEventListener('scroll', () => {
      const floatingCTA = document.querySelector('.floating-cta');
      if (window.scrollY > 300) {
        floatingCTA.style.transform = 'translateX(0)';
        floatingCTA.style.opacity = '1';
      } else {
        floatingCTA.style.transform = 'translateX(100px)';
        floatingCTA.style.opacity = '0';
      }
    });
  
    // Project cards hover effect
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
      });
    
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        // Here you would typically send this to your backend
        alert('¡Gracias por suscribirte! Te mantendremos informado.');
        newsletterForm.reset();
      });
    }
  
    // Add services carousel functionality
    const services = document.querySelectorAll('.service-item');
    let currentService = 0;
  
    function rotateServices() {
      services.forEach(service => {
        service.classList.remove('active');
      });
      
      services[currentService].classList.add('active');
      currentService = (currentService + 1) % services.length;
    }
  
    // Show first service immediately
    rotateServices();
    
    // Rotate services every 3 seconds
    setInterval(rotateServices, 3000);
  });