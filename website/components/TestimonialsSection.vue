<template>
  <section class="testimonials-section">
    <div class="glass-container">
      <div class="testimonials-header">
        <h2 class="testimonials-title">Vad våra kunder säger</h2>
        <p class="testimonials-subtitle">Hundratals företag använder redan Redofy för att förenkla sin ekonomihantering</p>
      </div>
      
      <div class="testimonials-carousel">
        <div class="carousel-container" ref="carouselContainer">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index" 
            class="testimonial-card"
            :class="{ 'active': currentIndex === index }"
          >
            <div class="testimonial-content">
              <div class="testimonial-rating">
                <span v-for="star in 5" :key="star" class="star" :class="{ 'filled': star <= testimonial.rating }">★</span>
              </div>
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
              <div class="testimonial-author">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="author-avatar" />
                <div class="author-info">
                  <h4 class="author-name">{{ testimonial.name }}</h4>
                  <p class="author-position">{{ testimonial.position }}, {{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="carousel-navigation">
          <button class="nav-button prev" @click="prevTestimonial" aria-label="Previous testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div class="carousel-dots">
            <button 
              v-for="(dot, index) in testimonials.length" 
              :key="index"
              class="dot"
              :class="{ 'active': currentIndex === index }"
              @click="goToSlide(index)"
              :aria-label="`Go to testimonial ${index + 1}`"
            ></button>
          </div>
          <button class="nav-button next" @click="nextTestimonial" aria-label="Next testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const testimonials = [
  {
    name: "Maria Andersson",
    position: "Ekonomiansvarig",
    company: "TechStart AB",
    text: "Redofy har revolutionerat hur vi hanterar vår bokföring. Den automatiska kategoriseringen sparar oss flera timmar varje vecka och AI-funktionerna är verkligen imponerande.",
    rating: 5,
    avatar: "/images/testimonials/avatar-1.jpg"
  },
  {
    name: "Johan Bergman",
    position: "VD",
    company: "Bergmans Bygg",
    text: "Som småföretagare har jag alltid hatat att hålla på med bokföring. Med Redofy känns det plötsligt enkelt och jag kan fokusera på det jag faktiskt är bra på - att driva mitt företag.",
    rating: 5,
    avatar: "/images/testimonials/avatar-2.jpg"
  },
  {
    name: "Sara Lindström",
    position: "Redovisningskonsult",
    company: "Lindström Consulting",
    text: "Jag rekommenderar Redofy till alla mina klienter. Programmet är intuitivt, molnbaserat och har alla funktioner man behöver för att sköta ekonomin på ett modernt sätt.",
    rating: 4,
    avatar: "/images/testimonials/avatar-3.jpg"
  },
  {
    name: "Erik Johansson",
    position: "Ekonomichef",
    company: "Nordisk Design",
    text: "Vi bytte till Redofy för ett år sedan och har inte ångrat oss en sekund. Realtidsrapporterna ger oss en tydlig överblick och kvittohanteringen fungerar perfekt för våra anställda.",
    rating: 5,
    avatar: "/images/testimonials/avatar-4.jpg"
  }
]

const currentIndex = ref(0)
const carouselContainer = ref(null)
let autoplayInterval = null

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextTestimonial()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  startAutoplay()
  
  if (carouselContainer.value) {
    carouselContainer.value.addEventListener('mouseenter', stopAutoplay)
    carouselContainer.value.addEventListener('mouseleave', startAutoplay)
    carouselContainer.value.addEventListener('touchstart', stopAutoplay)
    carouselContainer.value.addEventListener('touchend', startAutoplay)
  }
})

onBeforeUnmount(() => {
  stopAutoplay()
  
  if (carouselContainer.value) {
    carouselContainer.value.removeEventListener('mouseenter', stopAutoplay)
    carouselContainer.value.removeEventListener('mouseleave', startAutoplay)
    carouselContainer.value.removeEventListener('touchstart', stopAutoplay)
    carouselContainer.value.removeEventListener('touchend', startAutoplay)
  }
})
</script>

<style scoped>
.testimonials-section {
  padding: 6rem 0;
  background: linear-gradient(165deg, #f0f9ff, #e0f2fe);
}

.glass-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #0369a1, #0284c7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.testimonials-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  color: #64748b;
}

.testimonials-carousel {
  position: relative;
  margin: 0 auto;
  max-width: 900px;
}

.carousel-container {
  position: relative;
  min-height: 320px;
}

.testimonial-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: none;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.testimonial-content {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.testimonial-rating {
  margin-bottom: 1.5rem;
}

.star {
  font-size: 1.5rem;
  color: #cbd5e1;
}

.star.filled {
  color: #f59e0b;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #1e293b;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 0.25rem;
}

.author-position {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
}

.carousel-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: white;
  color: #0284c7;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.nav-button:hover {
  background: #0284c7;
  color: white;
}

.nav-button svg {
  width: 20px;
  height: 20px;
}

.carousel-dots {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #cbd5e1;
  margin: 0 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dot.active {
  background: #0284c7;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .testimonials-title {
    font-size: 2rem;
  }
  
  .testimonial-content {
    padding: 2rem 1.5rem;
  }
  
  .carousel-container {
    min-height: 380px;
  }
}
</style> 