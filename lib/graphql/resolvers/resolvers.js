'use strict';
const Course = require('../../../models/courses/courses.model');
const student = require('../../../models/courses/student.model')
const types = require('../types');
module.exports = {
    Query: {
        // retorna todos los cursos
        getCourses: async () => {
            try {
                return await Course.find();
            } catch (error) {
                console.log(error);
            }
        },
        // retorna un curso por id
        getCourse: async (root, { id }) => {
            try {
                return await Course.findOne({ _id: id });
            } catch (error) {
                return error;
            }
        },
        // retorna los estudiantes
        getPersons: async (root, args) => {
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

        CreatePerson: async (root, { input }) => {
            try {
                return await student.create(input)
            } catch (error) {
                console.log(error);
            }
        }

        ,
        EditPerson: async (root, { input }) => {
            try {
                return await student.findByIdAndUpdate(input._id, input)
            } catch (error) {
                console.log(error);
            }
        },
        RemovePerson: async (root, { input }) => {
            try {
                return await student.findByIdAndDelete(input)
            } catch (error) {
                console.log(error);
            }
        },
        AddPersonToCourse: async (root, { courseId, studentId }) => {
            try {
                return await Course.findByIdAndUpdate(courseId, { $addToSet: { students: studentId } })
            } catch (error) {
                console.log(error);
            }
        }
    },
    ...types
};
