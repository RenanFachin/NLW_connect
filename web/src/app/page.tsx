import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, Copy, Mail } from 'lucide-react'



export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <Button isIconButton>
        <Copy />
      </Button>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className="size-5"/>
          </InputIcon>

          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
