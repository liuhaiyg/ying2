window.onload = function(){
    var oRight = document.getElementById("nav_right")
        oShop = document.getElementById("shopping");
        oR_shop = document.getElementById("r_shop");
        oR_shop1 = document.getElementById("r_shop1");
        oPic = document.getElementById("pic")
        oRight.onmouseover = function (){
            oRight.style.background = "#fff"
            oR_shop.style.color = "#ff6700"
            oR_shop1.style.color = "#ff6700"
            oShop.style.display = "block"
            oPic.src = "./src/assets/img/ia_100000359.png"
        }
        oRight.onmouseout = function (){
            oRight.style.background = "#424242"
            oR_shop.style.color = "#b0b0b0"
            oR_shop1.style.color = "#b0b0b0"
            oShop.style.display = "none"
            oPic.src = "./src/assets/img/ia_100000358.png"
        }
    

    var obigsearch = document.getElementsByClassName("con-search")[0];
        osearch = document.getElementsByClassName("search")[0];
        osubmit = document.getElementsByClassName("submit")[0];
        olist = document.getElementsByClassName("search-list")[0];
        osubmitimg = document.getElementsByClassName("submitimg")[0];
        osearchlist = document.getElementsByClassName("list-first");
        obigsearch.onmousedown = function (){
            if(olist.style.display == "block"){
                olist.style.display = "none";
                obigsearch.style.border = "";
                osearch.style.border = "";
            }else{
                olist.style.display = "block";
                obigsearch.style.border= "1px solid #ff6700";
                osearch.style.border = "1px solid #ff6700";
                for(var i=0;i<osearchlist.length;i++){
                    osearchlist[i].index = i;
                    osearchlist[i].onmouseover = function (){
                        this.style.background = "#f5f5f5";
                    }
                    osearchlist[i].onmouseout = function (){
                        this.style.background = "#fff";
                    }
                }
            }  
        }
        osubmit.onmouseover = function (){
            this.style.background = "#ff6700";
            osubmitimg.style.src = "./src/assets/img/搜索 (1).png";
        }
        osubmit.onmouseout = function (){
            this.style.background = "#fff";
            osubmitimg.style.src = "./src/assets/img/SEARCH.png";
        }

    var oFirst = document.getElementsByClassName("first");
    var oContair1 = document.getElementsByClassName("contair1");
    for(var i=0;i<oFirst.length;i++){   
        oFirst[i].index = i;
        oFirst[i].onmouseover = function(){ 
            // alert(1)       
            oFirst[this.index].style.color = "#ff6700";     
            oContair1[this.index].style.display = "block";
            oContair1[this.index].onmouseover = function(){
                this.style.display = "block";
            }
            oContair1[this.index].onmouseout = function(){
                this.style.display = "none";
            }
        }
        oFirst[i].onmouseout = function(){
            oFirst[this.index].style.color = "#333";
            oContair1[this.index].style.display = "none";
        }
    }

    var oleft = document.getElementsByClassName("el-carousel__arrow--left")[0];
    var oright = document.getElementsByClassName("el-carousel__arrow--right")[0];
    oleft.onmouseover = function (){
        this.style.backgroundPosition = '0 50%';
    }
    oleft.onmouseout = function (){
        this.style.backgroundPosition = '-83px 50%';
    }
    oright.onmouseover = function (){
        this.style.backgroundPosition = '-42px 50%';
    }
    oright.onmouseout = function (){
        this.style.backgroundPosition = '-123px 50%';
    }

    //电话侧边
    var oTitle = document.getElementsByClassName("list-item");
    var oitem1 = document.getElementsByClassName("item1");
    for(var i = 0;i<oTitle.length;i++){
        oTitle[i].index = i;
        oTitle[i].onmouseover = function (){
            oTitle[this.index].style.background = "#ff6700";
            oitem1[this.index].style.display = "block";
        }
        oTitle[i].onmouseout = function(){
            oTitle[this.index].style.background = "none";
            oitem1[this.index].style.display = "none";
        }
    }

    // 中间手机模块
    var omore = document.getElementsByClassName("more")[0];
    oaa = omore.children[0];
    omore.onmouseover = function(){
        oaa.style.color = "#ff6700";
    }
    omore.onmouseout = function(){
        oaa.style.color = "";
    }
    // 家电模块
    var omorea = document.getElementsByClassName("more")[1];
    oab = omorea.children;
    ohbL = document.getElementsByClassName("hb-L")[1];
    obannera = ohbL.children;  
    for(var i = 0;i<oab.length;i++){
        oab[i].index = i; 
        oab[i].onmouseover = function (){
            for(var j=0;j<oab.length;j++){
                oab[j].style.color = "";
                oab[j].style.borderBottom ="";
                obannera[j].classList.add("banner2")
            }
            this.style.color = "#ff6700";
            this.style.borderBottom ="3px solid #ff6700";
            obannera[this.index].classList.remove("banner2");
        }    
    }
    // 智能模块
    var omoreb = document.getElementsByClassName("more")[2];
    oac = omoreb.children;
    ohbL = document.getElementsByClassName("hb-L")[2];
    obannerb = ohbL.children;  
    for(var i = 0;i<oac.length;i++){
        oac[i].index = i; 
        oac[i].onmouseover = function (){
            for(var j=0;j<oac.length;j++){
                oac[j].style.color = "";
                oac[j].style.borderBottom ="";
                obannerb[j].style.display = "none";
            }
            this.style.color = "#ff6700";
            this.style.borderBottom ="3px solid #ff6700";
            obannerb[this.index].style.display = "block";
        }    
    }
    // 搭配模块
    var omorec = document.getElementsByClassName("more")[3];
    oad = omorec.children;
    ohbL = document.getElementsByClassName("hb-L")[3];
    obannerc = ohbL.children;  
    for(var i = 0;i<oad.length;i++){
        oad[i].index = i; 
        oad[i].onmouseover = function (){
            for(var j=0;j<oad.length;j++){
                oad[j].style.color = "";
                oad[j].style.borderBottom ="";
                obannerc[j].style.display = "none";
            }
            this.style.color = "#ff6700";
            this.style.borderBottom ="3px solid #ff6700";
            obannerc[this.index].style.display = "block";
        }    
    }
    // 配件模块
    var omored = document.getElementsByClassName("more")[4];
    oae = omored.children;
    ohbL = document.getElementsByClassName("hb-L")[4];
    obannerd = ohbL.children;  
    for(var i = 0;i<oae.length;i++){
        oae[i].index = i; 
        oae[i].onmouseover = function (){
            for(var j=0;j<oae.length;j++){
                oae[j].style.color = "";
                oae[j].style.borderBottom ="";
                obannerd[j].style.display = "none";
            }
            this.style.color = "#ff6700";
            this.style.borderBottom ="3px solid #ff6700";
            obannerd[this.index].style.display = "block";
        }    
    }

    // 周边模块
    var omoree = document.getElementsByClassName("more")[5];
    oaf = omoree.children;
    ohbL = document.getElementsByClassName("hb-L")[5];
    obannere = ohbL.children;  
    for(var i = 0;i<oaf.length;i++){
        oaf[i].index = i; 
        oaf[i].onmouseover = function (){
            for(var j=0;j<oaf.length;j++){
                oaf[j].style.color = "";
                oaf[j].style.borderBottom ="";
                obannere[j].style.display = "none";
            }
            this.style.color = "#ff6700";
            this.style.borderBottom ="3px solid #ff6700";
            obannere[this.index].style.display = "block";
        }    
    }

    //视频模块
    var omoref = document.getElementsByClassName("more")[6]
        oag = omoref.children[0];
        oba = document.getElementsByTagName("b")[1];

        omoref.onmouseover = function(){
            oag.style.color = "#ff6700";
            oba.style.background = "#ff6700";
            
        }
        omoref.onmouseout = function(){
            oag.style.color = "";
            oba.style.background = ""
        } 

    // 视频播放
    var oplay = document.getElementsByClassName("play");
        opop = document.getElementsByClassName("pop");
        opopdel = document.getElementsByClassName("pop-del");      
        osource = document.getElementsByClassName("source");
        for(var i=0;i<oplay.length;i++){
            oplay[i].index = i;
            oplay[i].onmouseover = function(){
                this.style.background = "#ff6700";
                this.style.border = "2px solid #ff6700";
            }
            oplay[i].onmousedown = function (){
                opop[this.index].style.display = "block";
                osource[this.index].src = "./src/assets/video/e25d81c4922fca5ebe51877717ef9b76.mp4";
            }
            oplay[i].onmouseout = function(){
                this.style.background = "";
                this.style.border = "";
            }
            for(var j=0;j<opopdel.length;j++){
                opopdel[j].index = j;
                opopdel[j].onmouseover = function (){
                    this.style.background = "rgba(243,83,83,1)";
                    this.style.color = "#fff";
                }
                opopdel[j].onmouseout = function(){
                    this.style.background = "";
                    this.style.color = "";
                }
                opopdel[j].onclick = function (){
                    opop[this.index].style.display = "none";
                    osource[this.index].src = "";
                }
            }
            
        }
        // 侧边栏
        var oaside1item = document.getElementsByClassName("aside1-item");
        var oaside1img1 = document.getElementsByClassName("aside1-img1");
        var oaside1text = document.getElementsByClassName("aside1-text");
        var oaside1content = document.getElementsByClassName("aside1-content")[0];
        var oaside1item1 = document.getElementsByClassName("aside1-item1")[0];
        for(var i=0;i<oaside1item.length;i++){
            oaside1item[i].index = i;
            oaside1item[i].onmouseover = function (){
                if(this.index == 0){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000350.png";
                    oaside1content.style.display = "block";
                    oaside1text[this.index].style.color = "#ff6700";
                }else if(this.index == 1){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000353.png";
                    oaside1text[this.index].style.color = "#ff6700";
                }else if(this.index == 2){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000355.png";
                    oaside1text[this.index].style.color = "#ff6700";
                }else if(this.index == 3){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000357.png";
                    oaside1text[this.index].style.color = "#ff6700";
                }else if(this.index == 4){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000359.png";
                    oaside1text[this.index].style.color = "#ff6700";
                }else if(this.index == 5){
                    oaside1img1[this.index].src = "./src/assets/img/ia_200001668.png";
                    oaside1text[this.index].style.color = "#ff6700";
                }
            }
            oaside1item[i].onmouseout = function (){
                if(this.index == 0){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000349.png";
                    oaside1content.style.display = "none";
                    oaside1text[this.index].style.color = "";
                }else if(this.index == 1){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000352.png";
                    oaside1text[this.index].style.color = "";
                }else if(this.index == 2){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000354.png";
                    oaside1text[this.index].style.color = "";
                }else if(this.index == 3){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000356.png";
                    oaside1text[this.index].style.color = "";
                }else if(this.index == 4){
                    oaside1img1[this.index].src = "./src/assets/img/ia_100000358.png";
                    oaside1text[this.index].style.color = "";
                }else if(this.index == 5){
                    oaside1img1[this.index].src = "./src/assets/img/ia_200001667.png";
                    oaside1text[this.index].style.color = "";
                }
            }
        }
        // 回到顶部
        var oaside1item2 = document.getElementsByClassName("aside1-item")[5]
        window.onscroll = function (){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop>=500){
                oaside1item2.style.display = "block";
            }else{
                oaside1item2.style.display = "none";
            }
            oaside1item2.onclick = function(){
                document.documentElement.scrollTop = document.body.scrollTop = 0
            }
        }
      
        //底部定时更换图片
        var flash = document.getElementsByClassName("img1")[0];
        var imgArr = ["./src/assets/img/ia_100000347.png","./src/assets/img/ia_100000348.png"]
        var timer;
        var index = 0;

        timer = setInterval(function(){
        
            index++;
        
            if(index >= imgArr.length)
            {
                index = 0;
            }
            
            flash.src = imgArr[index];
        },1000);

    
}
