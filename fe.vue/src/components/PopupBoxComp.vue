<template>
    <div class="pop-box-wrap">
        <div class="pop-box">
            <i class="pop-box__close-btn iconfont icon-wrong" @click="$emit('closefn')"></i>
            <h1 class="pop-box__title"><slot name="title">作品详情</slot></h1>
            <slot name="pop-box-header">
                <p class="mg-t16">上传于 2023年06月02日 22时</p>
                <div class="flex flex-center mg-t16">
                    <div class="flex flex-c pd-r32 mg-t16">
                        <span>浏览数</span>
                        <span class="pop-box__number">{{ views }}</span>
                    </div>
                    <div class="flex flex-c pd-r32 mg-t16">
                        <span>喜爱数</span>
                        <span class="pop-box__number">{{ likes }}</span>
                    </div>
                </div>
            </slot>
            <slot name="pop-box-main">
                <tag-bar v-if="tags && tags.length" :data="tags" title="标签"></tag-bar>
            </slot>
            <slot name="pop-box-footer"></slot>
        </div>
    </div>
</template>

<script>
import TagBar from "./TagBarComp.vue";
export default {
    name: "PopupBoxComp",
    components: { TagBar },
    props: {
        views: Number,
        likes: Number,
        tags: Array,
    },
};
</script>

<style scoped>
/* pop-box-wrap */
.pop-box-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(22, 22, 22, 0.8);
    transition: all 0.06s ease-in;
}

/* pop-box */
.pop-box {
    --size: 300px;
    --pd: 48px;
    --sp: 50% - (0.5 * var(--size) + var(--pd));
    position: fixed;
    top: calc(var(--sp));
    left: calc(var(--sp));
    width: var(--size);
    padding: var(--pd);
    background: white;
    border-radius: var(--bd-rds-12);
    color: #363636;
}

/* pop-box__close-btn */
.pop-box__close-btn {
    position: absolute;
    right: 14px;
    top: 16px;
    color: #666;
    font-size: 22px;
    cursor: pointer;
}

/* pop-box__number */
.pop-box__number {
    margin-top: 8px;
    font-family: "Consolas";
    font-size: 20px;
    font-weight: 700;
}
</style>
