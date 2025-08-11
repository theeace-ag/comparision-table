import PricingComparisonTable from "@/components/pricing-comparison-table"
import IframeResizer from "@/components/iframe-resizer"

export default function HomePage() {
  return (
    <>
      <IframeResizer />
      <div className="bg-black min-h-screen flex flex-col items-center justify-start w-full">
        <div className="w-full max-w-6xl">
          <PricingComparisonTable />
        </div>
      </div>
    </>
  )
}
