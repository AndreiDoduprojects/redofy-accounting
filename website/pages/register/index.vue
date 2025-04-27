<template>
  <div>
    <BankIDLogin mode="register" />
  </div>
</template>

<script setup>
import BankIDLogin from '~/components/BankIDLogin.vue';

// SEO metadata
useHead({
  title: 'Registrera konto | Redofy',
  meta: [
    { name: 'description', content: 'Registrera ett nytt konto hos Redofy med BankID för att hantera din redovisning på ett modernt sätt' }
  ]
})
</script> 