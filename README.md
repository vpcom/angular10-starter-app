# Angular 10 starter app

This project aims at providing a complete Angular 10 progressive web application starter.

Work in progress, more details soon.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Testing the service worker

```
ng build --prod
http-server -p 8080 -c-1 dist/angular10-starter-app
```
And open http://localhost:8080

Note: outside of localhost, the server must use https.

## Good practices

JavaScript: https://google.github.io/styleguide/jsguide.html

CSS: https://github.com/airbnb/css

Angular: https://angular.io/guide/styleguide

Commits: https://www.conventionalcommits.org/

Versioning: https://semver.org/

Changelog: https://keepachangelog.com/
