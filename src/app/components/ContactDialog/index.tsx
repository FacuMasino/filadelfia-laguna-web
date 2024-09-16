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

const ContactDialog = () => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Contactanos</DialogTitle>
        <DialogDescription>
          Si lo deseas puedes contactarnos a través de las siguientes vías
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col py-4 gap-2">
        <div className="flex rounded-xl items-center bg-slate-100 w-full p-4 relative hover:drop-shadow hover:cursor-pointer">
          <MessengerSvg width={40} height={40} />
          <a
            className="after:absolute after:inset-0 ps-4"
            href="https://m.me/133917909411"
            target="_blank"
          >
            Facebook Messenger
          </a>
        </div>
        <div className="flex rounded-xl items-center bg-slate-100 w-full p-4 relative hover:drop-shadow hover:cursor-pointer">
          <WhatsAppSvg width={40} height={40} />
          <a
            className="after:absolute after:inset-0 ps-4"
            href="https://bit.ly/filadelfialaguna-wpp"
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex rounded-xl items-center bg-slate-100 w-full p-4 relative hover:drop-shadow hover:cursor-pointer">
          <MailboxSvg width={40} height={40} />
          <a
            className="after:absolute after:inset-0 ps-4"
            href="mailto:info@filadelfialaguna.com.ar"
          >
            Correo Electrónico{" "}
          </a>
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

export default ContactDialog;
