const PAGE_CTRL = {

    index : (req, res)=>{

        res.send("soy un index :)")
    },

    about:(req, res)=>{

        res.send("soy un abaut :D")
    },

    servise:  (req, res)=>{

        res.send("soy un servise :J")
    }
};

module.exports = PAGE_CTRL;