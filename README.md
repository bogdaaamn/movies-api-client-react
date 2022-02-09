# Movie Search App

Search movies and watch their trailer. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Written with [TypeScript](https://github.com/microsoft/TypeScript). Based on [Movies API Nestjs](https://github.com/BogDAAAMN/movies-api-nestjs).

![Cover image for Movie Search App](https://user-images.githubusercontent.com/22895284/153308445-35e4b2a3-85cb-43d8-8592-06f1b2b422c0.png)


## Structure

The project is divided in the following routes:

- `/movie/:id` renders `<MoviePage />`
    - `<MovieData movie />` renders the title, plot, duration and release date of the movie
    - `<MovieTrailerFrame url />` renders the YouTube/Vimeo embed for the specified `url`
- `/search` renders `<SearchPage />`
    - `<SearchBar query />` renders an `input` that servers as a search bar and navigates to the search results
    - `<SearchData searchResult />` renders the grid of movie cards based on the `searchResult`
    - `<SearchMovieCard title posterPath votes date />` renders a card containing the movie information
    - `<SearchRecco />` renders a static list of five movies that mainly serves as a placeholder for `<SearchData />`

## Development

### Install

```bash
$ git clone https://github.com/BogDAAAMN/movies-api-client-react/
$ cd movies-api-client-react
$ npm install
```

⚠️ Create and edit an `.env` file, as seen in [`.env.example`](/.env.example).

https://github.com/BogDAAAMN/movies-api-client-react/blob/5007b6c0da6b369caf06768649b210aa24b4a6ed/.env.example#L1

Replace `REACT_APP_API_URL` with the right API URL:

- `http://locahost:3000` if you run [Movies API Nestjs](https://github.com/BogDAAAMN/movies-api-nestjs) locally
- `https://quiet-depths-21248.herokuapp.com/docs` is currently used and deployed

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build and deploy

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Netlify

The project is currently deployed at https://affectionate-noether-30c383.netlify.app/.

⚠️ Manually set the `REACT_APP_API_URL` env variable into the Netlify dashboard before running the first build. Read more at [Build environment variables](https://docs.netlify.com/configure-builds/environment-variables/#declare-variables).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BogDAAAMN/movies-api-client-react)

## API

This app uses the API built at [BogDAAAMN/movies-api-nestjs](https://github.com/BogDAAAMN/movies-api-nestjs). Full documentation available at https://quiet-depths-21248.herokuapp.com/docs/.
