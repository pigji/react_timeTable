import React from "react";
import '../styles/Timetable.scss';  //스타일

const TimeTable = ({ subjects, onEdit, onDelete }) => {

  //요일 데이터 생성
  const days = ["월", "화", "수", "목", "금"];
  //시간 데이터 생성[ 09시~18시 ]
  const times = Array.from({ length: 10 }, (_, i) => `${9 + i}:00`);


  //시간표
  return (
    <div className="time-table">
      <table>
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td>{time}</td>
              {days.map((day) => (
                <td key={`${day}-${time}`}>
                  {subjects
                    .filter((subj) => subj.day === day && subj.time === time)
                    .map((subject) => (
                      <div
                        key={subject.id}
                        className="subject-block"
                        style={{ backgroundColor: subject.color }}
                      >
                        <strong>{subject.name}</strong>
                        <button onClick={() => onEdit(subject)}>수정</button>
                        <button onClick={() => onDelete(subject.id)}>삭제</button>
                      </div>
                    ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;