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
