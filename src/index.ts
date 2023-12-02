import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Metaplex, keypairIdentity, bundlrStorage, Nft, Sft } from "@metaplex-foundation/js";
import * as web3 from "@solana/web3.js"
import dotenv from "dotenv"
dotenv.config()

export async function connectWallet(connection: web3.Connection): Promise<web3.Keypair> {
  // Use dotenv to get project and directory variables
  require('dotenv').config();

  const secret = JSON.parse(process.env.PRIVATE_KEY ?? "") as number[]
  const secretKey = Uint8Array.from(secret)
  const keypairFromSecretKey = web3.Keypair.fromSecretKey(secretKey)
  
  return keypairFromSecretKey;
}

async function useMetaplex() {
    
  const connection = new Connection(clusterApiUrl("devnet"))
  const user = await connectWallet(connection)

  console.log("PublicKey:", user.publicKey.toBase58())
  
  const METAPLEX = Metaplex.make(connection)
    .use(keypairIdentity(user))
    .use(
      bundlrStorage({
        address: "https://devnet.bundlr.network",
        providerUrl: "https://api.devnet.solana.com",
        timeout: 60000,
      })
    )

  return METAPLEX
}

async function updateNft(nft:Nft|Sft, metadataUri: string, newName: string) {
  console.log(`Step 3 - Updating NFT`);
  const METAPLEX = await useMetaplex()

  console.log( METAPLEX)

  await METAPLEX
      .nfts()
      .update({
          name: newName,
          nftOrSft: nft,
          uri: metadataUri
      }, { commitment: 'finalized' });
  console.log(`   Success!🎉`);
  console.log(`   Updated NFT: https://explorer.solana.com/address/${nft.address}?cluster=devnet`);
}

async function main() {

  const MINT_ADDRESS = '82PMgcK6WG5dRQbahMGSahrALnZXUF9eS43gZt52Acf8'; //'YOUR_NFT_MINT_ADDRESS'; // 👈 CHANGE THIS (MAKE SURE NFT IS MUTABLE)
  console.log(`Updating Metadata of NFT: ${MINT_ADDRESS}}`);
  
  const METAPLEX = await useMetaplex();
  // const imgName = "Update";

  //Step 1 - Fetch existing NFT
  console.log(`Step 1 - Fetching existing NFT`);

  const nft = await METAPLEX.nfts().findByMint( { mintAddress: new PublicKey(MINT_ADDRESS) } );
  console.log(nft);

  if (!nft || !nft.json?.image) {throw new Error("Unable to find existing nft or image uri!")}
  console.log(`   NFT Found!`);

  //Step 2 - Upload Metadata
  // const newUri = await uploadMetadata(nft.json.image,NEW_METADATA.imgType,NEW_METADATA.imgName, NEW_METADATA.description, NEW_METADATA.attributes); 
  const imgName = "Update";  // imgName -> image name we upload
  const newUri = "https://arweave.net/arcR0jAytXPsgw7-___Ucj0uv_0zvqbDgTTmk4_ckn8"  // The Metadata Url we upload (new)

  //Step 2 - Update NFT
  updateNft(nft, newUri, imgName);  
}

main();
