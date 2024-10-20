import { toast } from 'sonner';

export const notEmptyMessage = (fieldName: string) => {
  return `${fieldName} không được để trống`;
};

export const fieldRequiredMessage = () => {
  return 'Trường này không được để trống';
};

export const maxLengthMessage = (fieldName: string, maxLength = 255) => {
  return `${fieldName} không được để trống và không được quá ${maxLength} ký tự`;
};

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatCurrency = (amount: number) => {
  return numberWithCommas(amount) + ' VNĐ';
};

export const handleError = (error: any) => {
  toast.error(error?.response?.data?.message || error.message || 'Lỗi hệ thống');
};
