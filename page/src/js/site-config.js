const siteConfig = {
    // 站点基本信息
    site: {
        name: "LrcAPI",
        logo: "/src/img/LrcAPI-Text-Extra.png",
        github: "https://github.com/hisatri/LrcAPI",
        license: {
            name: "GNU General Public License v3.0",
            url: "https://github.com/HisAtri/LrcApi/blob/main/LICENSE"
        }
    },
    
    // 页面导航
    navigation: [
        {
            text: "回到主页",
            url: "/",
            showInFooter: true
        },
        {
            text: "致谢名单",
            url: "/acknowledgments.html",
            showInFooter: true
        }
    ],

    // 致谢页面模块配置
    acknowledgments: {
        barrage: {   // 弹幕系统
            enabled: true,
            messages: [
                "项目越来越好！",
                "加油！继续努力！",
                "很棒的项目！",
                "支持开源！",
                "希望项目能一直维护下去",
                "太赞了！",
                "非常实用的API",
                "非常好的项目，爱来自LinuxDo",
                "请你吃疯狂星期四",
                "Good Job！",
                "感谢开发者！",
                "真好用",
                "完美，好东西！",
                "很棒！继续加油",
                "很简单——MOA"
            ]
        },
        financial: {   // 财务状况
            enabled: true,
            amount: -1280.50,   // 负数表示亏损，正数表示收益
            currency: '￥',      // 货币符号
            duration: 2000,     // 动画持续时间（毫秒）
        },
        supporters: {           // 赞助者名单
            enabled: true,
            data: [
                { name: '星辰', amount: 15.00 },
                { name: '流光', amount: 8.88 },
                { name: '清风', amount: 12.50 },
                { name: '明月', amount: 30.00 },
                { name: '2333', amount: 25.00 },
                { name: 'Sakura', amount: 18.88 },
                { name: '云霄', amount: 66.60 },
                { name: 'Yuki', amount: 9.99 },
                { name: '晨曦', amount: 23.33 },
                { name: 'Luna', amount: 45.00 },
                { name: '飞雪', amount: 38.88 },
                { name: '秦始皇', amount: 50.00 }
            ]
        }
    }
};
