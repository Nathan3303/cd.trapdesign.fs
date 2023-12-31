<template>
    <div class="board-node">
        <!-- 缩略图链接 -->
        <a @click="linkToDetails(data.id)" class="thumbnail-link" @mouseover="isHover = true" @mouseleave="isHover = false">
            <!-- 缩略图 -->
            <img :src="data.thumbnail" :data-hover="isHover" alt="thumbnail" />
            <!-- 标题栏 -->
            <transition name="title-box">
                <p v-show="isHover" class="title-box">
                    <span class="title">{{ data.title }}</span>
                </p>
            </transition>
        </a>
        <!-- 底部信息栏 -->
        <div class="information flex flex-center" v-if="!light">
            <!-- 作者头像 -->
            <link-avatar :src="data.author.headpic" :name="data.author.name" size="small" uselink />
            <!-- 作者名称 -->
            <a class="author-link" :title="data.author.description" :href="`/authors/${data.author.name}`">
                {{ data.author.fullname }}
            </a>
            <div class="lav">
                <!-- 喜爱数 -->
                <span>
                    <i class="iconfont icon-like"></i>
                    {{ data.likes.length }}
                </span>
                <!-- 观看数 -->
                <span>
                    <i class="iconfont icon-view"></i>
                    {{ data.views / 1000 + "k" }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import LinkAvatar from "./LinkAvatarComp.vue";

export default {
    name: "BoardNodeComp",
    components: { LinkAvatar },
    props: {
        index: Number,
        data: Object,
        light: Boolean,
        replace: Boolean,
        route: String,
    },
    data() {
        return {
            isHover: false,
        };
    },
    methods: {
        linkToDetails(id) {
            this.$router.push({
                name: this.route,
                params: { id },
                replace: this.replace,
            });
        },
    },
};
</script>

<style scoped>
.board-node {
    user-select: none;

    & .thumbnail-link {
        width: 100%;
        height: 280px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: 8px;
        background-color: #eee;

        & img {
            width: 138%;
            transition: all 0.16s ease-in;

            &:hover,
            &[data-hover] {
                width: 120%;
            }
        }

        & p {
            --pd-h: 16px;
            width: calc(100% - 2 * var(--pd-h));
            height: 48px;
            display: flex;
            gap: 8px;
            align-items: center;
            padding: 16px var(--pd-h) 8px var(--pd-h);
            position: absolute;
            bottom: 0;
            z-index: 1;
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
            transition: all 0.2s linear;

            & .title {
                color: white;
                font-size: 16px;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                flex: auto;
            }
        }
    }

    & .information {
        height: 40px;
        font-weight: 700;

        & .author-link {
            margin: 0 8px;
            font-size: 15px;

            &:hover {
                color: var(--primary-bg-clr);
            }
        }

        & .lav {
            display: flex;
            justify-content: end;
            gap: 12px;
            flex: 1 1 auto;

            & span {
                height: 32px;
                display: flex;
                align-items: center;
                gap: 6px;
                flex: none;
                font-size: 14px;
                color: #666;

                & i {
                    font-weight: normal;
                    color: #999;
                }
            }
        }
    }
}

.title-box-enter,
.title-box-leave-to {
    opacity: 0;
}

.title-box-enter-to,
.title-box-leave {
    opacity: 1;
}
</style>
