export interface Messages {
    message: string;
    me?: boolean;
    from?: {
      id?: number;
      name: string;
      email?: string;
    };
    senderId?: string;
    receiveId?: string; 
  }
  