import { notFound } from "next/navigation";

interface Props {
  params: {
    products: string;
  };
}

const ProductPage = ({ params }: Props) => {
  const { products } = params;

  if (products === "2") {
    return notFound()
  }

  return <h1>Product: {products}</h1>;
};

export default ProductPage;

export async function generateStaticParams() {
  return [
    { products: '1' },
    { products: '2' },
    { products: '3' },
  ];
}
