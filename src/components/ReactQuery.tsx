import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";

type Tabs = "todo" | "album";

export const ReactQuery = () => {
	const [selectedTabs, setSelectedTabs] = useState<Tabs>("todo");
	const onClickTabButton = (tab: Tabs) => {
		setSelectedTabs(tab);
	};

	return (
		<div style={{ display: "flex", padding: "16px" }}>
			<Sidebar />
			<div style={{ flexGrow: 1 }}>
				<button onClick={() => onClickTabButton("todo")}>TODO</button>
				<button onClick={() => onClickTabButton("album")}>Album</button>

				<ErrorBoundary fallback={<h1>Todo or AlbumListエラーだよ〜</h1>}>
					<Suspense fallback={<p>Todo or AlbumListローディング中だよ〜</p>}>
						{selectedTabs === "todo" ? <TodoList /> : <AlbumList />}
					</Suspense>
				</ErrorBoundary>
			</div>
		</div>
	);
};
