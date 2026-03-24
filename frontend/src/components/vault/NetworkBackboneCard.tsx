import { BentoCard } from "@/components/ui/BentoCard";
import { NetworkIcon, StellarLogo } from "@/components/icons";

interface NetworkBackboneCardProps {
  description: string;
}

export function NetworkBackboneCard({ description }: NetworkBackboneCardProps) {
  return (
    <BentoCard
      title="Network Backbone"
      icon={<NetworkIcon className="w-5 h-5" />}
      glowVariant="gold"
      className="lg:col-span-3"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2">
          <StellarLogo className="h-8 text-text-secondary" />
        </div>
      </div>
    </BentoCard>
  );
}
