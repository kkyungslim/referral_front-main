import { PartnerData } from '@/lib/types';
import BybitBoxIcon from '@/components/icons/BybitBoxIcon';
import { v4 } from 'uuid';
import BitgetBoxIcon from '@/components/icons/BitgetBoxIcon';
import BingXBoxIcon from '@/components/icons/BIngXBoxIcon';
import OKXBoxIcon from '@/components/icons/OKXBoxIcon';
import HTXBoxIcon from '@/components/icons/HTXBoxIcon';
import GateIoBoxIcon from '@/components/icons/GateIoBoxIcon';

const partnerData: PartnerData[] = [
  {
    value: 'BITGET',
    name: 'Bitget',
    amount: '212만원',
    icon: <BitgetBoxIcon width={30} height={30} />,
    id: v4(),
  },
  {
    value: 'GATEIO',
    name: 'Gate',
    amount: '200만원',
    icon: <GateIoBoxIcon width={30} height={30} />,
    id: v4(),
  },
  {
    value: 'BINGX',
    name: 'BingX',
    amount: '30만원',
    icon: <BingXBoxIcon width={30} height={30} />,
    id: v4(),
  },
  {
    value: 'HTX',
    name: 'HTX',
    amount: '9만원',
    icon: <HTXBoxIcon width={30} height={30} />,
    id: v4(),
  },
  {
    value: 'OKX',
    name: 'OKX',
    amount: '70만원',
    icon: <OKXBoxIcon width={30} height={30} />,
    id: v4(),
  },
  {
    value: 'BYBIT',
    name: 'Bybit',
    amount: '83만원',
    icon: <BybitBoxIcon width={30} height={30} />,
    id: v4(),
  },
];

export default partnerData;
