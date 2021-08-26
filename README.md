This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Dvinci Storybook configuration

  

## How to use the `npm` package

  

### Installation

NB: This is a private package so you will need authenticate before installing the package

 1. Run `npm login` in your terminal and input your username and password for npm to authenticate
 2. ```yarn add @dvinci1/components```  or ```npm i @dvinci1/components```
 

#### Sample usage
After the installation is complete, you can use the components by importing 
  ```import React from 'react';
import { Button } from '@dvinci1/components';

const sampleComponent = () => {
  return (
    <div>
      <Button>Sample Button</Button>
    </div>
  );
};

export default sampleComponent;
```
  

## Available Scripts

  

In the project directory, you can run:

  

### `yarn storybook`

  

Runs the app in the development mode.

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

  

The page will reload if you make edits.

You will also see any lint errors in the console.

  
  

### `yarn build-storybook`

  

Builds the app for production to the `storybook-static` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `yarn build`

  

Builds components for hosting to npm

## Development
### Folder structure
```
├── App.css
├── App.js
├── index.css
├── index.js
├── lib
│   ├── components  # contains components; minor changes will happen here
│   │   ├── Button  # sample component
│   │   │   ├── Button.js
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── ...
│   ├── constants.js
│   ├── index.js  # Components are imported here for exporting in npm
│   └── theme
│       ├── index.js # contains global theme for all the packages
│       └── shadows.js
└── stories # add component stories here for visualization
    ├── Introduction.stories.mdx
    ├── ManagementCard.stories.jsx
    ├── ...
```

To add a new component, create a new folder under `src/lib/components` folder and create component there. Always ensure you import the component to the root `src/lib/index.js` for the components folder.
