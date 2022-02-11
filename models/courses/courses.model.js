const { Schema, model } = require('mongoose');

const courseSchema = Schema({
    title: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    teacher: {
        type: String,
        required: [true, 'el profesor es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'la descripción es obligatoria']
    },
    topic: {
        type: String,
        required: [true, 'el tópico es obligatorio']
    }
});

module.exports = model('Course', courseSchema);
