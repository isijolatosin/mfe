import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
	const ref = useRef(null);

	useEffect(() => {
		const cleanup = mount(ref.current);

		return () => {
			console.log("unmount");
			if (typeof cleanup === "function") {
				cleanup();
			}
		};
	}, []);

	return <div ref={ref}></div>;
};

export { MarketingApp };
export default MarketingApp;
