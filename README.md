# 2fa-service
> A simple 2FA microservice made using nestjs + mongodb.

<img src="https://github.com/hofstede-matheus/2fa-service/blob/main/.github/diagram.png?raw=true" alt="diagram">

## Usage
Attach to your application/auth microservice, and instead of returning a token to the frontend, call this service to protect the token and send a 4-digit token to the user email or phone and then return a authorization token.

```
rm -rf node_modules && yarn install --frozen-lockfile
yarn start:dev
```
