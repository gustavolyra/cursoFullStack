import express from 'express';
import cors from 'cors';
import {
  getJson,
  writeJson,
  getTotalScore,
  filterByStudent,
  filterBySubject,
  filterByType,
  getAverageScore,
  getTop3Score,
} from '../jsonHandler.js';

import {
  isGradeValid,
  isStudentSubjectValid,
  isTypeSubjectValid,
} from '../validator.js';

const router = express.Router();
export default router;

//Return all grades from JSON
router.get('/all', async (req, res, next) => {
  try {
    const json = await getJson();
    res.send(json.grades);
  } catch (err) {
    next();
  }
});

//Post New Grade
//Etapa 1
router.post('/', async (req, res, next) => {
  try {
    const msg = req.body;
    if (isGradeValid(msg)) {
      const json = await getJson();
      const time = new Date();

      let newGrade = {
        id: json.nextId,
        student: msg.student,
        subject: msg.subject,
        type: msg.type,
        value: msg.value,
        timestamp: time,
      };

      json.nextId++;
      json.grades.push(newGrade);
      await writeJson(json);
      res.status(200).send('Grades created');
    } else {
      throw new Error('Student, Subject, Type and value são obrigatórios');
    }
  } catch (err) {
    global.logger.error(`${err.message}`);
    res.status(400).send({ error: err.message });
  }
});

//Change data from id
//Etapa 2
router.put('/getStudentById/:id/', async (req, res, next) => {
  try {
    const msg = req.body;
    const id = parseInt(req.params.id);

    if (isGradeValid(msg) && id > 0) {
      const json = await getJson();
      const time = new Date();
      const index = json.grades.findIndex((grade) => grade.id === id);

      if (index < 0) {
        res.status(404).send('Id not found');
      }

      json.grades[index] = {
        id: id,
        student: msg.student,
        subject: msg.subject,
        type: msg.type,
        value: msg.value,
        timestamp: time,
      };

      writeJson(json);

      res.status(200).send('Grade update with success');
    } else {
      throw new Error(
        'Student, Subject, Type and value são obrigatórios e ID >= 0'
      );
    }
  } catch (err) {
    global.logger.error(`${err.message}`);
    res.status(400).send({ error: err.message });
  }
});

//Delete grade by id
//Etapa 3
router.delete('/getStudentById/:id/', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (id > 0) {
      const json = await getJson();
      let jsonLength = json.grades.length;
      json.grades = json.grades.filter((grade) => grade.id !== id);

      if (jsonLength === json.grades.length) {
        res.status(404).send('Id not found');
      }

      writeJson(json);

      res.status(200).send('Grade deleted with success');
    } else {
      throw new Error('ID >= 0');
    }
  } catch (err) {
    global.logger.error(`${err.message}`);
    res.status(400).send({ error: err.message });
  }
});

//Get a grade from id
//Etapa 4
router.get('/getStudentById/:id/', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (id > 0) {
      const json = await getJson();
      const index = json.grades.findIndex((grade) => grade.id === id);

      if (index < 0) {
        res.status(404).send('Id not found');
      }

      res.status(200).send(json.grades[index]);
    } else {
      throw new Error('ID >= 0');
    }
  } catch (err) {
    global.logger.error(`${err.message}`);
    res.status(400).send({ error: err.message });
  }
});

//Get a grade from student and subject
//Etapa 5
router.get('/getStudentTotalScore', async (req, res, next) => {
  try {
    const msg = req.body;
    if (isStudentSubjectValid(msg)) {
      const student = msg.student;
      const subject = msg.subject;
      const json = await getJson();
      const foundStudent = filterByStudent(json.grades, student);
      const found = filterBySubject(foundStudent, subject);
      const totalScore = getTotalScore(found);
      if (found.length < 0) {
        res.status(404).send('Student and Subject not found');
      }
      res.status(200).send(totalScore);
    } else {
      throw new Error('Student and Subject são obrigatórios');
    }
  } catch (err) {
    global.logger.error(`${err.message}`);
    res.status(400).send({ error: err.message });
  }
});

//Get average grade from subject and type
//Etapa 6
router.get('/getSubjectAverageGrade', async (req, res, next) => {
  try {
    const msg = req.body;
    if (isTypeSubjectValid(msg)) {
      const type = msg.type;
      const subject = msg.subject;
      const json = await getJson();
      const foundType = filterByType(json.grades, type);
      const found = filterBySubject(foundType, subject);
      if (found.length < 0) {
        res.status(404).send('Type and Subject not found');
      }

      const averageScore = getAverageScore(found);

      res.status(200).send(averageScore);
    } else {
      throw new Error('Type and Subject são obrigatórios');
    }
  } catch (err) {
    global.logger.error(`${err.message}`);
    res.status(400).send({ error: err.message });
  }
});

//Get top 3 grades from subject and type
//Etapa 7
router.get('/getTop3Grades', async (req, res, next) => {
  try {
    const msg = req.body;
    if (isTypeSubjectValid(msg)) {
      const type = msg.type;
      const subject = msg.subject;
      const json = await getJson();
      const foundType = filterByType(json.grades, type);
      const found = filterBySubject(foundType, subject);
      if (found.length < 0) {
        res.status(404).send('Type and Subject not found');
      }

      const topScore = getTop3Score(found);

      res.status(200).send(topScore);
    } else {
      throw new Error('Type and Subject são obrigatórios');
    }
  } catch (err) {
    global.logger.error(`${err.message}`);
    res.status(400).send({ error: err.message });
  }
});
