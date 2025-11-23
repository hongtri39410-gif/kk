export interface ColorSpec {
  name: string;
  hex: string;
  cmyk?: string;
  pantone?: string;
  description: string;
  textColor: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
