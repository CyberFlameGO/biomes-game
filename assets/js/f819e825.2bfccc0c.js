"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Local Setup",l={unversionedId:"basics/running-locally",id:"basics/running-locally",title:"Local Setup",description:"Environment Setup",source:"@site/docs/basics/running-locally.md",sourceDirName:"basics",slug:"/basics/running-locally",permalink:"/biomes-game/docs/basics/running-locally",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/biomes-game/docs/category/introduction"},next:{title:"Admin Page",permalink:"/biomes-game/docs/basics/admin-page"}},s={},p=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"Run Biomes",id:"run-biomes",level:2},{value:"Coding Environment",id:"coding-environment",level:2},{value:"Developing inside a container",id:"developing-inside-a-container",level:2},{value:"GitHub Codespaces",id:"github-codespaces",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-setup"},"Local Setup"),(0,r.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the Node version manager (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm"),")."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash\n\n# Restart console\n\nnvm install v20\nnvm use v20\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"yarn")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g yarn\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://git-lfs.github.com/"},"Git LFS")," before cloning the repo or the binary files will have erroneous contents."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Ubuntu,",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install git-lfs\n"))),(0,r.kt)("li",{parentName:"ul"},"On MacOS,",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install git-lfs\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build/install"},"Bazel")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @bazel/bazelisk\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clone repo"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:{{ site.ghrepo }}.git\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis 7.0.8")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s https://download.redis.io/releases/redis-7.0.8.tar.gz | tar xvz -C ${HOME} \\\n  && make -j`nproc` -C ${HOME}/redis-7.0.8 \\\n  && sudo make install -C ${HOME}/redis-7.0.8 \\\n  && rm -rf ${HOME}/redis-7.0.8\n")))),(0,r.kt)("h2",{id:"run-biomes"},"Run Biomes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the Biomes repository directory,",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./b data-snapshot run\n"))),(0,r.kt)("li",{parentName:"ul"},"Visit ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),".")),(0,r.kt)("h2",{id:"coding-environment"},"Coding Environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The recommended code editor is ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode"),".")),(0,r.kt)("h2",{id:"developing-inside-a-container"},"Developing inside a container"),(0,r.kt)("p",null,'If you want to jump right in with a ready-to-go dev environment (enabling you to skip all of the "Environment setup" steps above), you can take advantage of VS Code\'s "Developing inside a Container" feature. See ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/ill-inc/biomes-game/blob/main/.devcontainer/README.md"},".devcontainer/README.md")," for instructions on how to set that up."),(0,r.kt)("h3",{id:"github-codespaces"},"GitHub Codespaces"),(0,r.kt)("p",null,'Building off the "Developing inside a container" support, you can also start\nup a ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/features/codespaces"},"GitHub Codespace")," in this repository by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=677467268&skip_quickstart=true"},"clicking here"),'. Make sure to choose "16-core" or better for "Machine type".'))}m.isMDXComponent=!0}}]);