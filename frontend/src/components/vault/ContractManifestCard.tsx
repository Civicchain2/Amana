import { BentoCard } from "@/components/ui/BentoCard";
import { FileText, Download, Eye } from "lucide-react";

interface Party {
  initials: string;
  name: string;
  color: "teal" | "emerald";
}

interface ContractManifestCardProps {
  contractId: string;
  agreementDate: string;
  settlementType: string;
  originParty: Party;
  recipientParty: Party;
  onExportPdf?: () => void;
  onViewClauses?: () => void;
}

export function ContractManifestCard({
  contractId,
  agreementDate,
  settlementType,
  originParty,
  recipientParty,
  onExportPdf,
  onViewClauses,
}: ContractManifestCardProps) {
  const getPartyBgColor = (color: Party["color"]) => {
    return color === "teal" ? "bg-teal" : "bg-emerald";
  };

  return (
    <BentoCard
      title="Contract Manifest"
      icon={<FileText className="w-5 h-5" />}
      glowVariant="none"
    >
      <div className="flex items-center justify-end -mt-8 mb-6">
        <span className="text-xs font-mono text-gold bg-gold-muted px-3 py-1 rounded-full">
          {contractId}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-1">
            Agreement Date
          </p>
          <p className="text-sm font-medium text-text-primary">{agreementDate}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-1">
            Settlement Type
          </p>
          <p className="text-sm font-medium text-text-primary">{settlementType}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-2">
            Origin Party
          </p>
          <div className="flex items-center gap-2">
            <span
              className={`w-8 h-8 rounded-lg ${getPartyBgColor(originParty.color)} text-text-inverse text-xs font-bold flex items-center justify-center`}
            >
              {originParty.initials}
            </span>
            <span className="text-sm text-text-primary">{originParty.name}</span>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-2">
            Recipient Party
          </p>
          <div className="flex items-center gap-2">
            <span
              className={`w-8 h-8 rounded-lg ${getPartyBgColor(recipientParty.color)} text-text-inverse text-xs font-bold flex items-center justify-center`}
            >
              {recipientParty.initials}
            </span>
            <span className="text-sm text-text-primary">{recipientParty.name}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-auto">
        <button
          onClick={onExportPdf}
          className="flex-1 flex items-center justify-center gap-2 bg-bg-elevated hover:bg-bg-input border border-border-default text-text-primary font-medium py-2.5 px-4 rounded-xl transition-colors"
        >
          <Download className="w-4 h-4" />
          Export PDF
        </button>
        <button
          onClick={onViewClauses}
          className="flex-1 flex items-center justify-center gap-2 bg-bg-elevated hover:bg-bg-input border border-border-default text-text-primary font-medium py-2.5 px-4 rounded-xl transition-colors"
        >
          <Eye className="w-4 h-4" />
          View Clauses
        </button>
      </div>
    </BentoCard>
  );
}
