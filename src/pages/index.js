import { Product } from "@/components/UI/Product";
import RootLayout from "../components/Layouts/RootLayout";
import React from "react";

const HomePage = ({ products }) => {
	console.log("products~", products);
	return (
		<div className="px-5">
			<h1 className="my-3 text-3xl font-semibold text-gray-800">
				Latest Products{" "}
			</h1>
			<div className="grid grid-cols-3 gap-4 my-4">
				{products?.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</div>
		</div>
	);
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};
export async function getStaticProps() {
	try {
		const res = await fetch(
			"https://tech-shop-server-five.vercel.app/products"
		);
		if (!res.ok) {
			throw new Error(`Fetch failed with status: ${res.status}`);
		}
		const products = await res.json();
		return {
			props: {
				products: products?.data || [],
			},
			revalidate: 5,
		};
	} catch (error) {
		console.error("Fetch error:", error);
		return {
			props: {
				products: [],
			},
			revalidate: 5,
		};
	}
}
