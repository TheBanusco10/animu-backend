interface APIResponse<T> {
  data: T | null;
  status: number;
  message?: string;
}

export type { APIResponse };
