(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{102:function(e,a,t){"use strict";var l=t(0),r=t.n(l),s=t(91),n=t(94),m=t(92),o=t(93),c=t(107),i=t(103),g=t(54),u=t.n(g),d=t(90);a.a=function(e){const a=function(){const{selectMessage:e}=Object(d.usePluralForm)();return a=>{const t=Math.ceil(a);return e(t,Object(m.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}(),{children:t,frontMatter:l,metadata:g,truncated:p,isBlogPostPage:h=!1}=e,{date:E,formattedDate:b,permalink:N,tags:v,readingTime:f}=g,{author:w,title:T,image:_,keywords:P}=l,k=l.author_url||l.authorURL,M=l.author_title||l.authorTitle,y=l.author_image_url||l.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{keywords:P,image:_}),r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(()=>{const e=h?"h1":"h2";return r.a.createElement("header",null,r.a.createElement(e,{className:Object(s.a)("margin-bottom--sm",u.a.blogPostTitle)},h?T:r.a.createElement(o.a,{to:N},T)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:u.a.blogPostDate},b,f&&r.a.createElement(r.a.Fragment,null," \xb7 ",a(f)))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement(o.a,{className:"avatar__photo-link avatar__photo",href:k},r.a.createElement("img",{src:y,alt:w})),r.a.createElement("div",{className:"avatar__intro"},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(o.a,{href:k},w)),r.a.createElement("small",{className:"avatar__subtitle"},M)))))})(),r.a.createElement("div",{className:"markdown"},r.a.createElement(n.a,{components:c.a},t)),(v.length>0||p)&&r.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(m.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),v.map((({label:e,permalink:a})=>r.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e)))),p&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:g.permalink,"aria-label":`Read more about ${T}`},r.a.createElement("strong",null,r.a.createElement(m.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},81:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),s=t(99),n=t(102),m=t(93),o=t(97),c=t(92),i=t(90);function g({tagName:e,count:a}){const t=function(){const{selectMessage:e}=Object(i.usePluralForm)();return a=>e(a,Object(c.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:a}))}();return r.a.createElement(c.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:t(a),tagName:e}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){const{metadata:a,items:t,sidebar:l}=e,{allTagsPath:u,name:d,count:p}=a;return r.a.createElement(s.a,{title:`Posts tagged "${d}"`,description:`Blog | Tagged "${d}"`,wrapperClassName:i.ThemeClassNames.wrapper.blogPages,pageClassName:i.ThemeClassNames.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(o.a,{sidebar:l})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(g,{count:p,tagName:d})),r.a.createElement(m.a,{href:u},r.a.createElement(c.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>r.a.createElement(n.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}}}]);