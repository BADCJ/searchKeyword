# searchKeyword

## Initialisation

Use the package manager [npm](https://www.npmjs.com/) to install needed packages.

```bash
npm i
```

Then start the server , for now on local environment by command.

```bash
npm run local
```

## For Testing

After the server is running properly we can simply go to browser and just go to [search url](http://0.0.0.0:9999/app/v1/news?keyword=prada)

Or just import the curl request with just changing keyword value: 
```JavaScript
curl --location --request GET 'http://0.0.0.0:9999/app/v1/news?keyword=prada'
```
