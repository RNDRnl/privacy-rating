## Version 
|  | value |
| ------------- | ------------- |
| stage | Development  |
| branch name | master  |
| release | 11.08.2023  |
| license | [MIT](https://github.com/RNDRnl/privacy-rating/blob/master/LICENSE) |

## Privacy Rating
![preview](https://github.com/RNDRnl/privacy-rating/raw/master/resources/home/slideshow/1x/slide1.png "preview of privacy rating on page")
[Generate your own label](https://privacyrating.info/#/form)

## About

The privacy rating is a simple way to assess the privacy of an online service. It looks at how the service collects and shares user data, as well as on the amount of control users have over their data and the level of security provided to protect user’s data.

The Privacy Rating is based on extensive research into privacy regulation, standards and guidelines.

Privacy Rating is a project by the [University of Twente](https://www.utwente.nl/),
supported by [NWO](https://www.nwo.nl/) in collaboration with [TNO](https://www.tno.nl/nl/), [WODC](https://wodc.nl/), [Centric B.V.](https://www.centric.eu/)

Design and implementation by [RNDR](https://rndr.studio)

## Development

#### Installation requirements
|  | version |
| ------------- | ------------- |
node | >= 10.14.1 |  
yarn | >= 1.19.1 | 

#### Scripts

| command | action |
| ------------- | ------------- |
yarn install | install needed packages|  
yarn dev | run development mode | 
yarn build | build package | 

#### Environment variables in package.json

| variable | description | example
| ------------- | ------------- |  ------------- 
BASE_PATH | custom base path | /privacy-rating
DOMAIN_PATH | flat domain name | https://privacyrating.info
NODE_ENV | current environment | production

#### Deployment

0. Set DOMAIN_PATH and BASE_PATH accordingly.
1. After build the static html files can be found in the `dist` directory.
2. Create a new file in the `dist` directory named privacy.rating.js and add the following content:
   ```
   function loadScript(url) {    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
    }
    loadScript('https://privacyrating.info/static/styles.7d22c0d22b37c790e9a1.js');
    loadScript('https://privacyrating.info/static/app.7d22c0d22b37c790e9a1.js');
    ```
4. Replace _styles.7d22c0d22b37c790e9a1.js_ and _app.7d22c0d22b37c790e9a1.js_ in the file above to match those in your 'dist' directory
5. Make sure to enable CORS so that generated labels can be displayed on other domains.


## Contact

Contact us through our [form](https://privacyrating.info/#/contact)
