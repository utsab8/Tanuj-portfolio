// Gallery data
const galleryData = [
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    title: "Hydropower Dam Survey",
    description:
      "LiDAR drone survey for hydropower site assessment and dam construction planning. This comprehensive survey includes topographic mapping, structural analysis, and environmental impact assessment for sustainable hydropower development.",
    category: "hydropower",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    title: "Total Station Equipment",
    description:
      "Professional total station setup for precise angle and distance measurements. This advanced surveying instrument provides millimeter accuracy for construction layout, boundary surveys, and topographic mapping projects.",
    category: "equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    title: "Field Survey Operations",
    description:
      "Survey team conducting topographic data collection in mountainous terrain. Our experienced professionals use state-of-the-art equipment to gather precise measurements in challenging environmental conditions.",
    category: "fieldwork",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    title: "Road Infrastructure Survey",
    description:
      "Highway alignment and cross-section survey for road improvement project. This detailed survey supports the design and construction of safe, efficient transportation infrastructure across Nepal's diverse landscape.",
    category: "infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=600&fit=crop",
    title: "DGPS System Setup",
    description:
      "Differential GPS equipment for high-precision coordinate measurements. This advanced positioning system provides centimeter-level accuracy for geodetic control, cadastral mapping, and engineering surveys.",
    category: "equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    title: "Land Resource Mapping",
    description:
      "Cadastral boundary survey and land use mapping for development planning. This comprehensive mapping project supports sustainable land management and urban planning initiatives across multiple districts.",
    category: "mapping",
  },
]

// Current lightbox image index
let currentImageIndex = 0

// Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader")
  if (preloader) {
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.style.display = "none"
    }, 500)
  }

  // Trigger animations for elements in view on page load
  animateElementsInView()
})

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0)
  }

  // Back to Top Button
  const backToTop = document.querySelector(".back-to-top")
  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add("active")
    } else {
      backToTop.classList.remove("active")
    }
  }

  // Animate elements on scroll
  animateElementsInView()
})

// Animate elements when they come into view
function animateElementsInView() {
  // Animate other elements with animation classes
  const animatedElements = document.querySelectorAll(
    ".animate-fade-in, .animate-from-left, .animate-from-right, .animate-from-bottom",
  )

  animatedElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.2

    if (elementPosition < screenPosition) {
      // Add animation delay based on index for staggered effect
      const delay = Array.from(element.parentNode.children).indexOf(element) * 0.2
      element.style.animationDelay = `${delay}s`
      element.style.visibility = "visible"
      element.style.animationPlayState = "running"
    }
  })
}

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

if (hamburger && navLinks) {
  hamburger.addEventListener("click", function () {
    this.classList.toggle("active")
    navLinks.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll(".nav-links a")
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (hamburger && navLinks) {
      hamburger.classList.remove("active")
      navLinks.classList.remove("active")
    }
  })
})

// Active Navigation Link on Scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-links a")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight - 100) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active")
    }
  })
})

// Project Filtering with Animation
const filterBtns = document.querySelectorAll(".filter-btn")
const projectItems = document.querySelectorAll(".project-item")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    this.classList.add("active")

    const filterValue = this.getAttribute("data-filter")

    projectItems.forEach((item) => {
      if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
        item.style.display = "block"
        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "scale(1)"
        }, 200)
      } else {
        item.style.opacity = "0"
        item.style.transform = "scale(0.8)"
        setTimeout(() => {
          item.style.display = "none"
        }, 500)
      }
    })
  })
})

// Gallery Filtering
const galleryFilterBtns = document.querySelectorAll(".gallery-filter-btn")
const galleryItems = document.querySelectorAll(".gallery-item")

galleryFilterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    galleryFilterBtns.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    this.classList.add("active")

    const filterValue = this.getAttribute("data-filter")

    galleryItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category")

      if (filterValue === "all" || itemCategory === filterValue) {
        item.classList.remove("hide")
        item.classList.add("show")
        setTimeout(() => {
          item.style.display = "block"
        }, 10)
      } else {
        item.classList.remove("show")
        item.classList.add("hide")
        setTimeout(() => {
          item.style.display = "none"
        }, 300)
      }
    })
  })
})

// Lightbox functionality
function openLightbox(index) {
  currentImageIndex = index
  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightbox-img")
  const lightboxTitle = document.getElementById("lightbox-title")
  const lightboxDescription = document.getElementById("lightbox-description")

  if (lightbox && lightboxImg && lightboxTitle && lightboxDescription && galleryData[index]) {
    const imageData = galleryData[index]

    lightboxImg.src = imageData.src
    lightboxImg.alt = imageData.title
    lightboxTitle.textContent = imageData.title
    lightboxDescription.textContent = imageData.description

    lightbox.style.display = "block"
    document.body.style.overflow = "hidden"
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  if (lightbox) {
    lightbox.style.display = "none"
    document.body.style.overflow = "auto"
  }
}

function changeImage(direction) {
  currentImageIndex += direction

  if (currentImageIndex >= galleryData.length) {
    currentImageIndex = 0
  } else if (currentImageIndex < 0) {
    currentImageIndex = galleryData.length - 1
  }

  const lightboxImg = document.getElementById("lightbox-img")
  const lightboxTitle = document.getElementById("lightbox-title")
  const lightboxDescription = document.getElementById("lightbox-description")

  if (lightboxImg && lightboxTitle && lightboxDescription && galleryData[currentImageIndex]) {
    const imageData = galleryData[currentImageIndex]

    lightboxImg.src = imageData.src
    lightboxImg.alt = imageData.title
    lightboxTitle.textContent = imageData.title
    lightboxDescription.textContent = imageData.description
  }
}

// Keyboard navigation for lightbox
document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox")
  if (lightbox && lightbox.style.display === "block") {
    if (e.key === "Escape") {
      closeLightbox()
    } else if (e.key === "ArrowLeft") {
      changeImage(-1)
    } else if (e.key === "ArrowRight") {
      changeImage(1)
    }
  }
})

// Close lightbox when clicking outside the image
const lightbox = document.getElementById("lightbox")
if (lightbox) {
  lightbox.addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox()
    }
  })
}

// Contact Form Submission with Validation
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name")?.value
    const email = document.getElementById("email")?.value
    const subject = document.getElementById("subject")?.value
    const message = document.getElementById("message")?.value

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`)

    // Reset form
    contactForm.reset()
  })

  // Add input animations
  const formInputs = document.querySelectorAll(".form-group input, .form-group textarea")

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused")
    })

    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("focused")
      }
    })
  })
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  })
})

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set initial state for animated elements
  const animatedElements = document.querySelectorAll(
    ".animate-fade-in, .animate-from-left, .animate-from-right, .animate-from-bottom",
  )

  animatedElements.forEach((element) => {
    element.style.visibility = "hidden"
    element.style.animationPlayState = "paused"
  })

  // Trigger animations for elements in initial view
  setTimeout(() => {
    animateElementsInView()
  }, 500)

  // Initialize FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question")
    const answer = item.querySelector(".faq-answer")

    if (questionBtn && answer) {
      questionBtn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open")

        // Close any other open item (accordion behavior)
        document.querySelectorAll(".faq-item.open").forEach((openItem) => {
          if (openItem !== item) {
            openItem.classList.remove("open")
            const openAnswer = openItem.querySelector(".faq-answer")
            if (openAnswer) openAnswer.style.maxHeight = null
            const openBtn = openItem.querySelector(".faq-question")
            if (openBtn) openBtn.setAttribute("aria-expanded", "false")
            if (openAnswer) openAnswer.setAttribute("aria-hidden", "true")
            const icon = openBtn?.querySelector('i')
            if (icon) { icon.classList.remove('fa-minus'); icon.classList.add('fa-plus') }
          }
        })

        // Toggle current item
        if (isOpen) {
          item.classList.remove("open")
          answer.style.maxHeight = null
          questionBtn.setAttribute("aria-expanded", "false")
          answer.setAttribute("aria-hidden", "true")
          const icon = questionBtn.querySelector('i')
          if (icon) { icon.classList.remove('fa-minus'); icon.classList.add('fa-plus') }
        } else {
          item.classList.add("open")
          answer.style.maxHeight = answer.scrollHeight + "px"
          questionBtn.setAttribute("aria-expanded", "true")
          answer.setAttribute("aria-hidden", "false")
          const icon = questionBtn.querySelector('i')
          if (icon) { icon.classList.remove('fa-plus'); icon.classList.add('fa-minus') }
        }
      })
    }
  })

  // On initial load, show the section matching the first navbar item
  if (!window.location.hash) {
    const firstNav = document.querySelector('.nav-links a')
    if (firstNav) {
      const targetId = firstNav.getAttribute('href')
      const targetSection = targetId ? document.querySelector(targetId) : null
      if (targetSection) {
        window.scrollTo({ top: targetSection.offsetTop - 80, behavior: 'auto' })
        // Update active state
        document.querySelectorAll('.nav-links a').forEach((l) => l.classList.remove('active'))
        firstNav.classList.add('active')
      }
    }
  }

  // Services modal data and interactions
  const servicesData = [
    {
      key: "lidar",
      title: "LiDAR Drone Survey",
      description:
        "High-precision LiDAR scanning for terrain modeling, volumetric analysis, and infrastructure planning.",
      features: [
        "Terrain and corridor mapping",
        "Point cloud classification",
        "DEM/DSM generation",
        "Cut/Fill and volume analytics",
      ],
      icon: "https://img.icons8.com/ios-filled/100/ffffff/drone.png",
    },
    {
      key: "gnss",
      title: "DGPS/GNSS Mapping",
      description:
        "Centimeter-level positioning for geodetic control, cadastral mapping, and construction layout.",
      features: [
        "Static and RTK surveys",
        "Geodetic control establishment",
        "Cadastral boundary surveys",
        "Construction set-out",
      ],
      icon: "https://img.icons8.com/ios-filled/100/ffffff/satellite.png",
    },
    {
      key: "road",
      title: "Road & Bridge Surveys",
      description:
        "Topographic, alignment, and cross-section surveys supporting transport infrastructure design.",
      features: [
        "Alignment and profile",
        "Cross-sections",
        "As-built documentation",
        "Hydraulic inputs",
      ],
      icon: "https://img.icons8.com/ios-filled/100/ffffff/road.png",
    },
    {
      key: "hydro",
      title: "Hydropower & Irrigation",
      description:
        "Hydrological mapping, canal cross-sections, and reservoir capacity assessments.",
      features: [
        "Canal cross-sections",
        "Reservoir capacity",
        "Intake and outlet surveys",
        "Transmission corridor",
      ],
      icon: "https://img.icons8.com/ios-filled/100/ffffff/water.png",
    },
    {
      key: "land",
      title: "Land Resource Mapping",
      description:
        "Comprehensive land use, zoning, and environmental mapping for planning and development.",
      features: [
        "Land use/land cover",
        "Zoning and planning inputs",
        "GIS datasets and maps",
        "Change detection",
      ],
      icon: "https://img.icons8.com/ios-filled/100/ffffff/marker.png",
    },
    {
      key: "layout",
      title: "Construction Layout",
      description:
        "Accurate setting out of reference points, grades, and elevations for on-site execution.",
      features: [
        "Reference points and benchmarks",
        "Grid and elevation set-out",
        "Quality checks and as-built",
        "Progress verification",
      ],
      icon: "https://img.icons8.com/ios-filled/100/ffffff/compass.png",
    },
  ]

  const serviceCards = document.querySelectorAll(".services .service-card")
  const serviceModal = document.getElementById("service-modal")
  const serviceModalClose = document.getElementById("service-modal-close")
  const serviceModalTitle = document.getElementById("service-modal-title")
  const serviceModalDescription = document.getElementById("service-modal-description")
  const serviceModalFeatures = document.getElementById("service-modal-features")
  const serviceModalIcon = document.getElementById("service-modal-icon")

  function openServiceModal(index) {
    const data = servicesData[index]
    if (!data || !serviceModal) return

    serviceModalTitle.textContent = data.title
    serviceModalDescription.textContent = data.description
    serviceModalFeatures.innerHTML = ""
    data.features.forEach((f) => {
      const li = document.createElement("li")
      li.textContent = f
      serviceModalFeatures.appendChild(li)
    })
    serviceModalIcon.innerHTML = `<img src="${data.icon}" alt="${data.title} icon" />`

    serviceModal.style.display = "block"
    document.body.style.overflow = "hidden"
  }

  function closeServiceModal() {
    if (!serviceModal) return
    serviceModal.style.display = "none"
    document.body.style.overflow = "auto"
  }

  serviceCards.forEach((card, index) => {
    card.style.cursor = "pointer"
    card.addEventListener("click", () => openServiceModal(index))
  })

  if (serviceModalClose) {
    serviceModalClose.addEventListener("click", closeServiceModal)
  }

  if (serviceModal) {
    serviceModal.addEventListener("click", (e) => {
      if (e.target === serviceModal) closeServiceModal()
    })
  }

  // Get a Quote button: close modal, then show contact form
  const quoteBtn = document.querySelector('#service-modal .modal-actions .primary-btn')
  if (quoteBtn) {
    quoteBtn.addEventListener('click', (e) => {
      e.preventDefault()
      closeServiceModal()
      const contactSection = document.querySelector('#contact')
      if (contactSection) {
        window.scrollTo({ top: contactSection.offsetTop - 80, behavior: 'smooth' })
        // Update active nav link to Contact
        document.querySelectorAll('.nav-links a').forEach((l) => l.classList.remove('active'))
        const contactLink = document.querySelector('.nav-links a[href="#contact"]')
        if (contactLink) contactLink.classList.add('active')
      }
    })
  }
})

// Back to top button
const backToTop = document.querySelector(".back-to-top")

if (backToTop) {
  backToTop.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Initialize gallery on page load
document.addEventListener("DOMContentLoaded", () => {
  // Show all gallery items initially
  galleryItems.forEach((item) => {
    item.classList.add("show")
  })

  // Add loading animation
  setTimeout(() => {
    galleryItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1"
        item.style.transform = "translateY(0)"
      }, index * 100)
    })
  }, 100)
})

// Lazy loading for images
const images = document.querySelectorAll('img[loading="lazy"]')

if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => {
    imageObserver.observe(img)
  })
}

// ===== CLIENTS SLIDER =====
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('.clients-slider')
  if (!slider) return

  const viewport = slider.querySelector('.clients-viewport')
  const track = slider.querySelector('.clients-track')
  const slides = Array.from(slider.querySelectorAll('.clients-slide'))
  const prevBtn = slider.querySelector('.clients-nav.prev')
  const nextBtn = slider.querySelector('.clients-nav.next')
  const dotsContainer = slider.querySelector('.clients-dots')

  let currentIndex = 0
  let slidesPerView = 5
  let autoplayTimer = null
  const autoplayMs = 2200

  function computeSlidesPerView() {
    const width = window.innerWidth
    if (width <= 480) return 1
    if (width <= 768) return 2
    if (width <= 992) return 3
    if (width <= 1200) return 4
    return 5
  }

  function updateDots() {
    if (!dotsContainer) return
    const totalPages = Math.ceil(slides.length / slidesPerView)
    dotsContainer.innerHTML = ''
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button')
      dot.className = 'clients-dot' + (i === Math.floor(currentIndex / slidesPerView) ? ' active' : '')
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`)
      dot.addEventListener('click', () => {
        currentIndex = i * slidesPerView
        snapToIndex()
        restartAutoplay()
      })
      dotsContainer.appendChild(dot)
    }
  }

  function snapToIndex() {
    const slideWidth = slides[0]?.getBoundingClientRect().width || 0
    const gap = parseFloat(getComputedStyle(track).gap || '0')
    const translateX = -(currentIndex * (slideWidth + gap))
    track.style.transform = `translate3d(${translateX}px, 0, 0)`
    updateDots()
  }

  function next() {
    const maxIndex = Math.max(0, slides.length - slidesPerView)
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
    snapToIndex()
  }

  function prev() {
    const maxIndex = Math.max(0, slides.length - slidesPerView)
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1
    snapToIndex()
  }

  function restartAutoplay() {
    stopAutoplay()
    autoplayTimer = setInterval(next, autoplayMs)
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer)
    autoplayTimer = null
  }

  // Resize handling
  function handleResize() {
    const prevSpv = slidesPerView
    slidesPerView = computeSlidesPerView()
    if (slidesPerView !== prevSpv) {
      currentIndex = Math.floor(currentIndex / slidesPerView) * slidesPerView
      snapToIndex()
    } else {
      snapToIndex()
    }
  }

  // Buttons
  prevBtn?.addEventListener('click', () => { prev(); restartAutoplay() })
  nextBtn?.addEventListener('click', () => { next(); restartAutoplay() })

  // Hover pause
  viewport?.addEventListener('mouseenter', stopAutoplay)
  viewport?.addEventListener('mouseleave', restartAutoplay)

  // Touch swipe
  let startX = 0
  let isDragging = false
  viewport?.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
    isDragging = true
    stopAutoplay()
  }, { passive: true })

  viewport?.addEventListener('touchmove', (e) => {
    if (!isDragging) return
    const delta = e.touches[0].clientX - startX
    if (Math.abs(delta) > 40) {
      if (delta < 0) next(); else prev()
      isDragging = false
    }
  }, { passive: true })

  viewport?.addEventListener('touchend', () => {
    isDragging = false
    restartAutoplay()
  })

  // Init
  slidesPerView = computeSlidesPerView()
  updateDots()
  snapToIndex()
  restartAutoplay()
  window.addEventListener('resize', handleResize)
})
