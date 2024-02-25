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

![update1](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/7a3566f6-b418-4de9-b9f7-f32d361a12f3)


If the Secret Key in `.env` is Unit8array : 

![update2](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/a91537aa-fe6f-490c-bb1f-52089f044ce3)


#### Make connection to bundlrStorage
![update3](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/e8622a46-2c79-4c43-9cca-12d6d6ac3b51)


#### Fetching function in `main()`
`main()` :

![update4](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/7948e7ae-a786-468d-95c4-6589c966c4fb)


Declare `METAPLEX` and `MINT_ADDRESS` before Step 1 so you won't get an error : 

![update5](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/8162f3ee-afd5-4c2f-86da-fa8c85ff0653)



### Part 2 : Update NFT
> * Update function
> * Update function in `main()`
> * Run

#### Update function
![update6](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/cc567700-13dc-400d-8605-e09c7b23745b)


#### Update function in `main()`
![update7](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/ae5b3f31-b50e-4dd6-8fd1-f6eff4f7ff8b)


Declare `newUri` and `imgName` before Step 2 so you won't get an error :

![update8](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/75cc79b6-6334-45c6-bbea-b5481860e285)


## Run Code
```
$ npm start
```
Before : 

![update9](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/612c3e16-b690-4273-a358-970760fc13ef)


</br></br>

After : 

![update10](https://github.com/yvonnehouuu/solana-update-metadata/assets/151607390/8fdaa2aa-4b6c-4bfd-ac47-a2c358771773)

