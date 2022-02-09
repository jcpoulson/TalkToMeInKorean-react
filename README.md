# "Hello There" or "안녕하세요"



[Talk To Me In Korean](https://talktomeinkorean.com/) is a very popular (If not most popular) online resource for learning the Korean language, as I myself love the resource but not only that, I'm sure there numbers speak for themselves as far as their popularity, impact and outreach goes


# This is a clone of "Talk To Me In Korean" built using React
I will say this as well, this is not a complete clone of TTMIK, a lot of the little features and details were left out for time sake, but the core components and features are present in this React clone.

***This web clone has now been migrated and improved to use the Next.js framework, which provides sever side rendering and many more features.***


# Requirements

* Node.js V14
* npm
* git

# Run the dev server

```bash
npm install
npm run dev
```

#

# Folder structure

> Only showing folders/files most relevant to development

* `.next` - auto generated
  * Dev server
* `public`
  * Media files, such as images or icons
* `src`
  * `assets`
    * media files such as pictures
  * `components`
    * These contain all the components used to build each page
    * The files within this directory are broken down by page
  * `pages`
    * React components that serve as top-level pages ( automatic routing )
* `styles`
  * Css files
* `AppContext.js`
    * Top level context object for state management
* `firebase.js`
    * All backend logic is handled within this file using the firebase-sdk

