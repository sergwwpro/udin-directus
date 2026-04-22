# Проект: advokat-udin.com.ua — Редизайн

## Клиент
**Олег Юдін** — адвокат, медичне право, Україна.  
Захищає лікарів, клініки та відділення від скарг пацієнтів, кримінальних проваджень, перевірок. **Ніколи не захищає пацієнтів** — це ключове позиціонування.  
Контакти: `0 800 210 195` · `067 925 08 36` · `[email protected]`

## Статус
- ✅ Головна сторінка (`/`) — готова
- ✅ Сторінка для клінік (`/clinic`) — готова
- ✅ Сторінка для лікарів (`/doctor`) — готова
- ✅ Сторінка для відділень (`/department`) — готова
- ⬜ Backend для форми (зараз заглушка в `app/api/contact/route.ts`)
- ⬜ CMS Directus — відкладено
- ⬜ RU/EN переклади — відкладено

## Стек
- **Next.js 16** App Router · React 19 · TypeScript strict
- **Tailwind CSS v4** (CSS-first `@theme` в `globals.css`)
- **Framer Motion** — scroll fade/slide анімації
- **react-hook-form + zod + sonner** — форма контакту
- **lucide-react + clsx + tailwind-merge**
- Node 22 (nvm): `source ~/.nvm/nvm.sh && nvm use 22.18.0`
- Dev-сервер: `npm run dev` → http://localhost:3000

### Принцип lean dependencies
Проект навмисно мінімалістичний. Поточні залежності виправдані:
- `framer-motion` — єдиний спосіб отримати `whileInView` без написання власного IntersectionObserver
- `react-hook-form` — форма без нього = купа useState + ручна валідація
- `zod` — типобезпечна схема і для клієнта, і для API route (один source of truth)
- `sonner` — toast без нього потребує власного portal + state
- `clsx + tailwind-merge` — разом дають `cn()`, кожна з них ~1kb

**Перед додаванням нової бібліотеки — обов'язково запитати:**
1. Чи можна зробити це нативними засобами CSS/JS/React за 10–20 рядків?
2. Чи використовується це більш ніж в одному місці?
3. Який розмір бандла (bundlephobia.com)?

**Не додавати без явної потреби:** axios (є `fetch`), date-fns (є `Intl.DateTimeFormat`), lodash, Redux/Zustand (немає складного стану), shadcn/ui (компоненти пишемо власні), i18n-бібліотеки (поки контент у TS-файлах).

## Дизайн-система

### Палітра (CSS vars в `globals.css`)
```
--paper:        #F5F1EA   ← основний фон
--paper-raised: #ECE7DD   ← підвищений фон (блоки, форми)
--ink:          #111111   ← текст, контрастні блоки
--muted:        #6E6A60   ← вторинний текст
--hairline:     #D9D3C6   ← розділювачі (1px)
--accent:       #7A5F2E   ← muted gold (єдиний акцент)
--accent-bright:#9C7A3C   ← на темному фоні
--danger:       #A23B2A   ← проблеми, болі (тільки на clinic/doctor)
```

### Типографіка
- Serif заголовки: **Fraunces** (variable, `--font-serif`) → CSS class `.display-hero / .display-xl / .display-lg`
- Тіло: **Inter** (`--font-sans`)
- Eyebrow: `.eyebrow` — 11px, uppercase, tracking 0.18em, color muted

### Ключові правила
- Hairline (1px) замість тіней і товстих рамок
- Один акцентний колір на секцію
- Асиметрична 12-колоночна сітка
- Framer Motion: `duration 0.7, ease [0.22, 1, 0.36, 1]` — нічого bounce/spring
- Жодних градієнтів, round-full кнопок, emoji
- Dark mode — немає

## Структура файлів
```
app/
  page.tsx                 ← головна
  clinic/page.tsx          ← клініки
  doctor/page.tsx          ← лікарі
  department/page.tsx      ← відділення
  layout.tsx               ← шрифти (Fraunces + Inter), Toaster, metadata
  globals.css              ← CSS vars + .display-* + .eyebrow + .paper-grain
  api/contact/route.ts     ← заглушка форми (zod валідація + console.log)

components/
  layout/
    Header.tsx             ← sticky, blur при скролі > 16px, монограма ОЮ
    Footer.tsx             ← 3 колонки, hairline, копірайт
  sections/
    Hero.tsx               ← головна, 2 CTA + плейсхолдер портрета
    Manifesto.tsx          ← темний блок, цитата + 3 пункти (01/02/03)
    About.tsx              ← портрет + біографія Олега
    Services.tsx           ← 3 рядки-посилання на підсторінки
    TrustSignals.tsx       ← 4 великі цифри (20+ / 4 / 200+ / 1)
    Contact.tsx            ← форма (react-hook-form) + 2 телефони + email
    clinic/
      ClinicHero.tsx       ← H1 + pull-quote "Минеться!"
      ClinicProblems.tsx   ← 3 кейси (danger accent)
      ClinicSolution.tsx   ← темний блок "Запам'ятайте"
      ClinicIncluded.tsx   ← 9 послуг нумерованим списком + 3 гарантії
      ClinicPricing.tsx    ← Standart/Gold/Premium тарифи
      ClinicScenarios.tsx  ← "герої історій" великим серифом
      ClinicCrossLinks.tsx ← посилання на doctor/department + назад
    doctor/
      DoctorHero.tsx       ← H1 + pull-quote "За чашку кави в день"
      DoctorProblems.tsx   ← 9 новинних заголовків (danger) + аналіз
      DoctorGuarantees.tsx ← темний блок, 4 гарантії 2×2 (ink bg)
      DoctorPricing.tsx    ← Basic/Gold/Premium з feature list (— core, + extras)
      DoctorEconomics.tsx  ← економічне обгрунтування + stat $35/міс
      DoctorCrossLinks.tsx ← посилання на clinic/department + назад
    department/
      DepartmentHero.tsx     ← H1 + pull-quote "Один договір"
      DepartmentProblem.tsx  ← темний блок "вас можуть здати" + 4 причини
      DepartmentAudience.tsx ← "для кого": завідувач + команда (2 cards)
      DepartmentIncluded.tsx ← 6 послуг нумерованим списком
      DepartmentPricing.tsx  ← один тариф $1500, ink card з 4 перевагами
      DepartmentCrossLinks.tsx ← посилання на clinic/doctor + назад
  ui/
    Container.tsx          ← max-w-[1440px] + side padding
    Button.tsx             ← primary (ink bg) / ghost (underline) / outline
    Input.tsx + Textarea   ← нижній border-bottom, label uppercase
    SectionDivider.tsx     ← 1px hairline
    PortraitPlaceholder.tsx← aspect 3/4 або 4/5, монограма 8% opacity
  motion/
    FadeIn.tsx             ← whileInView scroll анімація (once: true)

content/
  ua.ts                    ← ВЕСЬ текст головної (типізований as const)
  clinic-ua.ts             ← текст сторінки клінік
  doctor-ua.ts             ← текст сторінки лікарів
  department-ua.ts         ← текст сторінки відділень

lib/
  utils.ts                 ← cn() helper (clsx + tailwind-merge)
  contact-schema.ts        ← zod schema для форми
```

## Контент сторінок (коротко)

### Головна (`/`)
Hero → Manifesto → About → TrustSignals → Services → Contact → Footer

### Клініки (`/clinic`)
Тарифи: **Standart** 18k грн (10 год) · **Gold** 27k грн (20 год) · **Premium** 33k грн (30 год)  
Додаткова година: 2500 / 2100 / 1800 грн відповідно  
9 послуг в усіх пакетах — різниця тільки в обсязі годин

### Лікарі (`/doctor`)
DoctorHero → DoctorProblems → DoctorGuarantees → DoctorPricing → DoctorEconomics → DoctorCrossLinks → Contact  
Тарифи: **Basic** $300 · **Gold** $420 · **Premium** $660 на рік  
6 базових послуг у всіх тарифах, Gold+ додає НПА-запити і МОЗ, Premium — ДФС/СЕС/репутацію/документи  
Ключова фраза: «За чашку кави в день» ($35/міс за Gold)

### Відділення (`/department`)
DepartmentHero → DepartmentProblem → DepartmentAudience → DepartmentIncluded → DepartmentPricing → DepartmentCrossLinks → Contact  
Єдиний тариф: **$1 500 / рік** (~$25 на лікаря на місяць), до 5 лікарів одного відділення  
Ключовий біль: "директори обирають здати лікаря" — завідувач купує пакет для захисту команди  
6 послуг включено; оплата щорічно при підписанні договору (у грн за курсом НБУ)

## Компоненти для повторного використання при нових сторінках
- `Header`, `Footer` — без змін
- `Contact` — універсальний, підходить будь-якій сторінці
- `FadeIn` — для всіх scroll-анімацій
- `Container`, `Button`, `Input`, `Textarea` — примітиви
- `PortraitPlaceholder` — якщо потрібен плейсхолдер

## Паттерни секцій (для нових сторінок)
```
// Hero service page pattern:
eyebrow → H1 (display-hero) → pull-quote (display serif) → body → 2 CTA

// Dark block pattern (ink bg):
eyebrow (paper/60) → great quote (display-xl) → supporting text (paper/70)

// Pricing pattern:
eyebrow → title (display-xl) → lead → 3 tier cards
- рекомендований тариф: bg-ink, text-paper, border-ink
- решта: bg-paper, border-hairline

// Section row pattern (Services, CrossLinks):
[mark display-5xl accent/60] [title display-lg] [description] [arrow ↗]
border-b hairline, hover: bg-paper/50 + mark/arrow → accent
```

## Тести і якість (майбутня ітерація)

### Unit тести — Vitest + React Testing Library
- Тестувати: `cn()`, zod-схему форми, логіку валідації
- Компоненти: рендер Button у всіх variants, Input з error-станом
- Команда: `npx vitest`

### E2E тести — Playwright
- Критичні сценарії: відправка форми контакту (успіх + валідаційна помилка), навігація по сторінках
- Перевірка: наявність H1 на кожній сторінці, видимість CTA
- Команда: `npx playwright test`

### Метрики якості — Lighthouse CI
- Цілі: Performance ≥ 90 · Accessibility ≥ 95 · SEO = 100 · Best Practices ≥ 90
- Запускати: після кожної нової сторінки
- Команда: `npx lighthouse http://localhost:3000 --output=json`

### Accessibility (a11y) checklist
- Контраст тексту AA (4.5:1 для body, 3:1 для великих заголовків)
- Focus-ring видимий на всіх інтерактивних елементах
- Skip-link до `#main` (вже є в layout.tsx)
- Aria-labels на формі та навігації
- Семантичний HTML (h1 один на сторінку, ol/ul замість div-списків)

## Важливо
- Шрифти Fraunces + Inter підтримують кирилицю (subset: cyrillic)
- Hydration warning від LastPass — не баг, ігнорувати
- Портрет Олега Юдіна поки відсутній → PortraitPlaceholder
- `npm run dev` потребує Node 22 через nvm (системний Node = 16)
