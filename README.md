# 🚀 Quick Start

✅ Clone or fork `eggnator_dapp`:

```sh
git clone https://github.com/menezesphill/eggnator_dapp.git
```

💿 Install dependencies with yarn:

```sh
cd eggnator_dapp
yarn install
```

✅ Configure a secrets.json file with your preffered `@truffle/hdwallet-provider` wallet mnemonic and projectId from [Infura](https://infura.io/) configured for rinkeby network. If you are not sure how to do it, you can check out [THIS](https://www.geeksforgeeks.org/deploying-smart-contract-on-test-main-network-using-truffle/) tutorial.

Your `secrets.json` should look like this:

```jsx
{
    "mnemonic":"YOURMNEMONICPHRASE",
    "projectId": "YOURPROJECTID"    
}
```

Make sure to hide your `secrets.json` file in case you plan to publish or share your working directory:

```sh
echo secrets.json >> .gitignore
```

✅ Start the Dapp using Yarn:

```sh
yarn start
```

The Dapp will be served at http://localhost:3000/
