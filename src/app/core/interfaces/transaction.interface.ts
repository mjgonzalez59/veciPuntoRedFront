export interface TransactionRequest {
  cellPhone: string;
  value: number;
  supplierId: string;
}

export interface TransactionResponse {
  message: string;
  transactionalID: string;
  cellPhone: string;
  value: number;
}
