Bibliotecas instaladas

Express
Winston
Cors
Swagger

Desenvolvimento de API, controlar de notas.
Usando o arquivo json/jsonBase/grades.js.
Formato:
--id: Identificador (int)
--student: Nome (string)
--subject: Matéria (string)
--type: Atividade (string)
--value: Nota (float)
--timestamp: Horário (String)

Etapas:
1)  Post Nova Grade, no body recebe como parâmetros, student, subject, type e value.
2)  Put, atualiza uma grade. Na URL recebe o id, no body recebe como parâmetros, student, subject, type e value.
3)  Delete, apaga uma grade. Na url recebe o id
4)  Get, consulta de uma grade especifica. URL recebe id. Retorna id, student, subject, type, value e timestamp.
5)  Get, nota total de um student e uma subject. URL recebe student e subject. Retorna a soma das notas.
6)  Get, nota media de um type e um subject. URL recebe type e subject. Retorna media das notas.
7)  Get, as 3 melhores notas de um subject e type. URL recebe type e subject. Retorna as 3 melhores notas.