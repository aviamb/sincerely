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
        <div className="aspect-square border p-6 break-words relative"> 
          <p className="line-clamp-10">{text}</p>
          <p className="absolute bottom-0 right-0 text-xs text-gray-500 p-4">
            {formattedTimestamp}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="aspect-square">
        <VisuallyHidden asChild>
            <DialogTitle>Entry</DialogTitle>
        </VisuallyHidden>
        <div className="space-y-4 p-6 overflow-y-auto">
          <div className="text-sm text-gray-500">
            {formattedTimestamp}
          </div>
          <div className="break-words">
            {text}
          </div>
        </div>
      </DialogContent>
    </Dialog>
    );
};

export default Entry;