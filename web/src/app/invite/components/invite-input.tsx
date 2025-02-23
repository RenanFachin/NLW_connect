import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

export function InviteInput() {
	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>

			<InputField
				readOnly
				defaultValue={"devstage.com/codecraft-summit-2025/1289"}
			/>

			<Button isIconButton className="-mr-2">
				<Copy className="size-5" />
			</Button>
		</InputRoot>
	);
}
