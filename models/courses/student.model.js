const { Schema, model } = require('mongoose');

const studentSchema = Schema({
    name: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    grade: {
        type: String,
        required: [true, 'el profesor es obligatorio']
    },
    age: {
        type: String,
        required: [true, 'la descripción es obligatoria']
    }
});

module.exports = model('student', studentSchema);
