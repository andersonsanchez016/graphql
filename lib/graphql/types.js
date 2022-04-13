'use strict'
const student = require('../../models/courses/student.model')
module.exports = {
    Course: {
        students: async ({ students }) => {
            try {
                return await student.find({ _id: { $in: students } })
            } catch (error) {
                console.log(error);
            }
        }
    }
}