interface Note {
    id: number;
    title: string;
    content: string;
    timestamp: number;
    color: string;
    image: File | null | string;
}