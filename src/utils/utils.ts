import { RefObject } from "react";

export const handleSlider = (
  ref: RefObject<HTMLDivElement>,
  direction: "left" | "right"
) => {
  if (ref.current) {
    const cardWidth = ref.current.querySelector("div")?.clientWidth || 0;

    const scrollLeftRight =
      direction === "left"
        ? ref.current.scrollLeft + cardWidth
        : ref.current.scrollLeft - cardWidth;

    ref.current.scrollTo({
      left: scrollLeftRight,
      behavior: "smooth",
    });
  }
};

export const infoList = [
  "Gift Vouchers",
  "Support Center",
  "Returns",
  "Delivery Information",
  "Terms & Conditions",
  "Privacy Policy",
];

export const policyList = [
  "Country available",
  "Shipping options",
  "Tracking a package",
  "Cancellation Policy",
  "Contact Us",
  "Warranty And Services",
];
