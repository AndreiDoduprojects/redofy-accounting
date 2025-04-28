<template>
  <header class="navigering" :class="{ 'scrolled': isScrolled, 'open': isMenuOpen }">
    <div class="navigering-container morphic-container">
      <div class="navigering-logo">
        <NuxtLink to="/sv">
          <img src="~/assets/images/redofy-logo.svg" alt="Redofy Logotyp" />
        </NuxtLink>
      </div>
      
      <nav class="navigering-meny">
        <ul>
          <li class="dropdown">
            <a href="#" @click.prevent="toggleDropdown('produkter')">Produkter</a>
            <div class="dropdown-innehall" v-show="openDropdown === 'produkter'">
              <div class="dropdown-grupp">
                <h4>Redofy plattform</h4>
                <NuxtLink to="/sv/bokforing">Bokföring</NuxtLink>
                <NuxtLink to="/sv/fakturering">Fakturering</NuxtLink>
                <NuxtLink to="/sv/leverantorsfakturor">Leverantörsfakturor</NuxtLink>
                <NuxtLink to="/sv/utgifter">Utgiftshantering</NuxtLink>
              </div>
              <div class="dropdown-grupp">
                <h4>Funktioner</h4>
                <NuxtLink to="/sv/rapporter">Rapporter &amp; Insikter</NuxtLink>
                <NuxtLink to="/sv/integrationer">Integrationer</NuxtLink>
                <NuxtLink to="/sv/api">API</NuxtLink>
              </div>
            </div>
          </li>
          <li><NuxtLink to="/sv/priser">Priser</NuxtLink></li>
          <li class="dropdown">
            <a href="#" @click.prevent="toggleDropdown('om-oss')">Om oss</a>
            <div class="dropdown-innehall" v-show="openDropdown === 'om-oss'">
              <div class="dropdown-grupp">
                <NuxtLink to="/sv/om-oss">Vårt företag</NuxtLink>
                <NuxtLink to="/sv/karriar">Karriär</NuxtLink>
                <NuxtLink to="/sv/kontakt">Kontakta oss</NuxtLink>
              </div>
            </div>
          </li>
          <li><NuxtLink to="/sv/blogg">Blogg</NuxtLink></li>
        </ul>
      </nav>
      
      <div class="navigering-right">
        <NuxtLink to="/sv/login" class="navigering-login">Logga in</NuxtLink>
        <NuxtLink to="/sv/registrera" class="morphic-button primary">Kom igång gratis</NuxtLink>
        
        <button class="language-toggle" @click="toggleLanguage">
          <span>SV</span>
          <div class="language-dropdown">
            <NuxtLink to="/" class="language-option">EN</NuxtLink>
          </div>
        </button>
        
        <button class="mobile-menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const openDropdown = ref(null)
const showLanguageOptions = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const toggleDropdown = (name) => {
  openDropdown.value = openDropdown.value === name ? null : name
}

const toggleLanguage = () => {
  showLanguageOptions.value = !showLanguageOptions.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navigering {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0);
}

.dark-mode .navigering {
  background-color: var(--morphic-neutral-900);
}

.navigering.scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navigering-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 24px;
}

.navigering-logo img {
  height: 32px;
}

.navigering-meny ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navigering-meny li {
  margin: 0 16px;
  position: relative;
}

.navigering-meny a {
  color: var(--morphic-text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.navigering-meny a:hover {
  color: var(--morphic-primary-color);
}

.dropdown {
  position: relative;
}

.dropdown-innehall {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 20px;
  min-width: 480px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  z-index: 10;
}

.dropdown-grupp {
  margin-right: 40px;
}

.dropdown-grupp h4 {
  font-size: 14px;
  margin-bottom: 12px;
  color: var(--morphic-text-light);
}

.dropdown-grupp a {
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
}

.navigering-right {
  display: flex;
  align-items: center;
}

.navigering-login {
  margin-right: 20px;
  color: var(--morphic-text-color);
  text-decoration: none;
  font-weight: 500;
}

.language-toggle {
  margin-left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: none;
}

.language-toggle:hover .language-dropdown {
  display: block;
}

.language-option {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
  color: var(--morphic-text-color);
  font-weight: 400;
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  width: 24px;
  height: 20px;
  position: relative;
  cursor: pointer;
  margin-left: 16px;
}

.mobile-menu-toggle span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--morphic-text-color);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-toggle span:nth-child(1) {
  top: 0;
}

.mobile-menu-toggle span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.mobile-menu-toggle span:nth-child(3) {
  bottom: 0;
}

.open .mobile-menu-toggle span:nth-child(1) {
  top: 9px;
  transform: rotate(45deg);
}

.open .mobile-menu-toggle span:nth-child(2) {
  opacity: 0;
}

.open .mobile-menu-toggle span:nth-child(3) {
  bottom: 9px;
  transform: rotate(-45deg);
}

@media (max-width: 1024px) {
  .navigering-meny {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;
  }
  
  .open .navigering-meny {
    display: block;
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: white;
    padding: 20px;
    overflow-y: auto;
  }
  
  .open .navigering-meny ul {
    flex-direction: column;
  }
  
  .open .navigering-meny li {
    margin: 16px 0;
  }
  
  .open .dropdown-innehall {
    position: static;
    box-shadow: none;
    padding: 0;
    padding-left: 20px;
    min-width: auto;
    display: block;
    margin-top: 10px;
  }
  
  .open .dropdown-grupp {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .navigering-login {
    display: none;
  }
  
  .navigering-right .morphic-button {
    display: none;
  }
  
  .open .navigering-login, 
  .open .navigering-right .morphic-button {
    display: block;
    margin: 16px 0;
  }
}
</style> 