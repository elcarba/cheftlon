const mongoose = require('mongoose');

const chefSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
        },
        biography: {
            type: String,
        },
        country: {
            type: String,
            required: true,
        },
        sumScore: {
            type: Number,
            default: 0,
        },
        totalScore: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: false,
    }
)

const Chef = mongoose.model('Chef', chefSchema)

module.exports = Chef;