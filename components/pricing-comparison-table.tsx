const featuresData = [
  // STRATEGY & FOUNDATION
  { category: "STRATEGY & FOUNDATION" },
  { name: "1-on-1 Idea & Strategy Session", spark: "✔", engine: "✔", rocket: "✔" },
  { name: "Professional Logo & Brand Kit", spark: "✔", engine: "✔", rocket: "✔" },
  { name: 'Core Brand "Blueprint" Document', spark: "✔", engine: "✔", rocket: "✔" },
  { name: "Dedicated Account Manager", spark: "-", engine: "-", rocket: "✔" },
  { name: "Access to Expert Network", spark: "-", engine: "-", rocket: "✔" },
  { spacer: true },

  // WEBSITE & WEB PRESENCE
  { category: "WEBSITE & WEB PRESENCE" },
  { name: 'Launch website', spark: "✔", engine: "✔", rocket: "✔" },
  { name: "Full Multi-Page Website (Up to 5 Pages)", spark: "-", engine: "✔", rocket: "✔" },
  { name: "Payment Gateway & Shop Setup", spark: "✔", engine: "✔", rocket: "✔" },
  { name: "Foundational SEO Setup", spark: "✔", engine: "✔", rocket: "✔" },
  { name: 'Advanced "Super" SEO', spark: "-", engine: "✔", rocket: "✔" },
  { name: "Google Business Profile Setup", spark: "✔", engine: "✔", rocket: "✔" },
  { spacer: true },

  // CONTENT & SOCIAL MEDIA
  { category: "CONTENT & SOCIAL MEDIA" },
  { name: "Social Media Setup & Design (3 Platforms)", spark: "✔", engine: "✔", rocket: "✔" },
  {
    name: "Ongoing Social Media Management",
    spark: "(2 posts/week included)",
    engine: "(4 posts on two platforms /week included)",
    rocket: "(Daily posts on 2 platforms)",
  },
  {
    name: "Reels / Short Form Videos",
    spark: "(1 reel/week)",
    engine: "(2 reels/week)",
    rocket: "(4 reels/week)",
  },
  { name: "Content Creation", isSubCategory: true },
  { name: "SEO-Optimized Blog Post", spark: "-", engine: "(1 per month)", rocket: "(3 per month)" },
  { spacer: true },

  // LEAD GENERATION & GROWTH
  { category: "LEAD GENERATION & GROWTH" },
  { name: "Direct Outreach (Email & Social)", spark: "-", engine: "(up to 150/week)", rocket: "(up to 400/week)" },
  { name: "Lead Generation Ad Management", spark: "-", engine: "-", rocket: "✔" },
  { spacer: true },

  // SUPPORT & REPORTING
  { category: "SUPPORT & REPORTING" },
  { name: "Initial Performance Analytics", spark: "✔", engine: "✔", rocket: "✔" },
  { name: "Monthly Growth Report & Strategy Call", spark: "-", engine: "✔", rocket: "✔" },
  { name: "Advanced Performance Dashboard", spark: "-", engine: "-", rocket: "✔" },
  { name: "Support Response Time", spark: "(48 hours)", engine: "(24 hours)", rocket: "(Priority <12 hours)" },
  // No spacer after the last item if buttons are removed and this is the end
]

interface FeatureItem {
  category?: string
  isSubCategory?: boolean
  name?: string
  spark?: string
  engine?: string
  rocket?: string
  spacer?: boolean
}

export default function PricingComparisonTable() {
  const planHeaders = [
    { title: "Spark", subtitle: "(One-Time Launch)" },
    { title: "Engine", subtitle: "(Monthly Growth)" },
    { title: "Rocket", subtitle: "(Monthly Scale)" },
  ]

  return (
    <div className="overflow-x-auto w-full text-white">
      <table className="min-w-full w-max md:w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="border-b border-white/20">
            <th className="p-3 md:p-4 text-left font-semibold sticky left-0 bg-black z-10 w-[200px] sm:w-[250px] md:w-auto">
              Feature
            </th>
            {planHeaders.map((plan, index) => (
              <th key={index} className="p-3 md:p-4 text-center font-semibold min-w-[120px] sm:min-w-[150px] md:w-auto">
                <span className="bg-gradient-to-r from-neutral-400 via-white to-neutral-400 bg-clip-text text-transparent">
                  {plan.title}
                </span>
                <br />
                <span className="font-normal text-xs sm:text-sm text-neutral-300">{plan.subtitle}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featuresData.map((item: FeatureItem, index) => {
            if (item.spacer) {
              return (
                <tr key={`spacer-${index}`} className="h-4 md:h-6">
                  <td colSpan={4}></td>
                </tr>
              )
            }
            if (item.category) {
              return (
                <tr key={`category-${index}`}>
                  <td
                    colSpan={4}
                    className="p-3 md:p-4 pt-6 md:pt-8 font-bold text-base md:text-lg text-left border-t border-white/20"
                  >
                    <span className="bg-gradient-to-r from-neutral-400 via-white to-neutral-400 bg-clip-text text-transparent">
                      {item.category}
                    </span>
                  </td>
                </tr>
              )
            }
            if (item.isSubCategory && item.name) {
              return (
                <tr key={`subcategory-${index}`} className="hover:bg-white/5">
                  <td className="p-3 md:p-4 italic text-left border-t border-white/20 sticky left-0 bg-black z-10">
                    {item.name}
                  </td>
                  <td className="p-3 md:p-4 text-center border-t border-white/20"></td>
                  <td className="p-3 md:p-4 text-center border-t border-white/20"></td>
                  <td className="p-3 md:p-4 text-center border-t border-white/20"></td>
                </tr>
              )
            }

            // Regular feature row
            return (
              <tr key={`feature-${index}`} className="hover:bg-white/5">
                <td className="p-3 md:p-4 text-left border-t border-white/20 sticky left-0 bg-black z-10">
                  {item.name}
                </td>
                <td className="p-3 md:p-4 text-center border-t border-white/20">{item.spark}</td>
                <td className="p-3 md:p-4 text-center border-t border-white/20">{item.engine}</td>
                <td className="p-3 md:p-4 text-center border-t border-white/20">{item.rocket}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
