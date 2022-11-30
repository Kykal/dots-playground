import { ReactNode, MouseEvent } from "react";

export default interface IIconButton {
	onClick: (event: MouseEvent) => void;
	children: ReactNode;
	disabled?: boolean;
}
