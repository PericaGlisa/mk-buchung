import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function DatenschutzDialog() {
  const { messages } = useLanguage()
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-gray-400 hover:text-white">
          {messages.legal.datenschutz.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black border border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{messages.legal.datenschutz.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p>{messages.legal.datenschutz.description1}</p>
          <p>{messages.legal.datenschutz.description2}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
