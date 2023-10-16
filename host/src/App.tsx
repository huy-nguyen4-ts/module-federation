import { FC, useEffect } from "react";
// @ts-ignore
import Header from "header/Header";
// @ts-ignore
import getUser from "shared/user";
//@ts-ignore
import loadApp from "page/loadApp";

function App() {
	const user = getUser();
	return (
		<>
			<Header />
			User: {user.name}
			<Page />
		</>
	);
}

export const Page: FC = () => {
	useEffect(() => {
		loadApp();
	}, []);
	return <div id="angular-page"></div>;
};

export default App;
