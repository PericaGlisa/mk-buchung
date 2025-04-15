import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DatenschutzDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-gray-400 hover:text-white">
          Datenschutz
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black border border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Datenschutz</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p>Datenschutzerklärung für MK Buchung. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.</p>
          <p>Alle Informationen werden vertraulich behandelt und nur für die Zwecke der Terminbuchung verwendet.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
