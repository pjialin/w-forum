<template>
    <div id="content">
        <form action="">
            <div class="input-field">
                <label for="title">标题</label>
                <input type="text" id="title" name="title">
            </div>
            <div class="input-field types">
                <label for="title">类型</label>
                <radio-group class="radio-group">
                    <label class="radio">
                        <radio value="discuss" />讨论
                        <radio value="question" />问答
                    </label>
                </radio-group>
            </div>
            <div class="input-field">
                <label for="tags">标签</label>
                <input type="text" id="tags" name="tags" placeholder="请用逗号分割 如 感情，事业">
            </div>
            <div class="input-field">
                <label for="form-content">内容</label>
                <textarea id="form-content" name="content" placeholder="支持 Markdown 格式">
                </textarea>
            </div>
            <div class="submit">
                <button type="submit" class="button-primary">发布</button>
            </div>
        </form>
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
        padding-top: 30px;
        padding-bottom: 50px;
        form {
            display: block;
            margin: 0 auto;
            width: 90%;
            .input-field {
                margin-bottom: 30px;
                > label {
                    font-size: 14px;
                    font-weight: bold;
                    color: rgba(0, 0, 0, 0.85);
                    display: block;
                    margin-bottom: 20px;
                }
                input, textarea {
                    box-shadow: 0 2px 4px 0 #F0F1F2;
                    font-size: 12px;
                    background: white;
                    padding: 5px 10px;
                }
                input {
                    height: 40px;
                }
                .helper-text {
                    margin-top: 10px;
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.45);
                }
                textarea {
                    /*padding: 10px;*/
                    width: 315px;
                    position: inherit;
                }
            }
            .types {
                display: flex;
                align-items: center;
                label {
                    margin-bottom: 0;
                    margin-right: 20px;
                    margin-top: 3px;
                }
                .radio-group {
                    label {
                        font-size: 14px;
                        color: rgba(0, 0, 0, 0.65);
                    }
                }
            }
            .submit {
                text-align: center;
            }
        }
    }
</style>