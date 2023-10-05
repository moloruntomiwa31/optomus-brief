import { format } from 'date-fns';

export const useDateFormatter = () => {
  const getFormattedDate = (date: string) => {
    return format(new Date(date), "do MMMM, yyyy");
  };
  return { getFormattedDate };
};
