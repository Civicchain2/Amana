"use client";

import { useState } from "react";
import { SuccessState } from "@/components/ui";

export default function SuccessStateDemo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-bg-primary py-16 px-4">
      {/* Demo Controls */}
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <h1 className="text-2xl font-bold text-text-primary mb-4">
          SuccessState Component Demo
        </h1>
        <p className="text-text-secondary mb-6">
          Demonstrating both the page and modal variants of the SuccessState component.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-gold hover:bg-gold-hover text-text-inverse rounded-lg font-medium transition-colors"
        >
          Show Modal Variant
        </button>
      </div>

      {/* Page Variant Demo */}
      <SuccessState
        variant="page"
        statusLabel="Transaction Complete"
        title="Funds Successfully Locked"
        transactionDetails={{
          tradeId: "AMN-4920-X",
          depositAmount: "42,420.00",
          depositCurrency: "USDC",
          assetDescription: "20 Tons Non-GMO Soybeans",
          vaultStatus: "SECURED ON-CHAIN",
          transactionHash: "0x71C4e8f92A4b3c6D7e8F9a0B1c2D3e4F5a6B7c8D9e0F1a2B3c4D5e6F7a8B92A4",
          explorerUrl: "https://stellar.expert/explorer/public",
        }}
        primaryAction={{
          label: "View Trade in Dashboard",
          onClick: () => console.log("View trade clicked"),
          icon: "arrow",
        }}
        secondaryAction={{
          label: "Download Receipt",
          onClick: () => console.log("Download receipt clicked"),
          icon: "download",
        }}
      />

      {/* Modal Variant */}
      {showModal && (
        <SuccessState
          variant="modal"
          title="Asset Secured & Encrypted"
          description={
            <>
              Your <span className="text-gold">Genesis Private Key</span> has been
              successfully locked in the vault.
            </>
          }
          showSparkles
          primaryAction={{
            label: "RETURN TO VAULT OVERVIEW",
            onClick: () => setShowModal(false),
          }}
          secondaryAction={{
            label: "VIEW AUDIT LOG",
            onClick: () => {
              setShowModal(false);
              console.log("View audit log clicked");
            },
          }}
          onBackdropClick={() => setShowModal(false)}
        />
      )}
    </main>
  );
}
