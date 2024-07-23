// 페이지 로드시 data.json 뿌려주기
$.ajax({
    url : "../js/data.json",
    success:function(data){ 
        let tag ='', tags='';
        $.each(data.items,function(k,v){
            if(v.tag3 != undefined) {
                tags = `
                <a href="">${v.tag1}</a>
                <a href="">${v.tag2}</a>
                <a href="">${v.tag3}</a>
                `
            } else {
                tags = `
                <a href="">${v.tag1}</a>
                <a href="">${v.tag2}</a>
                `

            }
            tag += `
                <figure data-aos="fade-up" data-aos-duration="1200">
                    <img src="${v.img}.webp" alt="">
                    <figcaption>
                        <p>${v.title}</p>
                        <p>
                            ${tags}
                        </p>
                    </figcaption>
                </figure>
            `
        })
        $(".a1-con").append(tag)
    },
    error:function(){
        
    }
})

// tags 에 a 를 클릭시 키워드가 포함된 콘텐츠만 재출력 
$(".tags a").on("click",function(e){
    e.preventDefault();
    let keyword = this.text
    $(".tags a").css("color","#fff")
    $(".tags a").css("background-color","#ff8200")
    this.style=`color: rgb(0, 0, 0);
    background-color: rgb(255, 213, 0);`

    $.ajax({
        url : "../js/data.json",
        success:function(data){ 
            let tag ='', tags='', all_content='', count=0;
            $.each(data.items,function(k,v){
                all_content = ` ${v.title}, ${v.tag1},${v.tag2},${v.tag3}`
                if(all_content.match( keyword.toUpperCase() )){
                    count ++;
                    if(v.tag3 != undefined) {
                        tags = `
                        <a href="">${v.tag1}</a>
                        <a href="">${v.tag2}</a>
                        <a href="">${v.tag3}</a>
                        `
                    } else {
                        tags = `
                        <a href="">${v.tag1}</a>
                        <a href="">${v.tag2}</a>
                        `
        
                    }
                    tag += `
                        <figure data-aos="fade-up" data-aos-duration="1200">
                            <img src="${v.img}.webp" alt="">
                            <figcaption>
                                <p>${v.title}</p>
                                <p>
                                    ${tags}
                                </p>
                            </figcaption>
                        </figure>
                    `
                }
            })
            if(count == 0){ //검색어와 일치하는 항목이 없을 때 
                tag = `
                    <div class="search-r">
                        <div class="search-r-div">검색결과가 없습니다.</div>
                        <img class="search-r-img" src="https://www.devsisters.com/_next/image?url=%2Fimage%2Fstories%2Fempty.png&w=384&q=75">    
                    </div>
                `
            }
            $(".a1-con").html(tag)
        },
        error:function(){
            
        }
    })

})


// input 키워드를 넣고 엔터를 누를경우 키워드가 포함된 컨텐츠만 재출력 ( .tags  dsiplay none )
$(".search").on("keyup",function(key){
    if(key.keyCode==13) {
        let keyword = $(".search").val()
        $(".tags").css("display","none") //검색 했을때만 .tags가 꺼짐
        $.ajax({
            url : "../js/data.json",
            success:function(data){ 
                let tag ='', tags='', all_content='',count=0;
                $.each(data.items,function(k,v){
                    all_content = ` ${v.title}, ${v.tag1},${v.tag2},${v.tag3}`
                    if(all_content.match( keyword.toUpperCase() )){
                        count ++;
                        if(v.tag3 != undefined) {
                            tags = `
                            <a href="">${v.tag1}</a>
                            <a href="">${v.tag2}</a>
                            <a href="">${v.tag3}</a>
                            `
                        } else {
                            tags = `
                            <a href="">${v.tag1}</a>
                            <a href="">${v.tag2}</a>
                            `
            
                        }
                        tag += `
                            <figure data-aos="fade-up" data-aos-duration="1200">
                                <img src="${v.img}.webp" alt="">
                                <figcaption>
                                    <p>${v.title}</p>
                                    <p>
                                        ${tags}
                                    </p>
                                </figcaption>
                            </figure>
                        `
                    }
                    
                })

                

                if(count == 0){ //검색어와 일치하는 항목이 없을 때 
                    tag = `
                        <div class="search-r">
                            <div class="search-r-div">검색결과가 없습니다.</div>
                            <img class="search-r-img" src="https://www.devsisters.com/_next/image?url=%2Fimage%2Fstories%2Fempty.png&w=384&q=75">    
                        </div>

                    `
                }


                $(".a1-con").html(tag)
            },
            error:function(){
                
            }
        })


    }
});