<h1>View NFTs</h1>

<p>A web application that allows users to view their ERC721 and ERC1155 tokens in a given wallet address.</p>

<h4>Installation</h4>
<ol>
  <li>Clone the repository.</li>
  <li>Install dependencies with `npm install`.</li>
</ol>

<h3>Running the Application</h3>
<ol>
<li>Start the development server with `npm start`.</li>
<li>Open a web browser and navigate to http://localhost:5173.</li>
<li>Connect your Ethereum wallet address.</li>
<li>View the list of ERC721 and ERC1155 tokens associated with the wallet address.</li>
</ol>

<h3>Functions</h3>
<h4>`getTokenMetadata(contractAddress, tokenId)`</h4>

<p>Function that fetches token metadata for a given contract address and token ID.</p>

<ul>
  <li>`contractAddress`: The address of the contract that owns the token.</li>
  <li>`tokenId`: The ID of the token.</li>
  <li>Returns an object containing the contract address, token ID, name, description, and image.</li>
</ul>

<h4>`getERC721Tokens(walletAddress)`</h4>

<p>Function that retrieves all ERC721 tokens for a given wallet address.</p>

<ul>
  <li>`walletAddress`: The Ethereum wallet address to search for tokens.</li>
  <li>Returns an array of objects, each containing the contract address, token ID, name, description, and image.</li>
</ul>

<h4>`getERC1155Tokens(walletAddress)`</h4>

<p>Function that retrieves all ERC1155 tokens for a given wallet address.</p>

<ul>
<li>`walletAddress`: The Ethereum wallet address to search for tokens.</li>
<li>Returns an array of objects, each containing the contract address, token ID, name, description, and image.</li>
</ul>

<h4>`getAllTokens(walletAddress)`</h4>

<p>Function that retrieves all tokens (both ERC721 and ERC1155) for a given wallet address.</p>

<ul>
  <li>`walletAddress`: The Ethereum wallet address to search for tokens.</li>
  <li>Returns an array of objects, each containing the contract address, token ID, name, description, and image.</li>
</ul>

<p> Note: All functions may return null in case of errors or empty results.</p>
