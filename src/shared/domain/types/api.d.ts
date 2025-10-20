interface APIResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export type { APIResponse };
