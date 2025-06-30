'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // 드래그 앤 드롭 지원
import '@/assets/css/calendar.css';
import { UserCalenderData } from '@/lib/API';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

function Calendar({
  calenderData,
  events,
  setSelectedDate,
}: {
  calenderData?: UserCalenderData;
  events: { title: string; date: string }[];
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateSearchParams = useCallback(
    (paramsToUpdate: { key: string; value: string }[]) => {
      const params = new URLSearchParams(searchParams.toString());
      paramsToUpdate.forEach(({ key, value }) => {
        params.set(key, value);
      });
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router],
  );

  return (
    <div className="calendar-container">
      {calenderData && (
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events.map((e) => ({
            ...e,
            className: e.title.startsWith('-')
              ? 'fc-event-minus'
              : 'fc-event-plus',
          }))} // 날짜와 관련된 이벤트 데이터
          eventClassNames={'fit-content'}
          editable={false}
          locale="ko"
          headerToolbar={{
            right: 'prev,next', // 이전, 다음, 오늘 버튼
            left: 'title', // 캘린더 제목
          }}
          selectable
          // ✅ 오늘 이후는 선택 안됨
          selectAllow={({ start }) => {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            const selected = new Date(start);
            selected.setHours(0, 0, 0, 0);
            return selected <= now;
          }}
          // ✅ 오늘 이후 날짜는 회색(비활성화) 처리
          dayCellDidMount={(arg) => {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            const cellDate = new Date(arg.date);
            cellDate.setHours(0, 0, 0, 0);
            if (cellDate > now) {
              arg.el.classList.add('fc-day-disabled');
            }
          }}
          eventClick={(e) => {
            e.jsEvent.preventDefault(); // 클릭 막기
          }}
          select={({ start }) => {
            setSelectedDate(start);
          }}
          // validRange={(nowDate) => ({
          //   end: nowDate,
          // })}
          datesSet={(event) => {
            const midDate = new Date(
              (event.start.getTime() + event.end.getTime()) / 2,
            );
            const year = midDate.getFullYear().toString();
            const month = `${midDate.getMonth() + 1}`;
            if (
              searchParams.get('y') === year &&
              searchParams.get('m') === month
            )
              return;
            const arr: { key: string; value: string }[] = [];
            arr.push({ key: 'y', value: year });
            arr.push({ key: 'm', value: month });
            updateSearchParams(arr);
          }}
        />
      )}
    </div>
  );
}

export default Calendar;
