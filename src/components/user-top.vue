<template>
    <div class="info">
        <div class="user-info">
            <img src="https://source.unsplash.com/random" alt="">
            <span class="user-name">Jalin</span>
        </div>
        <div class="user-follows">
            <a href="">
                <div class="follow">
                    <span>8</span>关注
                </div>
            </a>
            <a href="">
                <div class="follow">
                    <span>8</span>粉丝
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['text']
    }
</script>

<style lang="scss">
    .info {
        background: white;
        padding: 50px 0 30px 0;
        .user-info {
            text-align: center;
            margin-bottom: 30px;
            img {
                width: 60px;
                height: 60px;
                margin: 0 auto;
                display: block;
                border-radius: 50%;
            }
            .user-name {
                margin-top: 20px;
                font-size: 16px;
                color: rgba(0, 0, 0, 0.85);
                text-align: center;
                font-weight: bold;
                display: block;
            }
        }
        .user-follows {
            display: flex;
            > a {
                width: 50%;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.65);
                text-align: center;
                span {
                    font-size: 20px;
                    color: rgba(0, 0, 0, 0.85);
                    display: block;
                    margin-bottom: 6px;
                }
            }
        }

    }
</style>
