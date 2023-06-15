import React, { useEffect, useState } from "react";
import LightGallery from "lightgallery/react"

function FPhotoGallery() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		setIsLoading(true);
		fetch("/api/photos/", {})
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};

	let galleryphotos = data?.map(
		photo => (
			<a className="photoGridItem" href={photo.image} key={photo.id}>
				<img className="photo" alt={photo.name} src={photo.image} />
			</a>
		)
	)

	return (
		<>
			{!isLoading && galleryphotos && (
				<LightGallery speed={500} className="photoGrid">
					{galleryphotos}
				</LightGallery>
			)}
			{!isLoading && !galleryphotos && (
				<p>no photos found</p>
			)}
			{isLoading && (
				<p>loading</p>
			)}
		</>
	)
}

export default FPhotoGallery
