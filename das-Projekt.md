1. Gesamtkonzept & Markenidentität
Ziel: Eine luxuriöse, immersive Erfahrung, die den Besucher in die "Seele Afghanistans" eintauchen lässt. Die Site muss auf allen Geräten perfekt funktionieren (Mobile-First-Ansatz).
Ton: Authentisch, vertrauensvoll, exklusiv. Vermeidung von Klischees; Fokus auf echte Geschichten und Erlebnisse.
Key Performance Indicators (KPIs): Hohe Conversion-Rate für Anfragen/Buchungen, niedrige Bounce-Rate, starke Social-Proof durch Testimonials.
Zielgruppe: Abenteuerlustige aus Europa/Nordamerika – daher englische/deutsche Inhalte, aber skalierbar für Mehrsprachigkeit.
2. Technische Infrastruktur
Frontend-Stack:
Next.js 14+: App Router für optimale Performance, SEO und Server-Side Rendering (SSR). Ermöglicht statische Generierung für schnelle Ladezeiten.
Tailwind CSS: Für rapid Prototyping und konsistente, responsive Designs. Custom Theme basierend auf der Farbpalette.
TypeScript: Für Typsicherheit und bessere Wartbarkeit.
Zusätzliche Libraries:
Framer Motion für subtile Animationen (z.B. Hero-Video-Transitions).
Next.js Image für optimierte Bildladung.
React Hook Form für Formulare.
Hosting & Deployment:
Vercel: Nahtlose Integration mit Next.js, automatische Skalierung, CDN für globale Performance.
Domain: khorasan-adventures.com (fiktiv, aber professionell).
Zukünftige Erweiterungen:
Backend: Strapi oder Sanity für CMS, um Inhalte dynamisch zu verwalten (z.B. Tour-Beschreibungen, Bilder).
Datenbank: MongoDB für User-Daten, Buchungen.
Analytics: Google Analytics 4, Hotjar für UX-Insights.
E-Commerce: Stripe für Zahlungen, wenn Buchungen integriert werden.
Performance-Optimierung: Lighthouse-Score >90. Lazy Loading, Code-Splitting, optimierte Bilder (WebP-Format).
3. Seitenstruktur & Navigation
Globale Navigation (Navbar):
Logo (Khorasan mit elegantem Icon), Slogan.
Menü: Home, Tours, Accommodations, About, Philosophy, Safety, Contact.
CTA-Button: "Book Your Adventure" (grün, prominent).
Mobile: Hamburger-Menü mit Slide-In-Animation.
Footer: Links zu Impressum, Datenschutz, Social Media (Instagram, Facebook), Copyright.
Seiten-Übersicht:
Homepage (/):
Hero-Section: Fullscreen-Video (Afghanistan-Landschaft) mit Overlay-Text und CTA.
Tour-Overview: 2 Karten (10-Tage & 14-Tage Tour) mit Bild, Titel, Kurzbeschreibung, "Learn More"-Button.
Intro-Section: "Who We Are" mit Kernwerten (Authentizität, Sicherheit, Soziales Engagement).
Individualists-Section: "Basecamp for Explorers" mit 5 Accommodation-Karten, "View Accommodations"-Button.
Testimonials: 3 Slider-Karten mit fiktiven Reviews.
Tours (/tours):
Dropdown-Menü: "Heart of Afghanistan" (10 Tage), "Great Afghanistan Expedition" (14 Tage).
Detail-Seiten (/tours/heart-of-afghanistan): Tag-für-Tag-Itinerary, Inkludierte/Nicht-Inkludierte Leistungen, Preis, Galerie, "Inquire/Book"-Button.
Accommodations (/accommodations):
"Basecamp for Explorers" – Vorstellung von 10 Häusern (Grid-Layout mit Bildern, Beschreibungen, Preisen).
Einfaches Anfrage-Formular (Name, Email, Dates, Message).
About (/about): Geschichte, Gründer/Guides (mit Fotos), Engagement für Sicherheit.
Philosophy (/philosophy): Sozialer Impact, Galerie (5-6 Bilder), Unterstützung von Frauen/Bauern.
Safety & Trust (/safety): Detaillierte Sicherheitsmaßnahmen, FAQ, Gesundheitshinweise.
Contact (/contact): Formular, Kontaktdaten, Allgemeine FAQ.
4. Design-System
Farbpalette (Tailwind Custom):
Primary: bg-lapis (deep blue #0F4C75), bg-ruby (#D32F2F), bg-emerald (#2E8B57).
Secondary: bg-sand (#F4E4BC), bg-stone (#A9A9A9), bg-brown (#8B4513).
Accents: text-black, text-white, text-gold (#FFD700).
Dark Mode: Optional, aber primär hell mit dunklen Akzenten für Luxus.
Typografie:
Headlines: Font "Playfair Display" (Serif, elegant) – geladen via Google Fonts.
Body: Font "Inter" (Sans-Serif, lesbar).
Größen: Responsive (z.B. text-4xl auf Desktop, text-2xl auf Mobile).
Komponenten:
Buttons: Rounded, mit Hover-Effects (Scale + Shadow).
Cards: Mit Bildern, Overlays für Text.
Forms: Styled Inputs mit Fokus-States.
Galerien: Masonry-Layout für Bilder.
Icons: Heroicons oder Lucide für Konsistenz.
Layout: Max-Width 1200px, Padding/Margins responsive. Grid-System für Flexibilität.
Bilder: Hochauflösende Stock-Fotos (Unsplash/Pexels) von Afghanistan (Landschaften, Kultur). Lazy-Loading, Alt-Texte für SEO.
5. Inhaltsstrategie
Copy: Professionell, emotional, call-to-action-stark. Deutsche/Englische Texte basierend auf das-Projekt.md.
Bilder/Galerien: 20-30 Hochwertige Bilder pro Tour/Accommodation. Video für Hero (YouTube-Embed oder Hosted).
SEO: Meta-Tags, Structured Data für Tours. Keywords: "Afghanistan Adventure Tour", "Authentic Afghanistan Travel".
Social Proof: Fiktive Testimonials mit Namen, Ländern, Zitaten.





Projektziel: Erstelle eine professionelle, moderne und luxuriöse Webseite für das fiktive Reiseunternehmen "Khorasan". Die Webseite soll Abenteuerlust wecken, und gleichzeitig reiche Kultur Afghanistans präsentieren und zudem ein Höchstmaß an Vertrauen und Sicherheit vermitteln.


1. Markenidentität & Kernaussage:


Firmenname: Khorasan

Slogan (Vorschlag): "Entdecke die Seele Afghanistans. Authentisch. Sicher. Unvergesslich."

Zielgruppe: Abenteuerlustige, kulturinteressierte Einzelreisende und Kleingruppen aus Europa und Nordamerika, die eine einzigartige und tiefgründige Reiseerfahrung abseits des Massentourismus suchen.

Kernaussagen:

Authentizität: Wir bieten keine Touristen-Show, sondern echtes Eintauchen in die afghanische Kultur durch Übernachtungen in lokalen Häusern und Begegnungen auf Augenhöhe.

Sicherheit: Deine Sicherheit ist unsere oberste Priorität. Wir arbeiten mit erfahrenen, lokalen Guides und einem etablierten Sicherheitsnetzwerk.

Soziale Verantwortung: Mit deiner Reise unterstützt du direkt die lokale Bevölkerung, insbesondere Frauen, die als Köchinnen arbeiten, sowie lokale Handwerker und Bauern.

Exklusivität: Wir bieten einzigartige Erlebnisse in unberührter Natur und an historischen Orten, die nur wenige Reisende zu sehen bekommen.


2. Visuelles Design & Atmosphäre:

Stil: Modern, clean, luxuriös, aber dennoch erdig und authentisch. Eine Mischung aus "National Geographic"-Abenteuer und "Boutique-Hotel"-Eleganz.

Farbpalette:
Primär: Tiefe, satte Farben, inspiriert von afghanischen Teppichen und Edelsteinen (Lapisblau, Rubinrot, Smaragdgrün).

Sekundär: Erdige Töne (Sandbeige, Steingrau, warmes Braun).
Akzente: Schwarz, Weiß und ein Hauch von Gold für einen luxuriösen Touch.

Typografie:
Überschriften: Eine elegante Serifenschrift, die Tradition und Klasse ausstrahlt.

Fließtext: Eine moderne, sehr gut lesbare serifenlose Schrift, die Professionalität und Klarheit vermittelt.

Bildsprache: Absolut entscheidend! Ausschließlich hochauflösende, professionelle Fotos:

Landschaften: Epische, atemberaubende Aufnahmen von Bergen, Tälern und Steppen (z.B. Band-e-Amir, Panjshir-Tal).

Kultur & Menschen: Respektvolle, authentische Porträts von lächelnden Menschen (Guides, Köchinnen, Handwerker), lebhafte Szenen aus Bazaren (kein Chaos, sondern Ästhetik).

Details: Nahaufnahmen von Handwerkskunst, Essen, Architekturmustern.

Action: Bilder von Reisenden beim Wandern, Reiten oder auf einer Jeep-Tour (Gesichter voller Freude und Staunen).


3. Struktur und Inhalt der Webseite (Seitenaufbau):

1. Navbar.

2. Startseite (Homepage):
a. Hero Section: Ein bildschirmfüllendes, atemberaubendes Landschaftsvideo oder Foto mit dem Slogan und einem klaren Call-to-Action-Button: "Unsere Abenteuer entdecken".

b. Tour-Übersicht: 
Zwei ansprechende Blöcke, die die 10-tägige und die 14-tägige Reise vorstellen. Jeweils mit einem eindrucksvollen Bild, Titel, kurzer Beschreibung und einem "Mehr erfahren"-Button.

c. Kurzvorstellung: Ein kurzer, packender Abschnitt: "Wer wir sind und was uns antreibt." Mit den drei Kernpunkten: Authentizität, Sicherheit, Nachhaltigkeit.

d. Für Individualisten: Ein eigener Bereich für das Unterkunfts-Angebot ("Das Basecamp für Entdecker") es sollen 5 unterkünfte dargestellt werden und mit Button "Unterkünfte ansehen", wo man dann weiter auf "Unterkünfte für Entdecker" weiter geleitet wird..

e. Social Proof (Vertrauen): Ein Bereich mit 2-3 kurzen, prägnanten Testimonials von fiktiven Kunden.

3. Tour-Übersicht: 
Zwei ansprechende Blöcke, die die 10-tägige und die 14-tägige Reise vorstellen. Jeweils mit einem eindrucksvollen Bild, Titel, kurzer Beschreibung und einem "Mehr erfahren"-Button.

Unsere Reisen (Dropdown-Menü mit zwei Unterpunkten):

"Das Herz Afghanistans" (10-Tage-Tour):

Detaillierte Tag-für-Tag-Beschreibung der Reiseroute.

Inkludierte Leistungen (Unterkunft, Verpflegung, Guide, Transport, etc.).

Nicht inkludierte Leistungen.

Preisangabe.

Bildergalerie speziell zu dieser Tour.

Ein prominenter "Jetzt anfragen / Buchen"-Button.


"Die große Afghanistan-Expedition" (14-Tage-Tour):

Gleicher Aufbau wie bei der 10-Tage-Tour.


4. Unterkünfte für Entdecker/Für Individualisten: Ein eigener Seite für das Unterkunfts-Angebot ("Das Basecamp für Entdecker")

Unterkünfte für Entdecker:

Beschreibung des Konzepts: Mehr als nur ein Bett – ein Treffpunkt für Reisende.

Vorstellung von 10 Häuser in den verschiedenen Provinzen (mit Fotos von den Gemeinschaftsbereichen und Zimmern).

Informationen zur Ausstattung und Verpflegungsmöglichkeiten.

Preis pro Nacht.

Ein einfaches Buchungs- oder Anfrageformular.


5. Über Uns / Unsere Philosophie:

Die Geschichte hinter "Khorasan".

Vorstellung des Gründers/der Guides (mit Foto und kurzem Text, um Vertrauen aufzubauen).

Ein detaillierter Abschnitt über das Engagement für Sicherheit.

Ein detaillierter Abschnitt über den sozialen und nachhaltigen Ansatz (die Rolle der Köchinnen, die Unterstützung der lokalen Wirtschaft).


6. Unsere Philosophie: Ein visueller Abschnitt, der den sozialen Aspekt hervorhebt (Unterstützung von Frauen und lokalen Betrieben).

Bildergalerie: Eine beeindruckende, kuratierte Auswahl der besten 5-6 Fotos.


7. Kontakt-/Anfrageformulare: Einfach zu bedienende Formulare für Touren und Unterkünfte.



8. Sicherheit & Vertrauen (Eigene, wichtige Seite!):

Detaillierte Erklärung der Sicherheitsvorkehrungen.

Informationen zur Erfahrung der Guides.

Gesundheitshinweise (Impfungen, Reiseapotheke).

FAQ-Bereich speziell zum Thema Sicherheit.

Kontakt & FAQ:

Kontaktformular und Kontaktdaten (E-Mail, Telefonnummer).

Allgemeine FAQs zur Reisevorbereitung, Visum, Kleidung, Kultur etc.



Funktionalität:
Responsives Design: Perfekte Darstellung auf allen Geräten (Desktop, Tablet, Smartphone).

Bildergalerien: Hochwertige, schnell ladende Galerien.

Klare Navigation: Eine intuitive und einfache Menüführung.



wir fokussieren uns erstmal auf frontend ui/ux.