import { useState } from 'react';
import { GetPatientsParamsType } from '../../../store/data-slices';

export const columnsName = ['Баллы', 'Пациент', 'Дата рождения', 'Пол', 'Button'];

const usePatientsData = () => {
  const [patientsData, setPatientsData] = useState<GetPatientsParamsType>({
    limit: '12',
    offset: '0',
    order_direction: 'asc',
  });

  return { patientsData, setPatientsData };
};

export default usePatientsData;
