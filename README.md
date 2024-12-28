# [BigMacExchange](https://bigmacexchange.com/)


The Big Mac Exchange is a fun website that compares the currencies using the price of a Big Mac in each country. Easy & intuitive compare of "real value" of currencies.


## Features

- Compare currency purchasing power across countries using the Big Mac Index.
- Multi-language support (Help us expand translations!).
- Use data from economist [(here!)](https://github.com/TheEconomist/big-mac-data)


## Environment

### Production (Docker)

Run the application in production using Docker:

```bash
cd web

docker build --tag {image name} .

docker run -d -p 3000:3000 {image name}:latest
```

### local (Node)

Run the application in dev using Yarn:

```bash

cd web

yarn 

yarn run dev

```

## Contribution

We appreciate all kinds of contributions!

Translating (please!) : Add new translations or improve existing ones.

Adding Features : Propose or implement new features.

Enhancing UI : Improve the interface for a better user experience.

Fixing Bugs : Help resolve any existing issues.