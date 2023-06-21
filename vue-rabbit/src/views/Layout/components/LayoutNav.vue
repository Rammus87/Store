<script setup>
import { useUserStore } from '@/stores/user.js'
//引入跳轉方法
import { useRouter } from 'vue-router';
const router = useRouter()
const userStore = useUserStore()

//聲明回條函數comfirm
const confirm = ()=>{
    console.log("用戶要退出登入了")
    //退出登入邏輯實現
    //1.清除用戶信息,觸發action函數
    userStore.clearUserInfo()
    //2.跳轉到登入頁面
    router.push('/login')
}

</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <!-- 多模板渲染,用來區分登錄狀態 -->
                <!-- 思路:登陸時顯示第一塊,非登陸時顯示第一塊 是否有token -->
                <template v-if="userStore.userInfo.token">
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i> {{ userStore.userInfo.account }} </a></li>
                    <li>
                        <el-popconfirm @confirm="confirm" title="確認退出嗎？" confirm-button-text="確認" concel-button-text="取消">
                            <template #reference>
                                <a href="javascript:;">退出登錄</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="javascript:;">我的訂單</a></li>
                    <li><a href="javascript:;">會員中心</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;" @click="$router.push('/login')">請先登錄</a></li>
                    <li><a href="javascript:;">幫助中心</a></li>
                    <li><a href="javascript:;">關於我們</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.app-topnav{
    background: #333;

    ul{
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li{
            a{
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i{
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }

            ~li{
                a{
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>