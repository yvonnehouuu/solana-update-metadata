# Solana Update NFT Metadata
reference: https://www.quicknode.com/guides/solana-development/nfts/how-to-update-solana-nft-metadata-using-typescript/#-run-your-code

### Overview
> 1. Setting up : Install package and Create `.env`
> 2. Part 1 : Fetching existing NFT
> 3. Part 2 : Update NFT
> 4. Run Code


### Setting up : Install package and Create `.env`
1. `npm install` 
2. Create `.env` and set your Private Key

### Part 1 : Fetching existing NFT
> * Connect your wallet to Update NFT
> * Make connection to bundlrStorage
> * Fetching function in `main()`

#### Connect your wallet to Update NFT

If the Secret Key in `.env` is string : 

![螢幕擷取畫面_2023-03-16_211837](/uploads/f46553859db3dab2d93e6b7ba8d3d293/螢幕擷取畫面_2023-03-16_211837.png)

If the Secret Key in `.env` is Unit8array : 

![螢幕擷取畫面_2023-03-17_210535](/uploads/694c4e30edfde1b0434f5449e512e97e/螢幕擷取畫面_2023-03-17_210535.png)

#### Make connection to bundlrStorage
![螢幕擷取畫面_2023-03-16_211917](/uploads/a882635abff845d1d1d38e0f3a68791f/螢幕擷取畫面_2023-03-16_211917.png)

#### Fetching function in `main()`
`main()` :

![螢幕擷取畫面_2023-03-16_220500](/uploads/57bf2334bd7f588cb3df0a05720ed205/螢幕擷取畫面_2023-03-16_220500.png)

Declare `METAPLEX` and `MINT_ADDRESS` before Step 1 so you won't get an error : 

![螢幕擷取畫面_2023-03-16_221104](/uploads/28c1e820bc807c2452b35b5ade4c2475/螢幕擷取畫面_2023-03-16_221104.png)


### Part 2 : Update NFT
> * Update function
> * Update function in `main()`
> * Run

#### Update function
![螢幕擷取畫面_2023-03-16_211936](/uploads/d56d8710416262d7bc43b1c3557b53a4/螢幕擷取畫面_2023-03-16_211936.png)

#### Update function in `main()`
![螢幕擷取畫面_2023-03-16_222812](/uploads/224ed5ba9a29f2e0391df9be02cacb4d/螢幕擷取畫面_2023-03-16_222812.png)

Declare `newUri` and `imgName` before Step 2 so you won't get an error :

![螢幕擷取畫面_2023-03-16_223046](/uploads/59222a7112f494b4bc3a330ceb1e9f0d/螢幕擷取畫面_2023-03-16_223046.png)

## Run Code
```
$ npm start
```
Before : 

![螢幕擷取畫面_2023-03-17_210156](/uploads/a7d24165e89d1bf59957ac0f73501dc4/螢幕擷取畫面_2023-03-17_210156.png)

</br></br>

After : 

![螢幕擷取畫面_2023-03-17_210310](/uploads/d530ecf7147c62b2b1a2cd8cbe8b7c74/螢幕擷取畫面_2023-03-17_210310.png)
