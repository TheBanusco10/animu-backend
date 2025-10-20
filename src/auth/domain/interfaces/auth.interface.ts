import { AuthTokenResponse } from '@/auth/domain/types/authToken';

export default interface AuthInterface {
  getAuthorizeUri(): Promise<string>;
  createAuthToken(code: string): Promise<AuthTokenResponse>;
}
