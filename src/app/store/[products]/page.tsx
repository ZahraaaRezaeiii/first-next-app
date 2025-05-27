import { notFound } from "next/navigation";

type Params = { products: string };

const ProductPage = async ({ params }: { params: Params }) => {
  if (params.products === "2") {
    return notFound();
  }
  return <h1>Product: {params.products}</h1>;
};

export default ProductPage;

export async function generateStaticParams() {
  return [
    { products: "1" },
    { products: "2" },
    { products: "3" },
  ];
}
