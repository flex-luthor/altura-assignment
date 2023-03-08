import React, { useEffect, useState } from "react";
import { fetchNFTs } from "../../utils/fetchNFTs";
import NFTCardLoader from "../loaders/NFTCardLoader";
import Modal from "../molecules/Modal";
import NFTCard from "../molecules/NFTCard";
import Textfield from "../atoms/Textfield";
import { defaultAddress } from "../../utils/constants";

interface NFTProps {
  media: [{ gateway: string }];
  id: { tokenId: string };
  title: string;
  contract: { address: string };
  description: string;
}

const Collection = () => {
  const [NFTs, setNFTs] = useState<NFTProps[]>([]);
  const [currentNFT, setCurrentNFT] = useState<NFTProps>();
  const [address, setAddress] = useState(defaultAddress);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const getNFTs = async () => {
    setIsLoading(true);
    setIsEmpty(false);
    const nfts = await fetchNFTs(address);
    if (nfts?.ownedNfts.length > 0) {
      setNFTs(nfts?.ownedNfts);
    } else setIsEmpty(true);
    setIsLoading(false);
  };
  useEffect(() => {
    getNFTs();
  }, []);

  const handleModal = (data: NFTProps) => {
    setCurrentNFT(data);
    setIsModalOpen(true);
  };

  const renderLoadingState = () => {
    return [...Array(5)].map((el, i) => <NFTCardLoader key={i} />);
  };

  const renderEmptyState = () => {
    return (
      <div className="text-white/50 h-96 flex justify-center items-center">
        No NFTs found for this address
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Textfield value={address} setValue={setAddress} onSearch={getNFTs} />

      <div className="w-full px-0 md:px-8 lg:px-16 xl:px-32">
        {isEmpty ? (
          renderEmptyState()
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8 m-6 mt-32 pb-24 ">
            {isLoading
              ? renderLoadingState()
              : NFTs.map((NFT) => {
                  return (
                    <NFTCard
                      image={NFT.media[0].gateway}
                      id={NFT.id.tokenId}
                      title={NFT.title}
                      address={NFT.contract.address}
                      description={NFT.description}
                      onClick={() => handleModal(NFT)}
                    />
                  );
                })}
          </div>
        )}
      </div>
      {isModalOpen && (
        <Modal
          image={currentNFT?.media[0].gateway}
          id={currentNFT?.id.tokenId}
          title={currentNFT?.title}
          address={currentNFT?.contract.address}
          description={currentNFT?.description}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Collection;
