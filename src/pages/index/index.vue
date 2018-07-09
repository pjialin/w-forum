<template>
    <div id="content">
        <div id="search">
            <input type="text" placeholder="请输入关键字开始搜索">
            <span class="iconfont icon-search"></span>
        </div>
        <div id="tag-bar">
            <ul>
                <li class="tag-list active" v-for="item in items" :key="item">
                    <span>标签</span>
                    <span></span>
                </li>
            </ul>
        </div>
        <div class="post-lists">
            <a href="" class="post-list" v-for="item in items" :key="item">
                <div class="header">
                    <img src="https://source.unsplash.com/random" alt="">
                    <span class="user-name">Jalin</span>
                    <span>2018-07-09</span>
                </div>
                <div class="content">
                    帖子的标题
                </div>
                <div class="actions">
                    <div class="tags">
                        <span>标签1</span>
                        <span>标签2</span>
                    </div>
                    <span>5 人回复</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                items: new Int8Array(10)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/plugins/iconfont/iconfont.css";
    #content{
        background: #fbfcfe;
        #search{
            margin: 30px 20px;
            background: white;
            height: 40px;
            box-shadow: 0 2px 4px 0 #f0f0f0;
            line-height: 40px;
            position: relative;
            span{
                position: absolute;
                top: 0;
                left: 10px;
                font-size: 20px;
            }
            input{
                height: inherit;
                font-size: 14px;
                padding-left: 40px;
            }
        }

        #tag-bar{
            background: white;
            box-shadow: 0 2px 4px 0 #f0f0f0;
            ul{
                width: 80%;
                margin: 0 auto;
                height: 45px;
                display: flex;
                align-items: center;
                overflow: scroll;
                li{
                    flex-shrink: 0;
                    font-size: 14px;
                    margin-right: 40px;
                    font-weight: bold;
                    &.active{
                        span{
                            color: #1d91f9;
                        }
                        span:last-child{
                            width: 10px;
                            height: 2px;
                            background: #1d91f9;
                            margin: 0 auto;
                            margin-top: 3px;
                            display: block;
                        }
                    }
                }
            }

        }

        .post-lists{
            .post-list{
                background: white;
                margin-top: 30px;
                padding: 10px 20px;
                .header{
                    display: flex;
                    align-items: center;
                    img{
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                    }
                    .user-name{
                        margin: 0 15px;
                        font-size: 14px;
                    }
                    span{
                        font-size: 12px;
                        color: rgba(#000, .5);
                    }
                }
                .content{
                    font-size: 14px;
                    color: rgba(#000, .9);
                    margin: 10px 0;
                }
                .actions{
                    .tags{
                        display: inline;
                        span{
                            background: #f5f5f5;
                            border-radius: 3px;
                            font-size: 12px;
                            color: rgba(#000, .7);
                            padding: 3px 5px;
                            margin-right: 10px;
                        }
                    }
                    > span{
                        float: right;
                        font-size: 12px;
                        color: rgba(#000, .7);
                    }
                }
            }

        }
    }
</style>