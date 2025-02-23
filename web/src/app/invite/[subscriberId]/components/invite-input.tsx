"use client";

import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteInputProps {
	inviteLink: string;
}

export function InviteInput({ inviteLink }: InviteInputProps) {
	function copyInviteLink() {
		navigator.clipboard.writeText(inviteLink);
	}

	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputField readOnly defaultValue={inviteLink} />

			<Button isIconButton className="-mr-2" onClick={copyInviteLink}>
				<Copy className="size-5" />
			</Button>
		</InputRoot>
	);
}
