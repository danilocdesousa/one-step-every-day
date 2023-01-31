import { Plus } from "phosphor-react";
import logoImage from "../assets/habits_logo.svg";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  


  return (
    <div className="w-full max-w-3xl mx-auto flex justify-between items-center">
      <img src={logoImage} alt="Habits logo" />
      
      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-400"
        >
          <Plus size={20} className="text-violet-500" /> Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>
          <Dialog.Content>
            Modal content
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
