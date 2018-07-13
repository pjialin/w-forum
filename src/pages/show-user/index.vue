<template>
    <div id="content">
        <user-top></user-top>
        <div class="activities">
            <div class="list">
                <div class="action">回复了</div>
                <a href="">
                    <div class="subject">帖子标题</div>
                </a>
                <div class="time">1 小时前</div>
                <div class="content">回复的内容</div>
            </div>
            <div class="list">
                <div class="action">发表帖子</div>
                <a href="">
                    <div class="subject">帖子标题</div>
                </a>
                <div class="time">1 小时前</div>
            </div>
        </div>
    </div>
</template>

<script>
    import userTop from '../../components/user-top'
    export default {
        data(){
            return {
                items: new Int8Array(10)
            }
        },
        components: {
            'user-top': userTop
        }
    }
</script>

<style scoped lang="scss">
    #content {
        background: #fbfcfe;
        height: 100%;
        .activities {
            margin-top: 20px;
            .list {
                background: white;
                padding: 15px 10%;
                margin-bottom: 20px;
                display: flex;
                flex-wrap: wrap;
                .action {
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.45);
                    margin-right: 10px;
                }
                .subject {
                    font-size: 14px;
                    color: #1890FF;
                    width: 180px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .time {
                    margin-left: auto;
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.45);
                }
                .content {
                    margin: 10px 0;
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.65);
                    width: 100%;
                }
            }
        }
    }
</style>