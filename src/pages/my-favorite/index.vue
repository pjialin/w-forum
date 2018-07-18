<template>
    <div id="content">
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
    #content{
        background: #fbfcfe;


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