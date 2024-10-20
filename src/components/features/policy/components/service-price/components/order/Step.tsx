import { TableCustom } from '@/components/shared/tables';
import React from 'react';
import { TitleStep } from './TitleStep';

interface IColumn<K> {
  title: string;
  key: K;
}

const columns: IColumn<'level' | 'total' | 'fee'>[] = [
  {
    title: 'Cấp độ',
    key: 'level',
  },
  {
    title: 'Tổng tiền đơn mỗi tháng',
    key: 'total',
  },
  {
    title: 'Phí dịch vụ (% giá trị đơn)',
    key: 'fee',
  },
];

const data = [
  {
    level: 'Cấp 1',
    total: 'Từ 0 đến 50tr',
    fee: '5%',
  },
  {
    level: 'Cấp 2',
    total: 'Từ 51tr đến 200tr',
    fee: '4%',
  },
  {
    level: 'Cấp 3',
    total: 'Từ 201tr đến 250tr',
    fee: '3,5%',
  },
  {
    level: 'Cấp 4',
    total: 'Từ 250tr đến 300tr',
    fee: '3%',
  },
  {
    level: 'Cấp 5',
    total: 'Trên 300tr',
    fee: 'Liên hệ',
  },
];

export const Step = () => {
  return (
    <div>
      <TitleStep index={1} title="TIỀN HÀNG TRÊN WEB: Giá sản phẩm niêm yết trên website" />
      <TitleStep
        index={2}
        title="PHÍ SHIP TRUNG QUỐC: Phí vận chuyển từ người bán tới kho hàng tại Trung quốc"
      />
      <TitleStep
        index={3}
        title="PHÍ DỊCH VỤ: Áp dụng theo bảng phí dưới đây"
        subtitle="(đã bao gồm kiểm hàng)"
      />

      <div className="mb-4 overflow-x-auto">
        <TableCustom columns={columns} data={data} />
      </div>

      <TitleStep index={4} title="CƯỚC VẬN CHUYỂN CÂN NẶNG: Áp dụng theo mức phí dưới đây" />
      <WeightShipping />
    </div>
  );
};

const WeightShipping = () => {
  const columns: IColumn<'total' | 'hn' | 'sg'>[] = [
    {
      title: 'Tổng cân nặng mỗi tháng',
      key: 'total',
    },
    {
      title: 'Về HN(đ/kg)',
      key: 'hn',
    },
    {
      title: 'Về SG(đ/kg)',
      key: 'sg',
    },
  ];

  const data = [
    {
      total: 'Sản lượng 1 tháng dưới 150kg',
      hn: '26.700',
      sg: '32.700',
    },
    {
      total: 'Sản lượng 1 tháng từ 150kg đến 2000kg',
      hn: '25.700',
      sg: '31.700',
    },
    {
      total: 'Sản lượng 1 tháng trên 2000kg',
      hn: '24.700',
      sg: '30.700',
    },
  ];

  return (
    <>
      <div>
        <b>a. Bảng giá theo kg:</b>
        <p>
          Thời gian hàng về Hà Nội từ 03-05 ngày, thời gian hàng về TP.HCM từ 04-06 ngày trong điều
          kiện thông quan bình thường.
        </p>
      </div>

      <div className="my-4 overflow-x-auto">
        <TableCustom columns={columns} data={data} />
      </div>
    </>
  );
};
