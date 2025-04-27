<template>
  <div>
    <BankIDLogin mode="login" />
  </div>
</template>

<script setup>
import BankIDLogin from '~/components/BankIDLogin.vue';

// SEO metadata
useHead({
  title: 'Logga in | Redofy',
  meta: [
    { name: 'description', content: 'Logga in på ditt Redofy-konto med BankID' }
  ]
})
</script> 