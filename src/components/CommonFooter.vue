<template>
    <footer id="common_footer" class="mdl-mega-footer">
        <div class="mdl-mega-footer__top-section">
            <div class="mdl-mega-footer__left-section">
                <button class="mdl-mega-footer__social-btn"
                    v-for="d in topLeftBtns"
                    v-on:click="anythingEvents(d.key, 'click', $event)">{{{ $t(d.label) }}}</button>
            </div>
            <div class="mdl-mega-footer__right-section">
                <a href="#header">
                    <span>{{ $t('back_to_top') }}</span>
                    <i class="material-icons">expand_less</i>
                </a>
            </div>
        </div>
        <div class="mdl-mega-footer__middle-section">
            <div class="mdl-mega-footer__drop-down-section"
                v-for="d in middleSections">
                <h1 class="mdl-mega-footer__heading">{{{ $t(d.title) }}}</h1>
                <ul class="mdl-mega-footer__link-list">
                    <li v-for="c in d.links">
                        <a :href="c.url" target="_blank">{{{ $t(c.label) }}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mdl-mega-footer__bottom-section">
            <div class="mdl-logo">
                {{ $t(bottom.title) }}
            </div>
            <ul class="mdl-mega-footer__link-list">
                <li v-for="d in bottom.links">
                    <a :href="d.url" target="_blank">{{{ $t(d.label) }}}</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import Vue from 'vue'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n);


export default {
    name: 'CommonFooter',
    props: {
        top: {
            type: Object,
            required: false,
            default() { return { left: [] }; }
        },
        middle: {
            type: Array,
            required: false,
            default() {
                return [
                    {
                        title: 'design_framework',
                        links: [
                            {
                                url: 'https://github.com/vuejs/vue',
                                label: 'vuejs'
                            },
                            {
                                url: 'https://github.com/google/material-design-lite',
                                label: 'material_design_lite'
                            },
                            {
                                url: 'https://github.com/google/material-design-icons',
                                label: 'material_design_icons'
                            }
                        ]
                    },
                    {
                        title: 'supports',
                        links: [
                            {
                                url: 'https://pages.github.com/',
                                label: 'github_pages'
                            },
                            {
                                url: 'https://gist.github.com/',
                                label: 'github_gist'
                            }
                        ]
                    },
                    {
                        title: 'links',
                        links: [
                            {
                                url: 'https://github.com/d3/d3',
                                label: 'd3js_icon'
                            }
                        ]
                    },
                ];
            }
        },
        bottom: {
            type: Object,
            required: false,
            default() {
                return {
                    title: 'logo',
                    links: [
                        {
                            url: 'http://visualcrew.github.io/one-book/',
                            label: 'one_book'
                        },
                        {
                            url: '',
                            label: 'd3_api_translation'
                        }
                    ]
                };
            }
        },
        anythingEvents: {
            type: Function,
            required: false,
            default() { return function(key, type, event) {}; }
        }
    },
    computed: {
        topLeftBtns() { return (this.top || {}).left || []; },
        middleSections() { return this.middle || []; }
    },
    locales: {
        "en-US": {
            "logo": 'VisualCrew',
            "back_to_top": "Back to Top",
            "design_framework": "Design &amp; Framework",
            "links": "Links",
            "supports": "Supports",
            "github_pages": "Github Pages",
            "github_gist": "Github Gist",
            "vuejs": "Vue.js",
            "material_design_lite": "Material Design Lite",
            "material_design_icons": "Material Design Icons",
            "d3js_icon": "<img src='https://camo.githubusercontent.com/722a5cc12c7d40231ebeb8ca6facdc8547e2abf7/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667' style='width: 15px;'>",
            "one_book": "One Book",
            "d3_api_translation": "D3 API Translation"
        },
        "zh-CN": {
            "logo": '可视组',
            "back_to_top": "返回顶部",
            "design_framework": "UI &amp; 架构",
            "links": "链接",
            "supports": "服务支持",
            "github_pages": "Github Pages",
            "github_gist": "Github Gist",
            "vuejs": "Vue.js",
            "material_design_lite": "Material Design Lite",
            "material_design_icons": "Material Design Icons",
            "d3js_icon": "<img src='https://camo.githubusercontent.com/722a5cc12c7d40231ebeb8ca6facdc8547e2abf7/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667' style='width: 15px;'>",
            "one_book": "一本书",
            "d3_api_translation": "D3 API 译"
        }
    }
}

</script>

<style lang="less">
#common_footer {
    .mdl-mega-footer__right-section {
        a {
            color: #8bc34a;
            .material-icons {
                position: relative;
                top: 6px;
            }
        }
    }
}
</style>
