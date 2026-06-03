export interface Comment {
  id: number;
  text: string;
  children: Comment[];
}
