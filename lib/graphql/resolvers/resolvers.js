'use strict';
const Course = require('../../../models/courses/courses.model');
const student = require('../../../models/courses/student.model')
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
        },
        getStudents: async (root, args) => {
            try {
                return await student.find()
            } catch (error) {
                console.log(error);
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
        },

        CreateStudent: async (root, { input }) => {
            try {
                return await student.create(input)
            } catch (error) {
                console.log(error);
            }
        }

        ,
        EditStudent: async (root, { input }) => {
            try {
                console.log(input)
                return await student.findByIdAndUpdate(input._id, input)
            } catch (error) {
                console.log(error);
            }
        },
        RemoveStudent: async (root, { input }) => {
            try {
                return await student.findByIdAndDelete(input)
            } catch (error) {
                console.log(error);
            }
        }
    }
};
