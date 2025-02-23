"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/button";
import { InputField, InputIcon, InputRoot } from "../../components/input";

const subscriptionSchema = z.object({
	name: z.string().min(2, "Digite seu nome completo"),
	email: z.string().email("Digite um e-mail válido"),
});

export function SubscriptionForm() {
	const { register, handleSubmit } = useForm({
		resolver: zodResolver(subscriptionSchema),
	});

	function onSubscribe(data: any) {
		console.log(data);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubscribe)}
			className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
		>
			<h2 className="font-heading font-semibold text-gray-200 text-xl">
				Inscrição
			</h2>

			<div className="space-y-3">
				<InputRoot>
					<InputIcon>
						<User />
					</InputIcon>

					<InputField
						type="text"
						placeholder="Nome completo"
						{...register("name")}
					/>
				</InputRoot>

				<InputRoot>
					<InputIcon>
						<Mail />
					</InputIcon>

					<InputField
						type="email"
						placeholder="E-mail"
						{...register("email")}
					/>
				</InputRoot>
			</div>

			<Button type="submit">
				Confirmar
				<ArrowRight />
			</Button>
		</form>
	);
}
