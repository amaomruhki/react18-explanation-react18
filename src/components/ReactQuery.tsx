import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";

type Tabs = "todo" | "album";

export const ReactQuery = () => {
	const [selectedTab, setSelectedTab] = useState<Tabs>("todo");

	const buttonStyle = {
		padding: "12px",
		fontSize: "16px",
		border: "none",
	};

	const albumButtonStyle = {
		...buttonStyle,
		backgroundColor: selectedTab === "album" ? "royalblue" : "white",
		color: selectedTab === "album" ? "white" : "black",
	};

	const todoButtonStyle = {
		...buttonStyle,
		backgroundColor: selectedTab === "todo" ? "royalblue" : "white",
		color: selectedTab === "todo" ? "white" : "black",
	};

	const onClickTabButton = (tab: Tabs) => {
		setSelectedTab(tab);
	};

	return (
		<div style={{ display: "flex", padding: "16px" }}>
			<Sidebar />
			<div style={{ flexGrow: 1 }}>
				<button
					style={todoButtonStyle}
					onClick={() => onClickTabButton("todo")}
				>
					TODO
				</button>
				<button
					style={albumButtonStyle}
					onClick={() => onClickTabButton("album")}
				>
					Album
				</button>

				<ErrorBoundary fallback={<h1>Todo or AlbumListエラーだよ〜</h1>}>
					<Suspense fallback={<p>Todo or AlbumListローディング中だよ〜</p>}>
						{selectedTab === "todo" ? <TodoList /> : <AlbumList />}
					</Suspense>
				</ErrorBoundary>
			</div>
		</div>
	);
};
