'use client';

import BrowseProducts from "@/components/products/browse_product";
import FBFProductDetail from "@/components/products/fbf_product_detail";
import FullFatProductDetail from "@/components/products/full_fat_product";
import GSPProductDetail from "@/components/products/gsp_product_detail";
import OurProducts from "@/components/products/our_products";
import SoyaFlourProductDetail from "@/components/products/soya_flour_detail";
import SoyaOilProductDetail from "@/components/products/soya_oil_product";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const componentMap: Record<string, React.ReactNode> = {
  'granulated-soya-protein': <GSPProductDetail />,
  'soya-oil': <SoyaOilProductDetail />,
  'soya-flour': <SoyaFlourProductDetail />,
  'fortified-blended-foods': <FBFProductDetail />,
  'full-fat-soya': <FullFatProductDetail />
}

export default function SlugPage({ params }: PageProps) {
  const { slug } = params;

  // const isGSP = slug === 'granulated-soya-protein';

  return (
    <>
      {componentMap[slug] ?? <OurProducts />}
    
    {/* {isGSP ? (
        <GSPProductDetail />
      ) : (
        <OurProducts />
    )} */}
      <BrowseProducts />
    </>
  );
}

