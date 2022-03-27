import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import Eggnator from "../abis/Eggnator.json";
import logo from "../main.png";

const CARD_ARRAY = [
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo000.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo001.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo002.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo003.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo004.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo005.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo006.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo007.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo008.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo009.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0010.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0011.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0012.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0013.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0014.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0015.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0016.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0017.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0018.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0019.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0020.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0021.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0022.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0023.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0024.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0025.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0026.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0027.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0028.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0029.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0030.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0031.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0032.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0033.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0034.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0035.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0036.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0037.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0038.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0039.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0040.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0041.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0042.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0043.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0044.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0045.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0046.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0047.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0048.json",
  },
  {
    img:
      "https://gateway.pinata.cloud/ipfs/QmYDm8Bzye4RMS7h9HUv1KoupajqXcsfKUWwMeGvsC3ZkA/eggo0049.json",
  },
];

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    this.setState({ cardArray: CARD_ARRAY.sort(() => 0.5 - Math.random()) });
  }

  async shouldComponentUpdate() {
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    if (networkId !== "0x4") {
      this.defaultNetwork();

      window.ethereum.on("chainChanged", (chainId) => {
        // Handle the new chain.
        // Correctly handling chain changes can be complicated.
        // We recommend reloading the page unless you have good reason not to.
        window.location.reload();
      });
    }
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  defaultNetwork = async () => {
    try {
      // check if the chain to connect to is installed
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x4" }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      console.error(error);
    }
  };

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    // Load smart contract
    const networkId = await web3.eth.net.getId();
    const networkData = Eggnator.networks[networkId];
    if (networkData) {
      const abi = Eggnator.abi;
      const address = networkData.address;
      const token = new web3.eth.Contract(abi, address);
      this.setState({ token });
      const totalSupply = await token.methods.totalSupply().call();
      this.setState({ totalSupply });
      // Load Tokens
      let balanceOf = await token.methods.balanceOf(accounts[0]).call();
      for (let i = 0; i < balanceOf; i++) {
        let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call();
        let tokenURI = await token.methods.tokenURI(id).call();
        let imgData = await this.getJSONdata(tokenURI);
        this.setState({
          tokenURIs: [...this.state.tokenURIs, imgData],
        });
      }
    } else {
      console.log("Smart contract not deployed to detected network.");
    }
  }

  generateEggo = async () => {
    this.setState({
      cardArray: CARD_ARRAY.sort(() => 0.5 - Math.random()),
    });
    await this.state.token.methods
      .mint(this.state.account, CARD_ARRAY[0].img.toString())
      .send({ from: this.state.account })
      .on("error", (error) => {
        alert(error);
      })
      .on("transactionHash", async (hash) => {
        console.log(hash);
        alert("New Eggo Minted!");
        let imgData = await this.getJSONdata(CARD_ARRAY[0].img);
        this.setState({
          // cardsWon: [...this.state.cardsWon, 0, optionTwoId],
          tokenURIs: [...this.state.tokenURIs, imgData],
        });
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "0x0",
      token: null,
      totalSupply: 0,
      tokenURIs: [],
    };
  }

  getJSONdata = async (jsonUrl) => {
    try {
      let response = await fetch(jsonUrl);
      let responseJson = await response.json();
      return responseJson.image;
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            &nbsp; Eggos Generator
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-muted">
                <span id="account">{this.state.account}</span>
              </small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1 className="d-4">Generate a new Random Eggo!</h1>

                <div className="mb-4">
                  <button
                    onClick={this.generateEggo}
                    type="button"
                    className="btn btn-primary btn-lg "
                  >
                    Generate New Eggo
                  </button>
                </div>

                <div>
                  <h5>
                    Eggos Collected:
                    <span id="result">&nbsp;{this.state.tokenURIs.length}</span>
                  </h5>
                </div>
                <div className="grid mr-auto ml-auto">
                  <div className="row row-cols-4">
                    {this.state.tokenURIs.map((tokenURI, key) => {
                      return <img key={key} src={tokenURI} />;
                    })}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
