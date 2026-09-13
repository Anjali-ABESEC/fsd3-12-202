# NPM Project

1. goto project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```
script{
    "start": "node app.js",
    "dev": "nodemon prg7.js"
}
```
7. add node_module to gitignore
8. to run use `npm run dev`

## REST API
-- majorly backend server return only data not html file
--REST API uses (get , post , put , patch and delete) method to communicate with client
-- any browser can check only method
-- for other method type we use third party API tester like  postman , echo api , 