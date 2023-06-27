# THE CITY's Full-page React Template for News Apps

[THE CITY](https://www.thecity.nyc/pages/about) is a nonprofit, nonpartisan, digital newsroom dedicated to hard-hitting reporting that serves the people of New York. We publish news apps and data graphics regularly, and we try and open source as much of our code as we can so that others can use it. You can check out a list of our recent projects on [THE CITY Projects Page](https://projects.thecity.nyc/all-projects/).

This template is what we use to create single-page interactive projects, and it is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The deployment process is based in part on the [Baker Rig](https://github.com/datadesk/baker) project by the L.A. Times.

## 🚀 Getting started

The first step is to click GitHub’s “use this template” button to a make a copy of the repository for yourself.

![](./.github/images/use-this-template.png)

You’ll be asked to provide a slug for your project. Once that’s done, a new repository will be available at `https://github.com/your-username/your-slug`.

Next you’ll need to clone it down to your computer to work with the code.

Open up your terminal and cd to your code folder. Clone the project into your folder. This will copy the project onto your computer.

```sh
gh repo clone https://github.com/your-username/your-slug
```

Once the repository has finished downloading, cd into your-slug and install the Node.js dependencies.

```sh
npm install
```

Once the dependencies have been installed, you’re ready to preview the project. Run the following to start the test server.

```sh
npm start
```

Now go to `localhost:3000` in your browser. You should see a boilerplate page ready for your customizations.

## Using this template

This code is free and open source and you are permitted to use for your own projects under the [Apache 2.0 License](LICENSE) included in this repository. However, before deploying anything publicly using this codebase, you must:

- Change [`_fonts/scss`](src/styles/_fonts.scss) — our fonts are proprietary and are not permitted for use outside of THE CITY's domain. Please change these fonts to ones you own publishing rights to, or use free, web-safe fonts instead.
- Remove [`logo.svg`](src/assets/images/logo.svg) — our logo is trademarked and cannot be used without THE CITY's explicit permission. Please remove this logo [from the header](src/components/PageLayout.tsx), or swap in your own logo.

Also, as part of our license, we require that any online publication of work built using this software **include a credit and
link to THE CITY**. The template includes the suggested sentence “Made with ♥ in NYC by THE CITY” in the page footer — feel free to leave that in.

Lastly, we want to hear from you! We'd love to know if you are using this code to publish your own projects. Drop us a line at [data@thecity.nyc](mailto:data@thecity.nyc).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
