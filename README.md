# PipelinePathApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Despliegue en GitHub Pages y Pipeline CI/CD

Este repositorio cuenta con un pipeline automatizado mediante **GitHub Actions** configurado en [.github/workflows/deploy-github-pages.yml](.github/workflows/deploy-github-pages.yml):

- **Disparadores:** Se ejecuta automáticamente ante cada `push` en las ramas `develop` y `master`, o manualmente vía `workflow_dispatch`.
- **Estrategia de Enrutamiento:** Utiliza `PathLocationStrategy` de Angular. Para evitar errores 404 al recargar rutas directas en GitHub Pages, el pipeline copia automáticamente `index.html` hacia `404.html`.
- **Flujo de Trabajo:**
  1. Descarga el código (`actions/checkout@v4`).
  2. Prepara el entorno Node.js 24 con caché de dependencias (`actions/setup-node@v4`).
  3. Instala dependencias (`npm ci`).
  4. Ejecuta la suite de pruebas unitarias con Vitest (`npm test`).
  5. Compila la aplicación en modo producción especificando `--base-href /Laboratorio-Pipeline-Path-App/`.
  6. Configura el fallback de SPA copiando `index.html` a `404.html`.
  7. Publica en GitHub Pages (`actions/deploy-pages@v5`).
  8. Verifica con reintentos vía `curl` que la URL pública responda con código de estado HTTP 200.

**Aplicación desplegada:** [https://kemelo996.github.io/Laboratorio-Pipeline-Path-App/](https://kemelo996.github.io/Laboratorio-Pipeline-Path-App/)

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
