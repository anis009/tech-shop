import Link from "next/link";
import React from "react";

const Category = () => {
	const categoryData = [
		{
			name: "CPU / Processor",
		},
		{
			name: "Motherboard",
		},
		{
			name: "RAM",
		},
		{
			name: "Power Supply",
		},
		{
			name: "Storage Device",
		},
		{
			name: "Monitor",
		},

		{
			name: "Others",
		},
	];
	return (
		<div>
			<h1 className="text-3xl font-semibold my-5 ">Categories</h1>
			<div className="grid grid-cols-4 gap-5 my-5">
				{categoryData?.map((item, index) => {
					return (
						<Link
							href={`/products/category/${item.name}`}
							className="h-[100px]  bg-slate-900 hover:bg-slate-800 flex justify-center items-center"
							key={index}
						>
							<p>{item.name}</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Category;
