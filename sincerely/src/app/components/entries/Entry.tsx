interface EntryProps {
    id: string;
    text: string;
    timestamp: any;
}

const Entry = ({text, id, timestamp}: EntryProps) => {
    const formattedTimestamp = timestamp?.toDate?.().toLocaleDateString() || 'Undated';

    return (
        <div className="aspect-square border p-6 break-words overflow-scroll relative"> 
            <p className="">{text}</p>
            <p className="absolute bottom-0 right-0 text-xs text-gray-300 p-4">{formattedTimestamp}</p>
        </div>
    );
};

export default Entry;