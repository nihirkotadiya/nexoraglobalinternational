import { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Requirement Analysis",
    description:
      "We understand your product needs, target markets, budget, and delivery timelines to shape a tailored sourcing plan.",
    icon: "MessagesSquare",
  },
  {
    step: "02",
    title: "Supplier Sourcing & Vetting",
    description:
      "Our team identifies qualified manufacturers and suppliers, verifying certifications, capacity, and compliance history.",
    icon: "Search",
  },
  {
    step: "03",
    title: "Quality Inspection",
    description:
      "Every consignment undergoes pre-shipment inspection and, where required, third-party lab testing before release.",
    icon: "BadgeCheck",
  },
  {
    step: "04",
    title: "Documentation & Compliance",
    description:
      "We prepare export/import documentation, certificates of origin, and customs paperwork accurately and on time.",
    icon: "FileText",
  },
  {
    step: "05",
    title: "Logistics & Shipping",
    description:
      "Freight is booked across sea, air, or land with shipment tracking shared throughout transit.",
    icon: "Ship",
  },
  {
    step: "06",
    title: "Delivery & After-Sales Support",
    description:
      "Goods are delivered to your destination with ongoing support for reordering, feedback, and supply continuity.",
    icon: "PackageCheck",
  },
];
