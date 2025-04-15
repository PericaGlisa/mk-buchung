import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function AGBDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-gray-400 hover:text-white">
          AGB
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black border border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Allgemeine Geschäftsbedingungen</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p>Allgemeine Geschäftsbedingungen für die Nutzung der MK Buchung App.</p>
          <p>Diese AGB regeln die Nutzung unserer Terminbuchungs-App für Salons und deren Kunden.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
