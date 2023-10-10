import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";

const HomePage = () => {
	return (
		<div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
				pariatur corporis repudiandae ipsa, porro doloribus itaque eius at dolor
				eaque iste cupiditate rem, dolorem quis? Quia quisquam accusantium
				delectus maiores, magnam, quo dignissimos qui adipisci earum suscipit
				velit recusandae dolor, illo odio vero! Necessitatibus totam maiores
				nemo esse placeat veritatis blanditiis quis eaque, nesciunt animi
				distinctio nisi tempora? Doloremque quidem dignissimos labore dolores
				nulla excepturi accusamus laboriosam voluptate rerum nisi? Minima
				excepturi vitae tenetur natus ut suscipit necessitatibus cumque,
				voluptas ipsa vel facere, minus quisquam, commodi neque aperiam? Eaque
				dicta neque, veritatis itaque assumenda error mollitia aperiam nesciunt
				ipsum eius?
			</p>
		</div>
	);
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
	return <RootLayout>{page}</RootLayout>;
};
