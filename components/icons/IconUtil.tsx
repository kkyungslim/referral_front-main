import BitgetBoxIcon from "@/components/icons/BitgetBoxIcon";
import BybitBoxIcon from "@/components/icons/BybitBoxIcon";
import BingXBoxIcon from "@/components/icons/BIngXBoxIcon";
import OKXBoxIcon from "@/components/icons/OKXBoxIcon";
import HTXBoxIcon from "@/components/icons/HTXBoxIcon";
import GateIoBoxIcon from "@/components/icons/GateIoBoxIcon";
import BitgetBtnIcon from "@/components/icons/BitgetBtnIcon";
import ByBitBtnIcon from "@/components/icons/ByBitBtnIcon";
import BingXBtnIcon from "@/components/icons/BingXBtnIcon";
import OKXBtnIcon from "@/components/icons/OKXBtnIcon";
import HTXBtnIcon from "@/components/icons/HTXBtnIcon";
import GateIoBtnIcon from "@/components/icons/GateIoBtnIcon";

export function getMarketIcon(marketName: string, width: number, height: number) {
  switch (marketName.toUpperCase()) {
    case 'BITGET':
      return <BitgetBoxIcon width={width} height={height} />;
    case 'BYBIT':
      return <BybitBoxIcon width={width} height={height} />;
    case 'BINGX':
      return <BingXBoxIcon width={width} height={height} />;
    case 'OKX':
      return <OKXBoxIcon width={width} height={height} />;
    case 'HTX':
      return <HTXBoxIcon width={width} height={height} />;
    case 'GATEIO':
      return <GateIoBoxIcon width={width} height={height} />;
  }
  return marketName;
}

export function getMarketButtonIcon(marketName: string, width: number, height: number) {
  switch (marketName.toUpperCase()) {
    case 'BITGET':
      return <BitgetBtnIcon width={width} height={height} />;
    case 'BYBIT':
      return <ByBitBtnIcon width={width} height={height} />;
    case 'BINGX':
      return <BingXBtnIcon width={width} height={height} />;
    case 'OKX':
      return <OKXBtnIcon width={width} height={height} />;
    case 'HTX':
      return <HTXBtnIcon width={width} height={height} />;
    case 'GATEIO':
      return <GateIoBtnIcon width={width} height={height} />;
  }
  return marketName;
}