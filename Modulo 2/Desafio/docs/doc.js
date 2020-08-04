export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'grades-control-api',
    version: '1.0.0',
    title: 'Grades Control Api',
  },
  host: 'localhost:3000',
  tags: [
    {
      name: 'grades',
      description: 'Grades management',
    },
  ],
  paths: {
    '/grades': {
      post: {
        tags: ['grades'],
        summary: 'Create new grade',
        description: 'Create a new grade with the received parameters',
        consumes: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              $ref: '#/definitions/Grades',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Grade created',
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },
    '/grades/updateValue/{id}': {
      patch: {
        tags: ['grades'],
        summary: 'Updates the value of a grade',
        description: 'Updates the value of a grade',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Grade ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              type: 'integer',
              example: 9.5,
            },
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
          },
          '400': {
            description: 'Error occurred',
          },
          '404': {
            description: 'ID not Found',
          },
        },
      },
    },
    '/grades/getStudentById/{id}': {
      put: {
        tags: ['grades'],
        summary: 'Updates a grade',
        description: 'Updates a grade',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Grade ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              $ref: '#/definitions/Grades',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Grades',
              },
            },
          },
          '400': {
            description: 'Error occurred',
          },
          '404': {
            description: 'ID not Found',
          },
        },
      },
      delete: {
        tags: ['grades'],
        summary: 'Delete a grade',
        description: 'Delete a grade',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Grade ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
          },
          '400': {
            description: 'Error occurred',
          },
          '404': {
            description: 'ID not Found',
          },
        },
      },
      get: {
        tags: ['grades'],
        summary: 'Return a grade',
        description: 'Return a grade',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Grade ID',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/FullGrades',
              },
            },
          },
          '400': {
            description: 'Error occurred',
          },
          '404': {
            description: 'ID not Found',
          },
        },
      },
    },
    '/grades/getStudentTotalScore': {
      get: {
        tags: ['grades'],
        summary: 'Get student total score',
        description: 'Get student total score',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              $ref: '#/definitions/StudentGrade',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/TotalGrade',
              },
            },
          },
          '400': {
            description: 'Error occurred',
          },
          '404': {
            description: 'Student or subject not found',
          },
        },
      },
    },
    '/grades/getSubjectAverageGrade': {
      get: {
        tags: ['grades'],
        summary: 'Get student average score',
        description: 'Get student average score',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              $ref: '#/definitions/SubjectAverageGrade',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/AverageGrade',
              },
            },
          },
          '400': {
            description: 'Error occurred',
          },
          '404': {
            description: 'Type or subject not found',
          },
        },
      },
    },
    '/grades/getTop3Grades': {
      get: {
        tags: ['grades'],
        summary: 'Get student average score',
        description: 'Get student average score',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              $ref: '#/definitions/SubjectAverageGrade',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/FullGrades',
              },
            },
          },
          '400': {
            description: 'Error occurred',
          },
          '404': {
            description: 'Type or subject not found',
          },
        },
      },
    },
    '/grades/all': {
      get: {
        tags: ['grades'],
        summary: 'Get all existing grades',
        description: 'Get all existing grades description',
        produces: ['application/json'],
        responses: {
          '200': {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Grades',
              },
            },
          },
          '400': {
            description: 'Error occurred',
          },
        },
      },
    },
  },
  definitions: {
    Grades: {
      type: 'object',
      properties: {
        student: {
          type: 'string',
          example: 'Guilherme Assis',
        },
        subject: {
          type: 'string',
          example: 'Math',
        },
        type: {
          type: 'string',
          example: 'Fórum',
        },
        value: {
          type: 'integer',
          example: 9.5,
        },
      },
    },
    StudentGrade: {
      type: 'object',
      properties: {
        student: {
          type: 'string',
          example: 'Guilherme Assis',
        },
        subject: {
          type: 'string',
          example: 'Math',
        },
      },
    },
    TotalGrade: {
      type: 'object',
      properties: {
        totalScore: {
          type: 'integer',
          example: 20,
        },
      },
    },
    AverageGrade: {
      type: 'object',
      properties: {
        averageScore: {
          type: 'integer',
          example: 20,
        },
      },
    },
    SubjectAverageGrade: {
      type: 'object',
      properties: {
        subject: {
          type: 'string',
          example: 'Math',
        },
        type: {
          type: 'string',
          example: 'Fórum',
        },
      },
    },
    FullGrades: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: 21,
        },
        student: {
          type: 'string',
          example: 'Guilherme Assis',
        },
        subject: {
          type: 'string',
          example: 'Math',
        },
        type: {
          type: 'string',
          example: 'Fórum',
        },
        value: {
          type: 'integer',
          example: 9.5,
        },
        timestamp: {
          type: 'string',
          example: '2020-05-19T18:21:24.987Z',
        },
      },
    },
  },
};
