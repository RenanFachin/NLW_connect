import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
	children: ReactNode;
	isIconButton?: boolean;
}

export function Button({
	children,
	isIconButton = false,
	className,
	...props
}: ButtonProps) {
	return isIconButton ? (
		<button
			className={twMerge(
				"p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-500",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	) : (
		<button
			className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-500"
			{...props}
		>
			{children}
		</button>
	);
}
