(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{9451:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]/followers",function(){return c(4810)}])},6993:function(a,b,c){"use strict";c.d(b,{I:function(){return n}});var d=c(5893),e=c(1163),f=c(6100),g=c(5127),h=c(3872),i=c(1940),j=c(585),k=c(722),l=c(4856),m=c(8162);function n(a){var b=a.children,c=(0,e.useRouter)(),n=c.query.id,o=c.back,p=(0,h.K)((0,f.IO)(i.W$,(0,f.ar)("username","==",n),(0,f.b9)(1)),{allowNull:!0}),q=p.data,r=p.loading,s=q?q[0]:null;return(0,d.jsxs)(g.fS,{value:{user:s,loading:r},children:[!s&&!r&&(0,d.jsx)(j.H,{title:"User not found / Twitter"}),(0,d.jsxs)(k.t,{children:[(0,d.jsx)(l.c,{useActionButton:!0,action:o,children:(0,d.jsx)(m.w,{})}),b]})]})}},8893:function(a,b,c){"use strict";c.d(b,{"$":function(){return l}});var d=c(6042),e=c(9396),f=c(5893),g=c(3136),h=c(5127),i=c(9570),j=c(9186),k=c(8162);function l(a){var b=a.children,c=(0,h.aF)(),l=c.user,m=c.loading;return(0,f.jsx)(f.Fragment,{children:l?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j.T,{follow:!0}),b]}):(0,f.jsx)(g.E.section,(0,e.Z)((0,d.Z)({},k.o),{children:m?(0,f.jsx)(i.g,{className:"mt-5 w-full"}):(0,f.jsxs)("div",{className:"w-full p-8 text-center",children:[(0,f.jsx)("p",{className:"text-3xl font-bold",children:"This account doesn’t exist"}),(0,f.jsx)("p",{className:"text-light-secondary dark:text-dark-secondary",children:"Try searching for another."})]})}))})}},6781:function(a,b,c){"use strict";c.d(b,{Q:function(){return g}});var d=c(5893),e=c(6010),f=c(4664);function g(a){var b=a.title,c=a.modal,g=a.imageData,h=a.description;return(0,d.jsx)("div",{className:(0,e.Z)("flex justify-center p-8",c&&"mt-[52px]"),children:(0,d.jsx)("div",{className:"w-full max-w-sm",children:(0,d.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[g&&(0,d.jsx)(f.o,{width:336,height:168,src:g.src,alt:g.alt}),(0,d.jsxs)("div",{className:"flex flex-col gap-2 text-center",children:[(0,d.jsx)("p",{className:"text-3xl font-extrabold",children:b}),(0,d.jsx)("p",{className:"text-light-secondary dark:text-dark-secondary",children:h})]})]})})})}},3779:function(a,b,c){"use strict";c.d(b,{G:function(){return o}});var d=c(6042),e=c(9396),f=c(5893),g=c(6010),h=c(5820),i=c(3136),j=c(6781),k=c(9570),l=c(8162),m=c(7238),n={retweets:{title:"Amplify Tweets you like",imageData:{src:"/assets/no-retweets.png",alt:"No retweets"},description:"Share someone else’s Tweet on your timeline by Retweeting it. When you do, it’ll show up here."},likes:{title:"No Tweet Likes yet",imageData:{src:"/assets/no-likes.png",alt:"No likes"},description:"When you like a Tweet, it’ll show up here."},following:{title:"Be in the know",description:"Following accounts is an easy way to curate your timeline and know what’s happening with the topics and people you’re interested in."},followers:{title:"Looking for followers?",imageData:{src:"/assets/no-followers.png",alt:"No followers"},description:"When someone follows this account, they’ll show up here. Tweeting and interacting with others helps boost followers."}};function o(a){var b=a.data,c=a.type,o=a.follow,p=a.loading,q=n[c],r=["retweets","likes"].includes(c);return(0,f.jsx)("section",{className:(0,g.Z)(r&&"h-full overflow-y-auto [&>div:first-child>a]:mt-[52px]",p&&"flex items-center justify-center"),children:p?(0,f.jsx)(k.g,{className:r?"mt-[52px]":"mt-5"}):(0,f.jsx)(h.M,{mode:"popLayout",children:(null==b?void 0:b.length)?b.map(function(a){return(0,f.jsx)(i.E.div,(0,e.Z)((0,d.Z)({layout:"position"},l.o),{children:(0,f.jsx)(m.O,(0,e.Z)((0,d.Z)({},a),{follow:o,modal:r}))}),a.id)}):(0,f.jsx)(j.Q,(0,e.Z)((0,d.Z)({},q),{modal:r}))})})}},6809:function(a,b,c){"use strict";c.d(b,{J:function(){return k}});var d=c(5893),e=c(6100),f=c(5127),g=c(3872),h=c(1940),i=c(585),j=c(3779);function k(a){var b=a.type,c=(0,f.aF)().user,k=c.name,l=c.username,m=(0,g.K)((0,e.IO)(h.W$,(0,e.ar)("following"===b?"followers":"following","array-contains",null==c?void 0:c.id)),{allowNull:!0}),n=m.data,o=m.loading;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.H,{title:"People ".concat("following"===b?"followed by":"following"," ").concat(k," (@").concat(l,") / Twitter")}),(0,d.jsx)(j.G,{follow:!0,data:n,type:b,loading:o})]})}},8162:function(a,b,c){"use strict";c.d(b,{o:function(){return q},w:function(){return r}});var d=c(6042),e=c(9396),f=c(5893),g=c(7294),h=c(1163),i=c(6100),j=c(5820),k=c(3136),l=c(5662),m=c(5127),n=c(6269),o=c(1940),p=c(4531),q={initial:{opacity:0},animate:{opacity:1,transition:{duration:.4}},exit:{opacity:0,transition:{duration:.2}}};function r(){var a,b,c,r=(0,h.useRouter)(),s=r.pathname,t=r.query.id,u=(0,m.aF)(),v=u.user,w=u.loading,x=v?v.id:null,y=(0,l.k)((0,i.JU)((0,o.bR)(null!=x?x:"null"),"stats"),{allowNull:!0,disabled:!x}),z=y.data,A=y.loading,B=null!=z?z:{},C=B.tweets,D=B.likes,E=[(null!==(a=null==v?void 0:v.totalTweets)&& void 0!==a?a:0)+(null!==(b=null==C?void 0:C.length)&& void 0!==b?b:0),null==v?void 0:v.totalPhotos,null==D?void 0:D.length],F=E[0],G=E[1],H=E[2],I=null!==(c=s.split("/").pop())&& void 0!==c?c:"",J=["[id]","with_replies"].includes(I),K=["following","followers"].includes(I);return(0,f.jsx)(j.M,{mode:"popLayout",children:w||A?(0,g.createElement)(k.E.div,(0,e.Z)((0,d.Z)({className:"-mb-1 inner:animate-pulse inner:rounded-lg inner:bg-light-secondary dark:inner:bg-dark-secondary"},q),{key:"loading",children:[(0,f.jsx)("div",{className:"mb-1 -mt-1 h-5 w-24"}),(0,f.jsx)("div",{className:"h-4 w-12"})]})):v?(0,g.createElement)(k.E.div,(0,e.Z)((0,d.Z)({className:"-mb-1 truncate"},q),{key:"found",children:[(0,f.jsx)(p.v,{tag:"h2",name:v.name,className:"-mt-1 text-xl",iconClassName:"w-6 h-6",verified:v.verified}),(0,f.jsx)("p",{className:"text-xs text-light-secondary dark:text-dark-secondary",children:K?"@".concat(v.username):J?F?"".concat(F," ").concat("Tweet".concat((0,n.uz)(F))):"No Tweet":"media"===I?G?"".concat(G," Photo").concat((0,n.uz)(G)," & GIF").concat((0,n.uz)(G)):"No Photo & GIF":H?"".concat(H," Like").concat((0,n.uz)(H)):"No Like"})]})):(0,g.createElement)(k.E.h2,(0,e.Z)((0,d.Z)({className:"text-xl font-bold"},q),{key:"not-found"}),K?"@".concat(t):"User")})}},9186:function(a,b,c){"use strict";c.d(b,{T:function(){return o}});var d=c(6042),e=c(9396),f=c(5893),g=c(3136),h=c(6010),i=c(8162),j=c(1163),k=c(1664),l=c.n(k);function m(a){var b=a.name,c=a.path,d=(0,j.useRouter)(),e=d.asPath,g=d.query.id,i="/user/".concat(g).concat(c?"/".concat(c):"");return(0,f.jsx)(l(),{href:i,scroll:!1,children:(0,f.jsx)("a",{className:"hover-animation main-tab dark-bg-tab flex flex-1 justify-center hover:bg-light-primary/10 dark:hover:bg-dark-primary/10",children:(0,f.jsx)("div",{className:"px-6 md:px-8",children:(0,f.jsxs)("p",{className:(0,h.Z)("flex flex-col gap-3 whitespace-nowrap pt-3 font-bold transition-colors duration-200",e===i?"text-light-primary dark:text-dark-primary [&>i]:scale-100 [&>i]:opacity-100":"text-light-secondary dark:text-dark-secondary"),children:[b,(0,f.jsx)("i",{className:"h-1 scale-50 rounded-full bg-main-accent opacity-0 transition duration-200"})]})})})})}var n=[[{name:"Tweets",path:""},{name:"Tweets & replies",path:"with_replies"},{name:"Media",path:"media"},{name:"Likes",path:"likes"}],[{name:"Following",path:"following"},{name:"Followers",path:"followers"}]];function o(a){var b=a.follow,c=n[+!!b];return(0,f.jsx)(g.E.nav,(0,e.Z)((0,d.Z)({className:(0,h.Z)("hover-animation flex justify-between overflow-y-auto\n         border-b border-light-border dark:border-dark-border",b&&"mt-1 mb-0.5")},i.o),{exit:void 0,children:c.map(function(a){var b=a.name,c=a.path;return(0,f.jsx)(m,{name:b,path:c},b)})}))}},5127:function(a,b,c){"use strict";c.d(b,{aF:function(){return h},fS:function(){return g}});var d=c(5893),e=c(7294),f=(0,e.createContext)(null);function g(a){var b=a.value,c=a.children;return(0,d.jsx)(f.Provider,{value:b,children:c})}function h(){var a=(0,e.useContext)(f);if(!a)throw Error("useUser must be used within an UserContextProvider");return a}},4810:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return j}});var d=c(5893),e=c(9806),f=c(7913),g=c(6993),h=c(8893),i=c(6809);function j(){return(0,d.jsx)(i.J,{type:"followers"})}j.getLayout=function(a){return(0,d.jsx)(e.IP,{children:(0,d.jsx)(f.Z,{children:(0,d.jsx)(e.rf,{children:(0,d.jsx)(g.I,{children:(0,d.jsx)(h.$,{children:a})})})})})}}},function(a){a.O(0,[986,80,501,774,888,179],function(){var b;return a(a.s=9451)}),_N_E=a.O()}])