import React, { useState } from 'react';
import TimeTable from './components/TimeTable';
import SubjectForm from './components/SubjectForm';
import GradeCalculator from './components/GradeCalculator';
import Nav from './components/Nav';
import './styles/App.scss';  //스타일

const App = () => {
  const [subjects, setSubjects] = useState([]);   //수강과목 동록
  const [editingSubject, setEditingSubject] = useState(null);   //

  const addSubject = (subject) => {
    if (editingSubject) {
      setSubjects((prev) =>
        prev.map((subj) => (subj.id === editingSubject.id ? subject : subj))
      );
      setEditingSubject(null);
    } else {
      setSubjects([...subjects, { ...subject, id: Date.now() }]);
    }
  };

  const deleteSubject = (id) => {
    setSubjects((prev) => prev.filter((subject) => subject.id !== id));
  };
  
  return (
    <div className="app">
      <div className='appDate'>
        <Nav />
        <h1>대학교 시간표 관리</h1>
        <SubjectForm addSubject={addSubject} editingSubject={editingSubject} />
        <TimeTable
          subjects={subjects}
          onEdit={setEditingSubject}
          onDelete={deleteSubject}
        />
        <GradeCalculator subjects={subjects} />
      </div>
      <div className='one'>
        <button></button>{/* 버튼 클릭 시 시간표 초기화 기능 구현 */}
      </div>
    </div>
  );
};

export default App;