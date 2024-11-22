# Fietstochten Manager 🚴‍♂️

**Fietstochten Manager** is een Next.js-applicatie waarmee je fietstochten kunt beheren.  
Je kunt fietstochten toevoegen, bekijken, bewerken en verwijderen, inclusief het uploaden van afbeeldingen,  
tekstbeschrijvingen en GPX-tracks. De applicatie maakt gebruik van **Supabase** voor opslag en databasediensten  
en **Tailwind CSS** voor styling.

<img src="https://github.com/docentDavid/fietstochten-manager/blob/main/readme-screenshot.png" alt="project-image" />

---

## 🛠️ Gebruikte Technologieën

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📂 Projectstructuur

Hieronder vind je de mappenstructuur van het project:

```bash
fietstochten-manager/
├── app/
│   ├── fietstochten/
│   │   ├── edit/
│   │   │   └── [id]/page.jsx     # Bewerken van een specifieke fietstocht
│   │   ├── [id]/page.jsx         # Detailpagina van een fietstocht
│   │   ├── upload/page.jsx       # Pagina voor het toevoegen van een fietstocht
│   │   └── page.jsx              # Lijstpagina met alle fietstochten
│   ├── layout.jsx                # Layoutbestand voor de app
│   └── page.jsx                  # Homepagina van de applicatie
│   └── favicon.ico               # Favicon van de applicatie
│   └── globals.css               # Tailwind CSS-stijlen
├── components/
│   └── Modal.js                  # Herbruikbare modalcomponent voor bevestigingen
├── lib/
│   └── supabase.js               # Supabase-configuratie
├── public/
│   └── (images/static files)     # Map voor statische bestanden (Is nu nog leeg)
├── .env.local                    # Omgevingsvariabelen voor Supabase
├── tailwind.config.js            # Tailwind-configuratie
├── postcss.config.js             # PostCSS-configuratie
├── package.json                  # Dependencies en scripts
├── README.md                     # Documentatie
└── LICENSE.md                    # License documentatie
```

---

## 🚀 Functionaliteiten

### Basisfunctionaliteit:

1. **Fietstocht toevoegen**:     Voeg een nieuwe fietstocht toe met een afbeelding, beschrijving en GPX-track.
2. **Fietstocht bekijken**:      Bekijk details van een specifieke fietstocht.
3. **Fietstocht bewerken**:      Pas de titel, beschrijving of bestanden aan van een bestaande fietstocht.
4. **Fietstocht verwijderen**:   Verwijder een fietstocht met een bevestigingsmodal.
5. **Responsive Design**:        Geoptimaliseerd voor mobiel, tablet en desktop dankzij **Tailwind CSS**.

---

## 📦 Installatie

### Vereisten

- Node.js (versie 16 of hoger)
- NPM (standaard meegeleverd met Node.js)
- Supabase-account

### Installatie-instructies

1. **Clone de repository**:
   ```bash
   git clone https://github.com/<jouw-repository>/fietstochten-manager.git
   cd fietstochten-manager
   ```
2. **Installeer dependencies**:
   ```bash
   npm install
   ```
3. **Configureer Supabase**:

   - Maak een nieuw project aan op [Supabase](https://supabase.com/).
   - Maak een bucket genaamd `fietstochten` in Supabase Storage.
   - Maak een tabel (database schema) genaamd `fietstochten` met de volgende kolommen:

     | Kolomnaam     | Type      | Opmerking                 |
     | ------------- | --------- | ------------------------- |
     | `id`          | UUID      | Primary Key, automatisch  |
     | `title`       | TEXT      | Naam van de tocht         |
     | `description` | TEXT      | Beschrijving van de tocht |
     | `image_url`   | TEXT      | URL van de afbeelding     |
     | `gpx_url`     | TEXT      | URL van de GPX-track      |
     | `created_at`  | TIMESTAMP | Datum van toevoeging      |

   - Kopieer je Supabase URL en Anon Key naar een .env.local bestand in de rootmap:

     ```env
     NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
     ```

4. **Start de ontwikkelserver**:

   ```bash
   npm run dev
   ```

   Open de applicatie in je browser op [http://localhost:3000](http://localhost:3000).

---

## 🎨 Styling met Tailwind CSS

De applicatie maakt gebruik van Tailwind CSS voor het creëren van een responsief en modern ontwerp.  
Kleuren zijn gebaseerd op de Granite Color Palette:

| Kleur | Hex       | Voorbeeld                                                              |
| ----- | --------- | ---------------------------------------------------------------------- |
| Blue  | `#38798A` | ![#38798A](https://via.placeholder.com/15/38798A/38798A.png) `#38798A` |
| Teal  | `#70ACCE` | ![#70ACCE](https://via.placeholder.com/15/70ACCE/70ACCE.png) `#70ACCE` |
| Light | `#A5DFF1` | ![#A5DFF1](https://via.placeholder.com/15/A5DFF1/A5DFF1.png) `#A5DFF1` |
| White | `#FFFFFF` | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) `#FFFFFF` |

Voor meer informatie, bekijk het Tailwind-configuratiebestand: tailwind.config.js

---

## 🧩 Componenten

Modal Component
De modal wordt gebruikt om bevestigingen te vragen voordat een fietstocht wordt verwijderd.  
Deze is herbruikbaar en gedefinieerd in components/Modal.js.

```javascript
<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onConfirm={handleDelete}
  title="Fietstocht Verwijderen"
  description="Weet je zeker dat je deze fietstocht wilt verwijderen? Dit kan niet ongedaan worden gemaakt."
/>
```

---

## 📜 Scripts

- `npm run dev`: Start de ontwikkelserver.
- `npm run build`: Bouw de applicatie voor productie.
- `npm run start`: Start de productieversie van de applicatie.

---

## 🔧 Features in de Toekomst

- **Zoekfunctionaliteit**: Zoek fietstochten op titel of beschrijving.
- **Authenticatie**: Voeg gebruikersauthenticatie toe met Supabase.
- **Kaartenintegratie**: Toon GPX-tracks op een interactieve kaart met behulp van Leaflet.js of Mapbox.
- **Database uitbreiding**: Meerdere afbeeldingen, gebruikersnaam, etc.

---

## ✨ Bijdragen

Voel je vrij om bij te dragen aan dit project! Open een pull request of rapporteer een issue.

---

## 📄 Licentie

Dit project is open source en valt onder de [MIT-licentie](LICENSE.md).
