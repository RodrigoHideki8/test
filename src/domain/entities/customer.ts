import { IEntity } from '../../domain/entities';

export interface ICustomer extends IEntity {
  tenantId: Required<Readonly<string>>;
  name: string;
  email: string;
  documentType: string;
  documentValue: string;
  phoneNumber: string;
  motherName: string;
  birthDate: Date;

  setTenantId(tenantId: string): ICustomer;
  setName(name: string): ICustomer;
  setEmail(email: string): ICustomer;
  setDocumentType(documentType: string): ICustomer;
  setDocumentValue(documentValue: string): ICustomer;
  setPhoneNumber(phoneNumber: string): ICustomer;
  setMotherName(motherName: string): ICustomer;
  setBirthDate(birthDate: Date): ICustomer;

  createCustomer(): void;
  updateCustomer(): void;
  deleteCustomer(): void;
}
