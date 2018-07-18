<template>
    <div id="content">
        <div class="follow-lists">
            <div class="list" v-for="item in items">
               <div class="user-avatar">
                   <img src="https://source.unsplash.com/random" alt="">
               </div>
                <div class="user-info">
                    <a href="">
                        <div class="user-name">Jalin</div>
                    </a>
                    <div class="follow-info">
                        <span class="follow">关注 10</span>
                        <span class="fans">粉丝 10</span>
                    </div>
                </div>
                <div class="follow-btn">
                    <button class="button-normal">
                        <span class="iconfont icon-plus"></span>
                        <span>关注</span>
                    </button>
                    <!--<button class="button-primary">已关注</button>-->
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
        .follow-lists {
            background: white;
            .list {
                padding: 20px 5%;
                display: flex;
                height: 60px;
                align-items: center;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                &:last-child {
                    border-bottom: none;
                }
                .user-avatar {
                    img {
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                    }
                    margin-right: 15px;
                }
                .user-info {
                    .user-name {
                        font-size: 14px;
                        color: rgba(0, 0, 0, 0.85);
                        font-weight: bold;
                    }
                    .follow-info {
                        span {
                            font-size: 12px;
                            color: rgba(0, 0, 0, 0.65);
                            margin-right: 15px;
                        }
                    }
                }
                .follow-btn {
                    margin-left: auto;
                    button {
                        padding: 5px 15px;
                        span {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
</style>