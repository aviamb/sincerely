interface tags {
    text: string;
    color: string;
    hover: string;
    // onClick: () => void;
};

export const tags: tags[] = [
    {
        text: "#love",
        color: "bg-sincerely-red",
        hover: "hover:bg-sincerely-red-hover",
    },
    {
        text: "#class",
        color: "bg-sincerely-yellow",
        hover: "hover:bg-sincerely-yellow-hover",
    },
    {
        text: "#ucr",
        color: "bg-sincerely-blue",
        hover: "hover:bg-sincerely-blue-hover",
    },
    {
        text: "#other",
        color: "bg-sincerely-green",
        hover: "hover:bg-sincerely-green-hover",
    },
]