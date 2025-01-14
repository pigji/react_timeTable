import React, { useState, useEffect } from "react";
import '../styles/SubjectForm.scss';  //스타일

const SubjectForm = ({ addSubject, editingSubject }) => {

  //시간표 내용 입력
  const [form, setForm] = useState({
    name: "",     //수강 과목명
    day: "월",    //요일
    time: "9:00", //시간
    credit: 3,    //학점(3학점으로 초기 설정)
    grade: 4.0,   // 학점 등급(4.0학점 등급으로 초기 설정)
    color: "#FFD700",   //해당 요일 수강과목 시간 초기 색상지정
  });


  //수강과목 수정
  //수정할 데이터를 editingSubject로 전달받아 form 상태를 업데이트
  useEffect(() => {
    if (editingSubject) setForm(editingSubject);
  }, [editingSubject]);

  //수강과목 등록
  const handleSubmit = (e) => {
    e.preventDefault();   //새로고침 막기
    addSubject(form);     //부모 컴포넌트에 데이터 전달
    setForm({ name: "", day: "월", time: "9:00", credit: 3, grade: 4.0, color: "#FFD700" });
  };

  return (
    <div className="tableBox">
      <form onSubmit={handleSubmit}>
        <input
          className="courseName"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="수강 과목명"
          required  //필수입력
        />

        {/*사용자가 선택한 값은 form.day에 저장 */}
        <select value={form.day} onChange={(e) => setForm({ ...form, day: e.target.value })} >
          <option value="월">월</option>
          <option value="화">화</option>
          <option value="수">수</option>
          <option value="목">목</option>
          <option value="금">금</option>
        </select>

        <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} >
          {/* 9:00 ~ 18:00 시간 배열을 생성 */}
          {Array.from({ length: 10 }, (_, i) => `${9 + i}:00`).map((time) => (   
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        {/*학점*/}
        <input
          className="unit"
          type="number"
          value={form.credit}
          onChange={(e) => setForm({ ...form, credit: Number(e.target.value) })}
          placeholder="학점"
          required
        />

        {/*학점 등급*/}
        <select value={form.grade} onChange={(e) => setForm({ ...form, grade: Number(e.target.value) })} >
          <option value={4.5}>A+ (4.5)</option>
          <option value={4.0}>A (4.0)</option>
          <option value={3.5}>B+ (3.5)</option>
          <option value={3.0}>B (3.0)</option>
          <option value={2.5}>C+ (2.5)</option>
          <option value={2.0}>C (2.0)</option>
          <option value={1.5}>D+ (1.5)</option>
          <option value={1.0}>D (1.0)</option>
          <option value={0.0}>F (0.0)</option>
        </select>
        
        <input
          className="colorBox"
          type="color"
          value={form.color}
          onChange={(e) => setForm({ ...form, color: e.target.value })}
        />
        <button type="submit">{editingSubject ? "수정 완료" : "과목 추가"}</button>
      </form>
    </div>
  );
};
export default SubjectForm;