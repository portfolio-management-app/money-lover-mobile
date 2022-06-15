import { AxiosResponse } from 'axios';

export class HttpError {
  protected statusCode: number = 0;
  protected message: string = '';

  constructor(response?: AxiosResponse) {
    if (response) {
      this.statusCode = response.status;
      this.message = response.data;
    }
  }

  get httpMessage() {
    return this.message;
  }
  get code() {
    return this.statusCode;
  }

  getDefaultMessage() {
    return '';
  }
  setMessage(message: string) {
    this.message = message;
  }
}
