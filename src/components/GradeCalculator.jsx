import React from "react";

const GradeCalculator = ({ subjects }) => {
  // 학점 합계와 성적 합계를 계산
  const calculateGPA = () => {
    if (subjects.length === 0) return 0;

    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      totalCredits += subject.credit;
      totalPoints += subject.credit * (subject.grade || 4.0); // 기본값은 A (4.0)
    });

    return (totalPoints / totalCredits).toFixed(2);
  };

  const totalCredits = subjects.reduce((acc, subj) => acc + subj.credit, 0);


  //학점계산
  return (
    <div className="grade-calculator">
      <h2>학점 계산기</h2>
      <p>
        <strong>총 학점:</strong> {totalCredits}학점
      </p>
      <p>
        <strong>학점 평균:</strong> {calculateGPA()} / 4.5
      </p>
    </div>
  );
};

export default GradeCalculator;