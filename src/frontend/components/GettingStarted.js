import React from "react";
import styled from "styled-components";

const GettingStarted = () => {
  return (
    <Started>
      <div className="step1 textAlignLeft">
        <h2 className="title">Step 1: Set up a Wallet</h2>
        <p className="text">
          Wallets are the applications you use to store your cryptocurrencies,
          as well as any NFTs you end up minting or buying. Coinbase has a more
          in-depth explanation of how wallets work and the different options
          that are available, but if you’re just getting started, there’s really
          one main thing you need to worry about: using a wallet that’s
          compatible with the blockchain you’re using.
        </p>
        <p className="text">
          MetaMask’s wallet is one of the wallets that’s widely supported by
          Ethereum-based applications like OpenSea, Foundation, and others and
          can be used either as a Chrome / Firefox extension or as an iOS /
          Android app. Coinbase also has its own wallet that you can use as an
          extension or an app, and it’s supported by most platforms. You may
          want to consider Coinbase’s wallet if you’re planning on getting into
          crypto more broadly, as it has support for blockchains not based on
          Ethereum, like Bitcoin.
        </p>
        {/* <img
          width={700}
          height={500}
          src="https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FyjOOKtrHKnP-pUfK3EPGGj2OxO8%3D%2F0x0%3A1718x1154%2F1718x1154%2Ffilters%3Afocal(859x577%3A860x578)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F23069608%2FScreen_Shot_2021_11_30_at_16.51.49.png&w=1440&q=75"
          alt=""
        /> */}
      </div>
      <div className="step2 textAlignLeft">
        <h2 className="title">Step 2: Connect your Wallet</h2>
        <p className="text">
          After you’ve got your wallet set up, you’ll want to connect it with
          the NFT marketplace you plan on using. We have made this easy —
          clicking the Connect Wallet button in the top right prompts you to
          connect your wallet. You’ll then be presented with a list of
          compatible wallets, and choosing yours will prompt you to go through
          the connection process. <br /> <br />
          But we assure you to connect to MetaMask’s wallet
        </p>
        <img
          width={"100%"}
          src="https://github.com/TeamNFT/UserManualPhotos/blob/main/Screenshot%20(109).png?raw=true"
          alt=""
        />
        <p className="text">
          A word of caution for the future: be careful if you see a request to
          connect to your wallet when you don’t expect it, as scammers could be
          trying to access your funds or NFTs. As long as you’re on a trusted
          site, you should generally be okay (at least, as long as something
          isn’t very wrong — be sure to check transactions to make sure they’re
          kosher). But if an unknown site asks to connect to your wallet, you
          should probably think twice before accepting.
        </p>
        <img
          width={"100%"}
          src="https://github.com/TeamNFT/UserManualPhotos/blob/main/Screenshot%20(110).png?raw=true"
          alt=""
        />
        <h3 className="text textAlignLeft">Understand the functionalities of Home page </h3>
        <ul className="list">
          <li>
            Create : on this page you will be able to create <span>NFT</span>.
          </li>
          <li>
            My Listed Items : Here you will be able to see the NFTs that you
            will mint.
          </li>
          <li>
            My Purchases : Here you will be able to see the NFTs that you have
            baught.
          </li>
          <li>
            Collections : Here you will be able to see all the listed NFTs.
          </li>
        </ul>
        <img
          src="https://github.com/TeamNFT/UserManualPhotos/blob/main/Screenshot%20(111).png?raw=true"
          width={"100%"}
          alt=""
        />
      </div>
      <div className="step3 textAlignLeft">
        <h2 className="title">Step 3: Create NFT</h2>
        <p className="text">
          Here one has the functionality of selecting the image, Give the name
          of the image and finally the discription of the image. After filling
          all the details you just have to click on the Create &amp; List NFT!
          After doing this all things you image is ready to get converted to an
          NFT.
        </p>
        <img
          src="https://github.com/TeamNFT/UserManualPhotos/blob/main/Screenshot%20(113).png?raw=true"
          width={"100%"}
          alt=""
        />
        <img
          src="https://github.com/TeamNFT/UserManualPhotos/blob/main/Screenshot%20(114).png?raw=true"
          width={"100%"}
          alt=""
        />
        <p className="text">
          When you will click on the Create and List then the NFT will be get
          minted and listed in the market place.
        </p>
      </div>
    </Started>
  );
};

const Started = styled.section`
  /* border: 2px solid black; */
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  /* height: 50vh; */

  .title {
    margin: 1rem 0;
  }

  .text {
    font-weight: 500;
    margin-bottom: 0.4rem;
    letter-spacing: 0.01rem;
  }

  img {
    border: 2px solid black;
    border-radius: 10px;
    margin: auto;
    display: block;
    margin: 1rem 0;
  }

  .list {
    padding-left: 1rem;
    /* border: 2px solid red; */
  }
`;

export default GettingStarted;
