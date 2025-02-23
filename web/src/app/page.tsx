import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { ArrowRight, Copy } from 'lucide-react'



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
        <Input type="email" placeholder="Digite seu e-mail"/>
        <Input type="email" placeholder="Digite seu e-mail" error/>
      </div>
    </main>
  );
}
