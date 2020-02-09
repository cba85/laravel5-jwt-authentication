# JWT Authentication

## 1. Install Laravel, nuxt.js and Bulma

```
$ php artisan migrate
```

- https://fr.nuxtjs.org/guide/installation
- delete Auth directory
- delete views directory
- clean web routes
- add bulma in nuxt.config.js
- clean pages/index.vue
- clean layouts/default.vue

## 2. JWT Auth

- Install https://github.com/tymondesigns/jwt-auth
- Update composer to use 1.0.0
- Update User.php

```
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

```
php artisan jwt:secret
```

- Update config/auth.php

```
php artisan make:controller Auth\\RegisterController
```

- Aller sur POST | `/api/register` dans Postman (avec Accept: Application/json) en mettant les paramètres (email, name, password) dans Body

## 3. API Authentication

```
php artisan make:controller Auth\\LoginController
```

- Aller sur POST | `/api/login` dans Postman (avec Accept: Application/json) en mettant les paramètres (email, password) dans Body

## 4. Api Resource

```
php artisan make:resource UserResource
```

## 5. Me endpoint

- Modifier dans Postman "Authorization" et mettre Bearer
- Aller sur GET | `/api/me` dans Postman (avec Accept: Application/json) en mettant le paramètre (token) dans Body

### 6. Nuxt Auth

```
npm install @nuxtjs/auth @nuxtjs/axios
```

- Modify nuxt.config.js

### 7. Login

- Install Vue.js devtools
- Create index.js in store (https://nuxtjs.org/guide/vuex-store)
- Create signin.vue in pages
- Installer https://github.com/barryvdh/laravel-cors
- Create a mixin plugin and update nuxt.config.js
- Create authentificated v-if and nuxt-link in topnav template

### 8. Logout

- Create route in routes/api.php

```
php artisan make:controller Auth\\LogoutController
```

### 9. Form validation

- create store/validation.js
- create plugins/axios.js
- add plugin in nuxt.config.js
- create plugins/mixins/validation.js
- create middleware/clearValidationErrors.js
- add middleware in nuxt.config.js

### 10. Signup

- create signup.vue

### 11. Auth/guest middleware

- create dashboard.vue
- add redirect in nuxt.config.js
- create middleware/guest.js
- add middleware in nuxt.config.js