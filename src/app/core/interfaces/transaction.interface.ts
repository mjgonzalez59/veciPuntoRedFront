export interface TransactionRequest {
  cellPhone: string;
  value: number;
  supplierId: string;
}

export interface TransactionResponse {
  transactionalId: string;
  phoneNumber: string;
  value: number;
}
