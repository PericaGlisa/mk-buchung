import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function ImpressumDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-gray-400 hover:text-white">
          Impressum
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black border border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Impressum</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p className="font-medium">MK Dienstleistung</p>
          <p>StNr: 014 834 77215</p>
          <div className="pt-4">
            <p className="font-medium">Kontaktieren Sie uns</p>
            <p>Sontraer Str. 17, 60386 Frankfurt</p>
            <p>+49 157 524 98 366</p>
            <p>info@mkbuchung.de</p>
          </div>
          <div className="pt-4">
            <p>© 2025 MK Dienstleistung. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
