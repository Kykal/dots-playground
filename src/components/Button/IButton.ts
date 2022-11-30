import { MouseEvent, ReactNode } from "react";

export default interface IButton {
	onClick: (event: MouseEvent) => void;
	disabled?: boolean;
	children: ReactNode;
}
