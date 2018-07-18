<template>
    <div id="content">
        <div class="post-lists">
            <a href="" class="post-list" v-for="item in items" :key="item">
                <div class="content">
                    帖子的标题
                </div>
                <div class="actions">
                    <span class="post-time">2018-07-18</span>
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
                .content{
                    font-size: 14px;
                    color: rgba(#000, .9);
                    margin: 10px 0;
                }
                .actions{
                    span{
                        font-size: 12px;
                        color: rgba(#000, .7);
                    }
                    span:last-child{
                        float: right;
                    }
                }
            }

        }
    }
</style>