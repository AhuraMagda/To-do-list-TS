export interface Task {
    title: string;
    done: boolean;
    category?: Category;
} 

export enum Category {
    GENERAL = "general",
    CODING = "coding",
    IMPORTANT = "important",    
}