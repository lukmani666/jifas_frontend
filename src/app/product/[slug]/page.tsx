import BrowseProducts from "@/components/products/browse_product";
import OurProducts from "@/components/products/our_products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const componentMap: Record<string, () => Promise<React.ReactElement>> = {
  "granulated-soya-protein": () => import("@/components/products/gsp_product_detail").then(mod => <mod.default />),
  "soya-oil": () => import("@/components/products/soya_oil_product").then(mod => <mod.default />),
  "soya-flour": () => import("@/components/products/soya_flour_detail").then(mod => <mod.default />),
  "fortified-blended-foods": () => import("@/components/products/fbf_product_detail").then(mod => <mod.default />),
  "full-fat-soya": () => import("@/components/products/full_fat_product").then(mod => <mod.default />),
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const Component = componentMap[slug];

  return (
    <>
      {Component ? await Component() : <OurProducts />}
      <BrowseProducts />
    </>
  );
}