import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/app/ui/Dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface EntryProps {
    id: string;
    text: string;
    timestamp: any;
}

const Entry = ({text, id, timestamp}: EntryProps) => {
    const formattedTimestamp = timestamp?.toDate?.().toLocaleDateString() || 'Undated';

    return (

        <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square border p-6 break-words relative cursor-pointer overflow-hidden"> 
          <p className="line-clamp-10">{text}</p>
          <p className="absolute bottom-0 right-0 text-xs text-gray-500 p-4">
            {formattedTimestamp}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="rounded-md aspect-3/4 md:aspect-square w-3/4">
        <VisuallyHidden asChild>
            <DialogTitle>Entry</DialogTitle>
        </VisuallyHidden>
        <div className="space-y-4 p-1 md:p-3 overflow-y-auto">
          <div className="text-xs md:text-sm text-gray-500">
            {formattedTimestamp}
          </div>
          <div className="break-words text-xs md:text-sm">
            {text}
          </div>
        </div>
      </DialogContent>
    </Dialog>
    );
};

export default Entry;