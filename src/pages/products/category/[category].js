import RootLayout from "@/components/Layouts/RootLayout";
import { Product } from "@/components/UI/Product";
import React from "react";

const CategoryProduct = ({ products }) => {
	return (
		<div className="grid grid-cols-3 gap-4 my-4">
			{products?.map((product, index) => (
				<Product key={index} product={product} />
			))}
		</div>
	);
};

CategoryProduct.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
	//! Call an external API endpoint to get products
	const res = await fetch("https://tech-shop-server-five.vercel.app/products/");
	const products = await res.json();

	//! Ensure that products?.data is an array
	const productData = products?.data || [];

	//! Map the product IDs to the paths array
	const paths = productData.map((product) => ({
		params: { category: product.category },
	}));

	return { paths, fallback: true };
}

//! This also gets called at build time
export async function getStaticProps(context) {
	try {
		const { params } = context;
		console.log("params~", params);
		const res = await fetch(
			`https://tech-shop-server-five.vercel.app/products/category/${params.category}/`
		);
		const product = await res.json();
		// console.log("product~", product);
		return { props: { products: product?.data }, revalidate: 5 };
	} catch (error) {
		console.error("API request error:", error);
		return { props: { products: [] } };
	}
}
export default CategoryProduct;
