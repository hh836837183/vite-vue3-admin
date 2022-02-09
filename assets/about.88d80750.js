import{d as t,b as e,c as i,y as s,z as l,Q as r,ad as n,br as o,bu as u,h as g,t as c,F as p,f as a,A as v}from"./vendor.75aebe02.js";/* empty css              */const h=g("的前端项目是基于Vue3.x、Vite2.x、 Ant-Design-Vue3.x 、TypeScript4.x开发， 内置了动态路由、权限验证、并提供了常用的功能组件，帮助你快速搭建企业级中后台产品原型。 原则上不会限制任何代码用于商用。 ");var m=t({setup(t){const{pkg:m,lastBuildTime:d}={pkg:{name:"vite-vue3-admin",version:"0.1.0",author:{name:"buqiyuan",email:"1743369777@qq.com",url:"https://github.com/buqiyuan"},scripts:{serve:"npm run dev",dev:"vite",build:"cross-env NODE_ENV=production vite build",preview:"npm run build && vite preview","preview:dist":"vite preview",deploy:"gh-pages -d dist","lint:eslint":'eslint --cache --max-warnings 0 "{src,mock}/**/*.{vue,ts,tsx}" --fix',"lint:lint-staged":"lint-staged","lint:prettier":'prettier --write  "src/**/*.{js,json,tsx,css,less,scss,vue,html,md}"',"lint:stylelint":'stylelint --cache --fix "**/*.{vue,less,postcss,css,scss}" --cache --cache-location node_modules/.cache/stylelint/',prepare:"husky install","test:gzip":"npx http-server dist --cors --gzip -c-1","test:br":"npx http-server dist --cors --brotli -c-1"},dependencies:{"@ant-design/icons-vue":{url:"https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-vue",version:"^6.0.1"},"@vueuse/core":{url:"git+https://github.com/vueuse/vueuse.git",version:"^7.6.0"},"ant-design-vue":{url:"git+https://github.com/vueComponent/ant-design-vue.git",version:"3.0.0-beta.9"},axios:{url:"https://github.com/axios/axios.git",version:"^0.25.0"},"core-js":{url:"https://github.com/zloirock/core-js.git",version:"^3.21.0"},dayjs:{url:"https://github.com/iamkun/dayjs.git",version:"^1.10.7"},"file-saver":{url:"https://github.com/eligrey/FileSaver.js",version:"^2.0.5"},"lodash-es":{url:"lodash/lodash",version:"^4.17.21"},mitt:{url:"developit/mitt",version:"^3.0.0"},nprogress:{url:"git+https://github.com/rstacruz/nprogress.git",version:"^1.0.0-1"},pinia:{url:"git+https://github.com/vuejs/pinia.git",version:"2.0.11"},qs:{url:"https://github.com/ljharb/qs.git",version:"^6.10.3"},"socket.io-client":{url:"https://github.com/socketio/socket.io-client.git",version:"^4.4.1"},sortablejs:{url:"git://github.com/SortableJS/Sortable.git",version:"^1.14.0"},vue:{url:"git+https://github.com/vuejs/core.git",version:"^3.2.30"},"vue-i18n":{url:"git+https://github.com/intlify/vue-i18n-next.git",version:"^9.2.0-beta.30"},"vue-router":{version:"^4.0.12"},xlsx:{url:"git://github.com/SheetJS/sheetjs.git",version:"^0.18.0"}},devDependencies:{"@commitlint/cli":{url:"https://github.com/conventional-changelog/commitlint.git",version:"^16.1.0"},"@commitlint/config-conventional":{url:"https://github.com/conventional-changelog/commitlint.git",version:"^16.0.0"},"@types/lodash-es":{url:"https://github.com/DefinitelyTyped/DefinitelyTyped.git",version:"^4.17.6"},"@types/node":{url:"https://github.com/DefinitelyTyped/DefinitelyTyped.git",version:"^17.0.16"},"@typescript-eslint/eslint-plugin":{url:"https://github.com/typescript-eslint/typescript-eslint.git",version:"^5.11.0"},"@typescript-eslint/parser":{url:"https://github.com/typescript-eslint/typescript-eslint.git",version:"^5.11.0"},"@vitejs/plugin-legacy":{url:"git+https://github.com/vitejs/vite.git",version:"^1.6.4"},"@vitejs/plugin-vue":{url:"git+https://github.com/vitejs/vite.git",version:"^2.1.0"},"@vitejs/plugin-vue-jsx":{url:"git+https://github.com/vitejs/vite.git",version:"^1.3.3"},"@vue/compiler-sfc":{url:"git+https://github.com/vuejs/core.git",version:"^3.2.30"},commitizen:{url:"https://github.com/commitizen/cz-cli.git",version:"^4.2.4"},"cross-env":{url:"https://github.com/kentcdodds/cross-env.git",version:"^7.0.3"},eslint:{url:"eslint/eslint",version:"^8.8.0"},"eslint-config-prettier":{url:"prettier/eslint-config-prettier",version:"^8.3.0"},"eslint-define-config":{url:"https://github.com/Shinigami92/eslint-define-config.git",version:"^1.2.4"},"eslint-plugin-prettier":{url:"git+https://github.com/prettier/eslint-plugin-prettier.git",version:"^4.0.0"},"eslint-plugin-vue":{url:"git+https://github.com/vuejs/eslint-plugin-vue.git",version:"^8.4.1"},"gh-pages":{url:"git://github.com/tschaub/gh-pages.git",version:"^3.2.3"},husky:{url:"typicode/husky",version:"^7.0.4"},less:{url:"https://github.com/less/less.js.git",version:"^4.1.2"},"lint-staged":{url:"https://github.com/okonet/lint-staged",version:"^12.3.3"},"lodash-webpack-plugin":{url:"lodash/lodash-webpack-plugin",version:"^0.11.6"},mockjs:{url:"git://github.com/nuysoft/Mock.git",version:"^1.1.0"},"postcss-html":{url:"git+https://github.com/ota-meshi/postcss-html.git",version:"^1.3.0"},prettier:{url:"prettier/prettier",version:"^2.5.1"},stylelint:{url:"stylelint/stylelint",version:"^14.4.0"},"stylelint-config-html":{url:"git+https://github.com/ota-meshi/stylelint-config-html.git",version:"^1.0.0"},"stylelint-config-prettier":{url:"prettier/stylelint-config-prettier",version:"^9.0.3"},"stylelint-config-recommended":{url:"stylelint/stylelint-config-recommended",version:"^7.0.0"},"stylelint-config-standard":{url:"stylelint/stylelint-config-standard",version:"^25.0.0"},"stylelint-order":{url:"hudochenkov/stylelint-order",version:"^5.0.0"},typescript:{url:"https://github.com/Microsoft/TypeScript.git",version:"^4.5.5"},vite:{url:"git+https://github.com/vitejs/vite.git",version:"^2.8.0-beta.6"},"vite-plugin-mock":{url:"https://github.com/anncwb/vite-plugin-mock",version:"^2.9.6"},"vite-plugin-style-import":{url:"https://github.com/anncwb/vite-plugin-style-import",version:"^1.4.0"},"vite-plugin-svg-icons":{url:"https://github.com/anncwb/vite-plugin-svg-icons",version:"^2.0.1"},"vite-plugin-windicss":{url:"https://github.com/antfu/vite-plugin-windicss",version:"^1.7.0"},"vue-eslint-parser":{url:"git+https://github.com/vuejs/vue-eslint-parser.git",version:"^8.2.0"},windicss:{url:"https://github.com/windicss/windicss.git",version:"^3.4.3"}},__npminstall_done:!1,repository:{type:"git",url:"https://github.com/buqiyuan/vue3-antd-admin"},homepage:"https://buqiyuan.gitee.io/vite-vue3-admin",keywords:["vue","ant-design-vue","vue3","ts","tsx","admin","typescript"],license:"MIT",engines:{node:"^12 || >=14"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix","prettier --write"],"{!(package)*.json,*.code-snippets,.!(browserslist)*rc}":["prettier --write--parser json"],"package.json":["prettier --write"],"*.vue":["eslint --fix","prettier --write","stylelint --fix"],"*.{scss,less,styl,html}":["stylelint --fix","prettier --write"],"*.md":["prettier --write"]},target:"web"},lastBuildTime:"2022-02-09 14:00:33"},b=({url:t="",text:e})=>s("a",{href:t.replace("git+",""),target:"_blank"},[e]);return(t,y)=>(e(),i("div",null,[s(r(n),null,{default:l((()=>[s(r(n).Meta,{title:"关于"},{description:l((()=>[s(b,{url:r(m).author.url,text:r(m).name},null,8,["url","text"]),h])),_:1})])),_:1}),s(r(n),{class:"mt-3"},{default:l((()=>[s(r(o),{title:"项目信息",column:2,bordered:""},{default:l((()=>[s(r(o).Item,{label:"版本"},{default:l((()=>[s(r(u),{color:"processing"},{default:l((()=>[g(c(r(m).version),1)])),_:1})])),_:1}),s(r(o).Item,{label:"最后编译时间"},{default:l((()=>[s(r(u),{color:"processing"},{default:l((()=>[g(c(r(d)),1)])),_:1})])),_:1}),s(r(o).Item,{label:"GitHub"},{default:l((()=>[s(b,{url:r(m).repository.url,text:"GitHub"},null,8,["url"])])),_:1}),s(r(o).Item,{label:"预览地址"},{default:l((()=>[s(b,{url:r(m).homepage,text:"预览地址"},null,8,["url"])])),_:1})])),_:1})])),_:1}),s(r(n),{class:"mt-3"},{default:l((()=>[s(r(o),{title:"生产环境依赖",bordered:""},{default:l((()=>[(e(!0),i(p,null,a(r(m).dependencies,((t,i)=>(e(),v(r(o).Item,{key:i,label:i},{default:l((()=>[s(b,{url:t.url,text:t.version},null,8,["url","text"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),s(r(n),{class:"mt-3"},{default:l((()=>[s(r(o),{title:"开发环境依赖",bordered:""},{default:l((()=>[(e(!0),i(p,null,a(r(m).devDependencies,((t,i)=>(e(),v(r(o).Item,{key:i,label:i},{default:l((()=>[s(b,{url:t.url,text:t.version},null,8,["url","text"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1})]))}});export{m as default};
