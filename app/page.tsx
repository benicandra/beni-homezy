import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="space-y-4">
      <h2 className="font-heading text-2xl text-minion">Combined</h2>
      <div className="flex gap-4 items-center flex-wrap">
        <Button variant="fill" size="small">
          Fill Small
        </Button>
        <Button variant="fill" size="normal">
          Fill Normal
        </Button>
        <Button variant="fill" size="large">
          Fill Large
        </Button>
        <Button variant="outline" size="small">
          Outline Small
        </Button>
        <Button variant="outline" size="normal">
          Outline Normal
        </Button>
        <Button variant="outline" size="large">
          Outline Large
        </Button>
      </div>
    </div>
  );
}
