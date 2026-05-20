# advokat-udin.com.ua — Редизайн

Next.js 16 + Directus CMS + PostgreSQL

## Запуск локально

```bash
source ~/.nvm/nvm.sh && nvm use 22.18.0
npm run dev
```

Сайт: http://localhost:3000

## Directus (CMS)

```bash
# Запустити
docker compose up -d

# Зупинити
docker compose down
```

Адмінка: http://localhost:8055  
Логін/пароль — з `.env.local` (`DIRECTUS_ADMIN_EMAIL` / `DIRECTUS_ADMIN_PASSWORD`)

---

## База даних — шпаргалка

### Стягнути дамп з локального Docker

```bash
docker exec udin-postgres pg_dump -U directus --no-owner --no-acl --no-tablespaces directus > ~/Desktop/dump_clean.sql
```

### Залити дамп на Railway (продакшн)

1. Відкрий Railway → Postgres → Database → SQL-поле, виконай:
   ```sql
   DROP SCHEMA public CASCADE; CREATE SCHEMA public;
   ```

2. Залий дамп через локальний Docker (він має свіжу версію psql):
   ```bash
   docker exec -i udin-postgres psql "postgresql://postgres:ПАРОЛЬ@viaduct.proxy.rlwy.net:53453/railway" < ~/Desktop/dump_clean.sql
   ```
   > Пароль: Railway → Postgres → Connect → Public Network → show

### Стягнути дамп з Railway на локальну базу

1. Очисти локальну базу:
   ```bash
   docker exec udin-postgres psql -U directus directus -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
   ```

2. Стягни дамп з Railway:
   ```bash
   docker exec -i udin-postgres pg_dump "postgresql://postgres:ПАРОЛЬ@viaduct.proxy.rlwy.net:53453/railway" --no-owner --no-acl --no-tablespaces > ~/Desktop/railway_dump.sql
   ```

3. Залий в локальну базу:
   ```bash
   docker exec -i udin-postgres psql -U directus directus < ~/Desktop/railway_dump.sql
   ```

### Чому саме через Docker, а не системний psql?

Системний psql на Mac версії 9.6 — Railway вимагає 10+. Docker-контейнер має актуальну версію.

---

## Змінні середовища

Файл `.env.local` (не в git). Шаблон — `.env.example`.

| Змінна | Опис |
|---|---|
| `POSTGRES_PASSWORD` | Пароль локальної БД |
| `DIRECTUS_ADMIN_EMAIL` | Адмін Directus |
| `DIRECTUS_ADMIN_PASSWORD` | Пароль адміна |
| `DIRECTUS_ADMIN_TOKEN` | Токен для MCP і схем |
| `DIRECTUS_API_TOKEN` | Read-only токен для Next.js |
| `NEXT_PUBLIC_DIRECTUS_URL` | URL Directus (локально: http://localhost:8055) |
| `RESEND_API_KEY` | Ключ для відправки форми |

## Деплой

- **Фронт**: Vercel — автоматично при пуші в `main`
- **Бек (Directus)**: Railway — https://directus-production-24e6.up.railway.app
