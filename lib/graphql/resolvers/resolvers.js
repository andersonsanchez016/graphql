'use strict';
const Course = require('../../../models/courses/courses.model');

module.exports = {
    // retorna todos los cursos
    Query: {
        getCourses: async () => {
            try {
                return await Course.find();
            } catch (error) {
                console.log(error);
            }
        },
        getCourse: async (root, args) => {
            try {
                return await Course.findOne({ _id: args.id });
            } catch (error) {
                return error;
            }
        }
    },

    Mutation: {
        CreateCourse: async (root, { input }) => {
            try {
                return await Course.create(input);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
