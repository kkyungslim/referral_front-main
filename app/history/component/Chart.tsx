'use client';

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { UserPaybackInfo } from '@/lib/API';

interface Props {
  paybackInfo?: UserPaybackInfo;
}

function Chart({ paybackInfo }: Props) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current || typeof paybackInfo?.totalPayback !== 'number')
      return;

    const chart = echarts.init(chartRef.current);

    // 단일 값으로 구성된 차트
    const value = paybackInfo?.summary.monthly || 0;
    const beforeValue = paybackInfo?.summary.monthlyBefore || 0;
    const month = new Date().getMonth() + 1;
    const xAxisData = [`${month - 1}월 환급액`, `${month}월 환급액`];
    const seriesData = [beforeValue, value === 0 ? 0.00001 : value];
    const max = Math.max(...seriesData);

    const option = {
      title: { show: false },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}<br />{c} USDT',
        padding: [0, 0],
      },
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 30,
        borderColor: 'transparent',
      },
      xAxis: {
        type: 'category',
        data: xAxisData,
        axisLine: { show: false },
        axisLabel: {
          color: '#666',
          fontWeight: 'bold',
          fontSize: 16,
        },
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: max + 100,
        axisLine: { show: false },
        axisLabel: {
          formatter: '{value} USDT',
          color: '#666',
          fontSize: 14,
        },
      },
      series: [
        {
          data: seriesData.map((item) => item.toFixed(2)),
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#ff6600',
            width: 3,
          },
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#ff6600',
          },
          label: {
            show: true,
            position: 'top', // ✅ 점 위로 label 이동
            formatter: ['{c}', 'USDT'].join('\n'),
            color: '#000000',
            fontSize: 14,
            fontWeight: 'bold',
            fontFamily: 'pretendard',
            textAlign: 'center',
          },
        },
      ],
    };

    chart.setOption(option);
    window.addEventListener('resize', chart.resize);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', chart.resize);
    };
  }, [paybackInfo]);

  return <div ref={chartRef} className="w-full h-65" />;
}

export default Chart;
