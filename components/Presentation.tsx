"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const slides = [
  {
    title: "SolxPass: Decentralized Proof-of-Personhood for Solana",
    subtitle: "Powered by Reclaim Protocol and Zero-Knowledge Proofs",
    content: "Saksham Tomer(Lead Developer)",
  },
  {
    title: "What is SolxPass?",
    content: [
      "Decentralized identity verification platform on Solana.",
      "Secure, privacy-preserving proof-of-personhood.",
      "Built for a wide range of dApps: DeFi, DePIN, gaming, infrastructure.",
    ],
  },
  {
    title: "The Challenge of Identity in Web3",
    content: [
      "Lack of trusted, private, and scalable ID verification.",
      "Sybil attacks and fake identities plague dApps.",
      "Users must sacrifice privacy for verification.",
    ],
  },
  {
    title: "SolxPass: Privacy-first, Decentralized, Rewarding",
    content: [
      "Uses Reclaim Protocol to generate ID proofs from diverse categories like Finance, Social Media, and Gaming.",
      "Zero-Knowledge Proofs (ZK Proofs) ensure privacy and security.",
      "Community interaction with rewards and tiered NFT system.",
    ],
  },
  {
    title: "Unique Features of SolxPass",
    content: [
      "On-chain Verification: Immutable and tamper-proof.",
      "Community Engagement: Twitter-like feeds for posting and earning rewards.",
      "Tiered NFTs: Animal, Dinosaur, Alien, and Hero tiers with 10 levels.",
      "Bonus Incentives: Social media sharing for added benefits.",
    ],
  },
  {
    title: "How SolxPass Leverages Reclaim Protocol",
    content: [
      "Secure and decentralized identity recovery and verification.",
      "Multiple ID categories ensure stronger proof-of-personhood.",
      "Zero-Knowledge Proofs ensure data privacy while verifying authenticity.",
    ],
  },
  {
    title: "SDK for DApp Integration",
    content: [
      "DApps can easily integrate user stats, levels, tiers, and proofs using SolxPass's SDK.",
      "Ideal for DeFi, gaming, social, and infrastructure apps looking for secure, verified users.",
    ],
  },
  {
    title: "Transforming Multiple Ecosystems",
    content: [
      "DePIN: Verified identities for trusted interaction in physical infrastructure.",
      "DeFi: Privacy-preserving, KYC-like verification without the risk of fake users.",
      "Gaming: Real player verification, preventing multi-accounting.",
      "Social: Community-driven feeds with reward incentives for verified users.",
    ],
  },
  {
    title: "Why Users Will Love SolxPass",
    content: [
      "Full control over personal data with privacy ensured by ZK Proofs.",
      "Earn rewards and level up through community interaction.",
      "Unlock exclusive NFTs and benefits at higher tiers.",
    ],
  },
  {
    title: "Join Us at SolxPass",
    content: [
      "SolxPass is the future of decentralized identity on Solana.",
      "Secure, privacy-first verification with community rewards.",
      "Visit us at solxpass.me.",
    ],
  },
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const slideHeight = containerRef.current.clientHeight;
        const newSlideIndex = Math.round(scrollPosition / slideHeight);
        setCurrentSlide(newSlideIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSlide = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * containerRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-500 to-purple-600">
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto snap-y snap-mandatory"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-full snap-start flex items-center justify-center p-8"
          >
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-12 max-w-4xl w-full">
              <h2 className="text-4xl font-bold mb-4 text-white">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <h3 className="text-2xl text-gray-200 mb-6">
                  {slide.subtitle}
                </h3>
              )}
              <div className="space-y-4">
                {Array.isArray(slide.content) ? (
                  <ul className="list-disc list-inside text-white">
                    {slide.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xl mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xl text-white whitespace-pre-line">
                    {slide.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors duration-200"
          disabled={currentSlide === 0}
        >
          <ChevronUp size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors duration-200"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronDown size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
