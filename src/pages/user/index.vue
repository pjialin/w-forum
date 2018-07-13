<template>
    <div id="content">
        <user-top></user-top>
        <div class="actions">
            <ul>
                <a href="">
                    <li>我的帖子 <span class="iconfont icon-right"></span></li>
                </a>
                <a href="">
                    <li>我的收藏 <span class="iconfont icon-right"></span></li>
                </a>
            </ul>
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
        .actions {
            margin-top: 20px;
            background: white;
            ul {
                a {
                    font-weight: bold;
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.85);
                    display: flex;
                    width: 100%;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    &:last-child {
                        border-bottom: none;
                    }
                    li {
                        padding: 0 10%;
                        display: flex;
                        align-items: center;
                        height: 70px;
                        width: 100%;
                        span {
                            flex: 1;
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
</style>