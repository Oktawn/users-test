# Users Test API

## 🚀 Технологический стек

- **Node.js** 
- **TypeScript** 
- **Express.js** 
- **TypeORM** 
- **Knex.js** 
- **PostgreSQL** 
- **Docker** 


##  Переменные окружения (.env)

Создайте файл `.env` в корне проекта со следующими переменными:

```env
# API настройки
API_PORT=3000

# База данных
DB_HOST=db-service
DB_USERNAME=postgres
DB_PASSWORD=your_secure_password
DB_DATABASE=users_db
DB_PORT=5432
DB_EXTERNAL_PORT=5433

# JWT настройки
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
```

## Запуск приложения

1. Убедитесь, что Docker и Docker Compose установлены
2. Создайте файл `.env` с необходимыми переменными
3. Запустите приложение:

```bash
docker compose up
```

Для запуска в фоновом режиме:
```bash
docker compose up -d
```

##  Доступные эндпоинты

#### Аутентификация (`/auth`)
- `POST /auth/register` - регистрация нового пользователя
- `POST /auth/login` - вход пользователя

#### Пользователи (`/users`)
- `GET /users` - получение списка пользователей (требует аутентификации)
- `GET /users/:id` - получение информации о пользователе по ID (требует аутентификации)
- `PUT /users/:id` - блокировка пользователя по ID (требует аутентификации)

### Примеры запросов

#### Регистрация пользователя
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword",
    "name": "John Doe",
    ...
  }'
```

#### Вход в систему
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword"
  }'
```

#### Получение информации о пользователе (с токеном)
```bash
curl -X GET http://localhost:3000/users/:id \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```


##  Примечания

- Приложение автоматически применяет миграции при запуске
- Тестовые данные загружаются через seeds