import { Button } from "@/components/button";
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
    </main>
  );
}
