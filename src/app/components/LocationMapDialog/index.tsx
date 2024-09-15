import MailboxSvg from "@/app/assets/MailboxSvg";
import MessengerSvg from "@/app/assets/MessengerSvg";
import WhatsAppSvg from "@/app/assets/WhatsAppSvg";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

const LocationMapDialog = () => {
  return (
    <DialogContent className="flex flex-col md:min-w-[600px] sm:min-w-[80vw] md:h-[70%] h-[80%] sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="mb-2">Cómo llegar?</DialogTitle>
        <DialogDescription>
          Podés encontrarnos en Calle 33 y 4, Laguna de Lobos, Pcia de Buenos
          Aires.
        </DialogDescription>
      </DialogHeader>
      <div className="flex h-full flex-col py-4 gap-2">
        <div className="flex h-full rounded-xl items-center bg-slate-100 w-full p-4 relative hover:drop-shadow hover:cursor-pointer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1936.8251429000086!2d-59.128776176547575!3d-35.27270584619468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bda7298e670f55%3A0x2a2689059932ffa0!2sIglesia%20filadelfia%2C%20anexo%20laguna%20de%20lobos!5e0!3m2!1ses-419!2sar!4v1725837639384!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button">Cerrar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default LocationMapDialog;
