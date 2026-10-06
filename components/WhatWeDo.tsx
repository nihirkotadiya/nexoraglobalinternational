import Image from "next/image";
import buyerImage from "@/nexora-global/buyer.png";
import consignmentImage from "@/nexora-global/consignment.png";
import dealImage from "@/nexora-global/deal.png";
import deliveryImage from "@/nexora-global/express-delivery.png";
import packagingImage from "@/nexora-global/packaging.png";
import titleIcon from "@/nexora-global/section-title-icon-1.png";
import supplierImage from "@/nexora-global/supplier.png";
import worldImage from "@/nexora-global/word.jpg";

const leftServices = [
  {
    title: "Find Manufacturer",
    description: "We find manufacturers to meet each buyer's requirements.",
    image: buyerImage,
  },
  {
    title: "Fix Deal",
    description: "We negotiate and secure a deal within your suitable price range.",
    image: dealImage,
  },
  {
    title: "Consignment",
    description: "We arrange transportation and handle the full consignment.",
    image: consignmentImage,
  },
];

const rightServices = [
  {
    title: "Customize Packaging",
    description: "Packaging is customized to meet your requirements.",
    image: packagingImage,
  },
  {
    title: "Multiple Suppliers",
    description: "We can source products from multiple suppliers.",
    image: supplierImage,
  },
  {
    title: "On-Time Delivery",
    description: "Your consignment will be delivered on time.",
    image: deliveryImage,
  },
];

function ServiceList({
  services,
  align,
}: {
  services: typeof leftServices;
  align: "left" | "right";
}) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:flex-col lg:justify-around lg:gap-5">
      {services.map((service) => (
        <article key={service.title} className="flex flex-col items-center gap-3 text-center">
          <div className="flex min-h-14 items-center justify-center gap-2">
            {align === "right" ? (
              <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
            ) : null}
            <Image
              src={service.image}
              alt=""
              className="size-14 shrink-0 object-contain"
            />
            {align === "left" ? (
              <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
            ) : null}
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-700">
            {service.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page flex flex-col gap-10 sm:gap-12">
        <header className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-3xl font-semibold text-navy-900 sm:text-4xl">
            What We Do
          </h2>
          <Image src={titleIcon} alt="" className="h-7 w-14 object-contain" />
        </header>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)_minmax(0,1fr)] lg:gap-6">
          <ServiceList services={leftServices} align="left" />
          <div className="order-first mx-auto w-full max-w-md lg:order-none">
            <Image
              src={worldImage}
              alt="Airplane circling a globe"
              className="h-auto w-full"
              priority={false}
            />
          </div>
          <ServiceList services={rightServices} align="right" />
        </div>
      </div>
    </section>
  );
}