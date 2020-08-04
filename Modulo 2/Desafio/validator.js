export const isGradeValid = (grade) => {
  if (!grade.student || !grade.subject || !grade.type || grade.value < 0) {
    return false;
  }
  return true;
};

export const isStudentSubjectValid = (grade) => {
  if (!grade.student || !grade.subject) {
    return false;
  }
  return true;
};

export const isTypeSubjectValid = (grade) => {
  if (!grade.type || !grade.subject) {
    return false;
  }
  return true;
};
