# Svenska Komponenter för SEO

Detta bibliotek innehåller svenska komponenter för Redofy-webbplatsen, optimerade för SEO för den svenska marknaden.

## Komponentöversikt

- `Navigering.vue` - Huvudnavigering för webbplatsen (tidigare SvenskNavbar)
- `IsEffekt.vue` - Bakgrundseffekt med is-tema (tidigare IceBackground)
- `Prisplaner.vue` - Prisplanskomponent som visar olika abonnemang (tidigare PricingPlans)
- `KontaktFormular.vue` - Kontaktformulär för användarförfrågningar (tidigare ContactForm)

## SEO-fördelar

Genom att använda svenska namn på komponenter förbättras indexeringen av webbplatsens innehåll för svenska sökmotorer och ökar relevansen för svenskspråkiga användare.

## Användning

Importera komponenter med den korrekta sökvägen:

```vue
import Navigering from '~/components/svensk/Navigering.vue'
import IsEffekt from '~/components/svensk/IsEffekt.vue'
```

Sedan använd komponenterna i din mall:

```vue
<template>
  <div>
    <IsEffekt />
    <Navigering />
    <!-- Resten av ditt innehåll -->
  </div>
</template>
``` 