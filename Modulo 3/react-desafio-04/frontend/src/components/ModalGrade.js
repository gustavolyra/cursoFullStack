import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as api from '../api/apiServices';

Modal.setAppElement('#root');

export default function ModalGrade({ onSave, onClose, selectedGrade }) {
  const { id, type, value, student, subject } = selectedGrade;

  const [gradeValue, setGradeValue] = useState(value);
  const [gradeValidation, setGradeValidation] = useState({});
  const [erroMessage, setErroMessage] = useState('');

  useEffect(() => {
    const getValidation = async () => {
      const validation = await api.getValidationFromGradeType(type);
      setGradeValidation(validation);
    };
    getValidation();
  }, [type]);

  useEffect(() => {
    const { minValue, maxValue } = gradeValidation;
    if (gradeValue < minValue || gradeValue > maxValue) {
      setErroMessage(
        `O valor na nota deve ser entre ${minValue} e ${maxValue} (inclusive)`
      );
      return;
    }
    setErroMessage('');
  }, [gradeValue, gradeValidation]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose(null);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      id,
      newValue: gradeValue,
    };
    onSave(formData);
  };
  const handleGradeChange = (event) => {
    setGradeValue(+event.target.value);
  };
  const handleModalClose = () => {
    onClose(null);
  };

  return (
    <div>
      <Modal isOpen={true}>
        <div style={styles.flexRow}>
          <span style={styles.title}>Manutenção de notas</span>
          <button
            className="waves-effect waves-light btn red dark-4"
            onClick={handleModalClose}
          >
            X
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="input-field">
            <input type="text" id="inputName" value={student} readOnly />
            <label htmlFor="inputName" className="active">
              Nome do aluno:
            </label>
          </div>
          <div className="input-field">
            <input type="text" id="inputSubject" value={subject} readOnly />
            <label htmlFor="inputSubject" className="active">
              Disciplina:
            </label>
          </div>
          <div className="input-field">
            <input type="text" id="inputType" value={type} readOnly />
            <label htmlFor="inputType" className="active">
              Tipo de avaliação:
            </label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="inputValue"
              value={gradeValue}
              min={gradeValidation.minValue}
              max={gradeValidation.maxValue}
              step="1"
              autoFocus
              onChange={handleGradeChange}
            />
            <label htmlFor="inputValue" className="active">
              Nota:
            </label>
          </div>
          <div style={styles.flexRow}>
            <button
              className="waves-effect waves-light btn "
              disabled={erroMessage.trim() !== ''}
            >
              Salvar
            </button>
            <span style={styles.errorMessage}>{erroMessage}</span>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },

  title: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },

  flexStart: {
    justifyContent: 'flex-start',
  },

  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },
};
