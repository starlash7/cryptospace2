// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract Planet is ERC721, Ownable {
    using Strings for uint256;

    uint256 numOfMetadata;
    uint256 public totalSupply;
    mapping(uint256 => uint256) tokenMetadata;

    constructor(uint256 numOfMetadata_) ERC721("CryptopSpace", "PLANET") Ownable(msg.sender) {
        numOfMetadata = numOfMetadata_;
    }

    function mintPlanet() external payable {
        require(msg.value >= 0.01 ether);
        uint256 tokenId = totalSupply++;

        uint256 metadataId = uint256(blockhash(block.number - 1)) % numOfMetadata;

        tokenMetadata[tokenId] = metadataId;
        _safeMint(msg.sender, tokenId);
    }

      function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireOwned(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenMetadata[tokenId].toString())) : "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://space.coinyou.io/metadata/";
    }

    function withdraw() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}