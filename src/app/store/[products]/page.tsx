import { notFound } from "next/navigation";

interface Props {
  params: {
    products: string;
  };
}

const ProductPage = async ({ params }: Props) => {
  const { products } = params;

  if (products === "1") {
    return notFound();
  }

  return (
    <div>
      <h1>Product: {products}</h1>
    </div>
  );
};

export default ProductPage;
