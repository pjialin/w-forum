<template>
    <div id="content">
        <div id="post-info">
            <h1 class="title">帖子的标题</h1>
            <div class="post-user">
                <a href="">
                    <img src="https://source.unsplash.com/random" alt="">
                    <span class="user-name">Jalin</span>
                </a>
                <span>5 秒前</span>
                <span>200 浏览</span>
            </div>
            <div class="content">
                帖子的内容
            </div>
            <div class="actions">
                <div class="tags">
                    <span>标签1</span>
                    <span>标签2</span>
                </div>
                <div class="love-button">
                    <span class="iconfont icon-heart-o"></span>
                    <span>喜欢</span>
                    <span>|</span>
                    <span>10</span>
                </div>
            </div>
        </div>
        <div id="comments">
            <div class="actions">
                <h2 class="title">10 条讨论</h2>
                <div class="post-comment">
                    <span class="iconfont icon-edit"></span>
                    发表看法
                </div>
            </div>
            <div class="comment-lists">
                <div class="comment-list">
                    <div class="header">
                        <a href="">
                            <img src="https://source.unsplash.com/random" alt="">
                            <span class="user-name">Jalin</span>
                        </a>
                        <span>2 小时前</span>
                    </div>
                    <div class="content">
                        评论的内容
                    </div>
                    <div class="actions">
                        <div class="accept">采纳回复</div>
                        <div class="love">
                            <span class="iconfont icon-heart-o"></span>
                            喜欢
                        </div>
                        <div class="reply">回复</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="reply">
            <div class="bg"></div>
            <div class="post-content">
                <div class="actions">
                    <span class="title">发表看法</span>
                    <span class="reply-someone">@Jalin</span>
                    <span class="iconfont icon-close"></span>
                </div>
                <div class="post-form">
                    <form action="">
                        <div class="input-field">
                            <textarea name="content" id="form-content" cols="30" rows="10"></textarea>
                        </div>
                        <div class="submit">
                            <button type="submit" class="button-primary">发表</button>
                        </div>
                    </form>
                </div>
            </div>
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
    #content {
        background: #fbfcfe;
        #post-info {
            background: white;
            padding: 20px 5%;

            .title{
                margin-bottom: 30px;
                font-weight: bold;
            }
            .post-user {
                display: flex;
                align-items: center;
                font-size: 12px;
                color: rgba(#000, .5);
                a {
                    display: flex;
                    align-items: center;
                    img {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                    }
                    .user-name {
                        color: #0077c7;
                    }
                }
                span {
                    margin-left: 10px;
                }
            }
            .content {
                font-size: 14px;
                color: rgba(#000, 90);
                line-height: 2;
                margin: 20px 0;
            }
            .actions {

                .love-button {
                    display: inline;
                    background: transparent;
                    border: 1px solid #e37b7e;
                    border-radius: 20px;
                    padding: 0 10px;
                    line-height: 25px;
                    float: right;
                    color: #e37b7e;
                    span {
                        font-size: 12px;
                        margin-right: 5px;
                    }
                }
            }
        }

        #comments {
            padding: 20px 5%;
            margin-top: 20px;
            background: white;
            .actions {
                height: 30px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                .title {
                    margin-bottom: 0;
                }
                .post-comment {
                    font-size: 14px;
                    margin-left: auto;
                    span {
                        color: rgba(#000, .8);
                        margin-right: 5px;
                    }
                }
            }
            .comment-lists {
                .comment-list {

                    .header {
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        color: rgba(#000, .5);
                        a {
                            display: flex;
                            align-items: center;
                            img {
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                            }
                            .user-name {
                                color: #0077c7;
                            }
                        }
                        span {
                            margin-left: 10px;
                        }
                    }
                    .content {
                        font-size: 14px;
                        color: #000;
                        margin: 10px 0;
                        margin-left: 40px;
                    }
                    .actions {
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        color: rgba(#000, .5);
                        div {
                            margin: 0 10px;
                        }
                        div:first-child {
                            margin-left: auto;
                        }
                        .love.active{
                            color: #e37b7e;
                        }
                        .iconfont {
                            font-size: inherit;
                        }
                    }
                }
            }
        }

        .reply {
            .bg {
                opacity: 0.3;
                background: #000;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }

            .post-content {
                position: fixed;
                background: #FBFCFE;
                padding: 20px 5% 30px 5%;
                bottom: 0;
                right: 0;
                left: 0;
                .actions {
                    display: flex;
                    .title {
                        font-size: 18px;
                        color: rgba(0, 0, 0, 0.85);
                        font-weight: bold;
                    }
                    .reply-someone {
                        line-height: 2;
                        margin-left: 15px;
                        color: rgba(0, 0, 0, 0.45);
                        font-size: 14px;
                    }
                    span.iconfont {
                        margin-left: auto;
                        text-align: right;
                        padding: 10px;
                        margin-top: -10px;
                    }
                }
                form {
                    textarea {
                        box-shadow: 0 2px 4px 0 #F0F1F2;
                        font-size: 12px;
                        background: white;
                        padding: 10px;
                        width: 315px;
                        position: inherit;
                    }
                    .submit {
                        margin-top: 30px;
                        text-align: center;
                    }
                }
            }

        }
    }




</style>