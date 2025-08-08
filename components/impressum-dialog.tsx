import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function ImpressumDialog() {
  const { messages } = useLanguage()
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-gray-400 hover:text-white">
          {messages.legal.impressum.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black border border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{messages.legal.impressum.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p className="font-medium">{messages.legal.impressum.company}</p>
          <p>{messages.legal.impressum.taxNumber}</p>
          <div className="pt-4">
            <p className="font-medium">{messages.legal.impressum.contactTitle}</p>
            <p>{messages.legal.impressum.address}</p>
            <p>{messages.legal.impressum.phone}</p>
            <p>{messages.legal.impressum.email}</p>
          </div>
          <div className="pt-4">
            <p>{messages.legal.impressum.copyright}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
