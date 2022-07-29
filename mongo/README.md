# MongoDB Docker Compose

## `.env`

```conf
MONGO_INITDB_ROOT_USERNAME=${USERNAME}
MONGO_INITDB_ROOT_PASSWORD=${PASSWORD}
```

## configurations

- USERNAME: root
- PASSWORD: password
- HOST: 127.0.0.1
- PORT: 5002
- ADMIN_PATH: admin

## uri

```
mongodb://${username}:${password}@${host}:${port}/${ADMIN_PATH}
```

## test with node.js

```
$ cd node
$ npm install
$ npm run start
```
