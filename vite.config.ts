import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'

import IconResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            // Auto import functions from Vue, e.g. ref, reactive, toRef...
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
            // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
            // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (样式好像需要手动导入)
            resolvers: [
                ElementPlusResolver(),
                IconResolver({
                    prefix: 'icon',
                }),
            ],
            eslintrc: {
                // 使用一次就关掉
                enabled: false,
                filepath: './.eslintrc-auto-import.json',
                // 全局属性
                globalsPropValue: true,
            },
            dts: resolve(pathSrc, 'auto-import.d.ts'),
        }),
        Components({
            dts: resolve(pathSrc, 'components.d.ts'),
            resolvers: [
                IconResolver({
                    // 自动使用element-plus的icon
                    enabledCollections: ['ep'],
                }),
                ElementPlusResolver(),
            ],
        }),
        Icons({
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
})
