<template>
    <div class="qq-group">
        <a target="_blank"
            href="http://shang.qq.com/wpa/qunwpa?idkey=2136e35b3977a9722ad61da453ddffe817a24f3196db8dc3050ec7e7516ba7a1"
            class="mdl-layout__tab"
            v-on:mouseenter="showCode = true"
            v-on:mouseleave="showCode = false">
            <i class="material-icons">group_add</i>
            <span>{{{ $t('qq_group') }}}</span>
        </a>
        <div class="qq-group__code" v-show="showCode">
            <img :src="ASSET_IMG_QQ_GROUP_CODE" alt="QR Code" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n);

import {
    ASSET_IMG_QQ_GROUP_CODE
} from '../../exports/modules/assets-config.js'

export default {
    name: 'QqGroup',
    props: {
        codePosition: {
            type: String,
            required: false,
            default: 'bottom'
        }
    },
    data() {
        return {
            showCode: false,

            ASSET_IMG_QQ_GROUP_CODE
        };
    },
    locales: {
        "en-US": {
            "qq_group": "QQ Group"
        },
        "zh-CN": {
            "qq_group": "D3数据可视化"
        }
    }
}

</script>

<style lang="less">
.qq-group {
    &__code {
        position: absolute;
        margin-top: 48px;
        padding: 0 24px;
        img {
            width: 115px;
        }
    }
    .material-icons {
        position: relative;
        top: 6px;
    }
}
</style>
