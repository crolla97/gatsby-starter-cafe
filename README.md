<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Cafe
</h1>

A single page starter template for cafes utilising Gatsby, Contentful and LeafletJS

## Demo

🚀 Here is a [live demo](https://gatsby-starter-cafe.netlify.com/) of the website

These are the Contentful Content Models which make up the menu section of the site:

![Category Image](https://github.com/crolla97/gatsby-starter-cafe/blob/master/src/images/README-1.png)
![Menu Item Image](https://github.com/crolla97/gatsby-starter-cafe/blob/master/src/images/README-2.png)

## :memo: Getting Started
Create a ```.env``` file in your root directory:

```shell
CONTENTFUL_SPACEID=YOUR_SPACE_ID
CONTENTFUL_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

Install dependencies:
```npm install```

## :file_folder: Customisation
To add your instagram username, change the ```gatsby-config.js``` file:
```js
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `YOUR_INSTAGRAM_USERNAME`,
      },
    },
```

To add your business' coordinates onto the map, change the ```index.js``` file:
```js
{typeof window !== 'undefined' &&
      <LeafletMap
        position={[55.952103, -3.196175]} // Your Coordinates
        zoom={18} // Zoom Level
        markerText={"Local Cafe, 65 Park Row"} // Icon text
      />
    }
```

**IMPORTANT NOTE**: In order for the site to run, Contentful has to set up in exactly as shown in the pictures above. If you want to create different content models then some static queries and files will have to be updated or this will cause an error. These queries can be found in the following files: ```breakfast.js``` ```lunch.js``` ```hotDrinks.js``` ```coldDrink.js```

Any questions or problems please open an issue I'll be happy to help.

Happy Coding!! :computer:

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar. 
