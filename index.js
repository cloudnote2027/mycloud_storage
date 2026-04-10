const ImageKit = require("imagekit");

module.exports = async function (context) {
    // ImageKit ကို Setup လုပ်ခြင်း
    const ik = new ImageKit({
        publicKey: "public_uGqrsZTYrePq/ukMva9BNYblvVc=",
        privateKey: "private_lgh+Z8CvTwozqp5DShjofLAIihs=", // Private Key အပြည့်အစုံ
        urlEndpoint: "https://ik.imagekit.io/heakzgzwz"
    });

    try {
        // Front-end မှ သုံးရန် Authentication Parameters ထုတ်ယူခြင်း
        const authParams = ik.getAuthenticationParameters();
        
        // Website ဆီသို့ JSON format ဖြင့် ပြန်ပို့ပေးခြင်း
        return context.res.json(authParams);
    } catch (err) {
        // အမှားရှိပါက ပြန်ပြခြင်း
        return context.res.json({ error: err.message }, 500);
    }
};
