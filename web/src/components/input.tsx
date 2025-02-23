import type { ComponentProps, ReactNode } from "react";

// group - classe permite definir uma estilização com base em um "estado" de outro elemento
// group-focus-within:text-gray-100 -> quando a div por fora estiver com focus-within, vai aplicar o gray 100 neste elemento de span

// placeholder-shown -> permite estilizar o input se o placeholder está aparecendo ou não
// group-[&:not(:has(input:placeholder-shown))]:text-gray-100 -> vai mudar a cor do texto, caso o placeholder não esteja visível, ou seja, que o usuário já tenha preenchido algo

// DATA ATRIBUTES -> data-error={error}, estou criando um data attribute para atribuir um valor e utilizar para algo -> data-[error=true]:bg-danger ou estilizando algo com o group e o data attribute group-data-[error=true]:text-danger

interface InputRootProps extends ComponentProps<"div"> {
	error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
	return (
		<div
			data-error={error}
			className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
			{...props}
		/>
	);
}

interface InputIconProps extends ComponentProps<"span"> {
	children: ReactNode;
}

export function InputIcon({ children, ...props }: InputIconProps) {
	return (
		<span
			className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
			{...props}
		>
			{children}
		</span>
	);
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
	return (
		<input
			className="bg-transparent flex-1 outline-0 placeholder-gray-400"
			{...props}
		/>
	);
}
