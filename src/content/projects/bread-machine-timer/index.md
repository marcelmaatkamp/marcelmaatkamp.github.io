---
title: "Artisan Timer – Bread Machine"
description: "Stop doing the math. Tell the app when you want fresh bread — it calculates the exact delay to set on your bread machine."
pubDate: 2026-03-26
heroImage: "/projects/bread-machine-timer/feature_graphic.png"
images:
  - "/projects/bread-machine-timer/01_store_timer.png"
  - "/projects/bread-machine-timer/02_store_recipes.png"
  - "/projects/bread-machine-timer/03_store_widget.png"
platform: "Android"
link: "https://play.google.com/store/apps/details?id=com.marcelmaatkamp.breadmachinetimer"
tags: ["android", "kotlin", "compose-multiplatform", "kmp"]
---

**Artisan Timer** solves a surprisingly annoying daily problem: your bread machine needs a delay value (hours + minutes), but you just want to say _"I want fresh bread at 8am"_. This app does the maths instantly.

### How It Works

1. Pick a bread preset — or set a custom bake duration with the wheel picker
2. Choose the time you want fresh bread ready
3. The app shows you the exact delay to enter on your machine

No account. No cloud. Works completely offline.

### Key Features

- **Instant delay calculation** — enter ready time, get the delay value immediately
- **7 bread presets** — White, Whole Wheat, French, Sourdough, Rye, Sweet, Quick Bake
- **Home screen widget** — see your delay at a glance without opening the app
- **Notification** — optional alert when your bread should be ready
- **Real-time countdown** — updates every minute while a timer is running
- **12h / 24h support** — matches your system preference
- **EN + NL** — English and Dutch language support

### Built With

- **Kotlin Multiplatform** — shared business logic across platforms
- **Compose Multiplatform** — native Android UI
- **Glance** — Android home screen widget
- **Koin** — dependency injection
- **multiplatform-settings** — persistent preferences

v2.0 is a complete rewrite from the original React Native/Expo version — faster, smaller, and fully native.
