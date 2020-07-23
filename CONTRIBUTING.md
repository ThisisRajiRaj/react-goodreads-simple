Thank you for considering to contribute! Here are some rules of thumb as you go about it.

### Submitting a Pull Request
Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please ask first if somebody else is already working on this or the core developers think your feature is in-scope for Create React App. Generally always have a related issue with discussions for whatever you are including.

Please also provide a test plan, i.e. specify how you verified that your addition works.

### Folder Structure of Create React App
react-goodreads-myshelf is based on ReactJS and was created with create-react-app template.

It has the following structure under root.

public /
  The files in this folder are needed as you run the application in your
  browser
src  
  components/
    Contains most of the core code for this component
  

### Setting Up a Local Copy

**Required Environment Variables:**

`REACT_APP_GOODREADS_USER_ID` : Goodreads User ID you can get from [here](https://www.goodreads.com/).
`REACT_APP_GOODREADS_API_KEY` : SendMail API Key you can get from [here](https://www.goodreads.com/api/keys).

Save it in the `.env` file as described [here](https://create-react-app.dev/docs/adding-custom-environment-variables/)

Having done that, here is how to run the application locally in development mode.

**Clone the repo:**

    git clone https://github.com/thisisrajiraj/react-goodreads-myshelf

**Install dependencies:**

    npm install

**Starting the application in development mode:**    
    npm start

# Building the application:

To build the production assets, run
    npm run build

# Testing the App:    
    npm run test

_Many thanks to [h5bp](https://raw.githubusercontent.com/facebook/create-react-app/master/CONTRIBUTING.md) for the inspiration with this contributing guide_