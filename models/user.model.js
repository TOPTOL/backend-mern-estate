import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    toptol:{
        type: String,
        default: "https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/47378522_1820216624773276_3189148332656164864_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeEmZ-T7qnKwxCk74GM9BOYSiD5yLfxg5IeIPnIt_GDkh-W_GmSteYGR-BqqSuSmpnK0pqvCsVnrZ0WosSwWSA4j&_nc_ohc=0M5FtO948KMAX8LPmuy&_nc_pt=1&_nc_ht=scontent.flos1-2.fna&oh=00_AfB2Cryv5UAXRVZ4sgUnBrQ_dwIZaahC2hHu_r-2TODOuw&oe=65D8186D"

    }
}, { timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;