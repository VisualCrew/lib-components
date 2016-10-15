<template>
<div id="app" class="mdl-layout__container">
    <div class="mdl-layout mdl-js-layout">
        <div class="widgets">
            <qq-group-doc></qq-group-doc>
        </div>
        <common-footer-doc></common-footer-doc>
    </div>
</div>
</template>

<script>
import CommonFooterDoc from './components/CommonFooterDoc.vue'
import QqGroupDoc from './components/QqGroupDoc.vue'

export default {
    name: 'App',
    components: {
        CommonFooterDoc,
        QqGroupDoc
    }
}
</script>

<style media="screen" src=./assets/material.teal-blue.min.css></style>

<style lang="less">
#app {
    .widgets {
        margin: 1px;
        background-color: rgb(0,150,136);
        > * {
            float: left;
            margin-right: 20px;
        }
    }
}
</style>
