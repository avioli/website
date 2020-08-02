(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{144:function(e,r,n){"use strict";n.d(r,"a",(function(){return d}));var t=n(146),s=n(145),i=n(0),a=n.n(i),o=n(147);class d extends i.Component{render(){return a.a.createElement(s.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:t.d,html:t.h,h:t.g,gCreateRef:t.f,gComponent:t.c,PluginPosition:t.e,BaseComponent:t.a,BaseProps:t.BaseProps,CodeBlock:s.a,useEffect:i.useEffect,useRef:i.useRef,faker:o,...this.props.scope}})}}},91:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return d})),n.d(r,"rightToc",(function(){return c})),n.d(r,"default",(function(){return l}));var t=n(2),s=n(6),i=(n(0),n(143)),a=n(144),o={id:"server-side-sort",title:"Server Side Sorting",keywords:["javascript","table","javascript table","gridjs","grid js","sort","server side sort","server sort"]},d={unversionedId:"examples/server-side-sort",id:"examples/server-side-sort",isDocsHomePage:!1,title:"Server Side Sorting",description:"Simply add server config to the sort block to enable server-side sorting:",source:"@site/docs/examples/server-side-sort.md",permalink:"/docs/examples/server-side-sort",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/server-side-sort.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1593637169,sidebar:"sidebar",previous:{title:"Server Side Pagination",permalink:"/docs/examples/server-side-pagination"},next:{title:"Custom HTTP client",permalink:"/docs/examples/custom-http-client"}},c=[],p={rightToc:c};function l(e){var r=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Simply add ",Object(i.b)("inlineCode",{parentName:"p"},"server")," config to the ",Object(i.b)("inlineCode",{parentName:"p"},"sort")," block to enable server-side sorting:"),Object(i.b)(a.a,{children:"\nconst grid = new Grid({\n  sort: {\n    multiColumn: false,\n    server: {\n      url: (prev, columns) => {\n       if (!columns.length) return prev;\n       \n       const col = columns[0];\n       const dir = col.direction === 1 ? 'asc' : 'desc';\n       let colName = ['name', 'rarity'][col.index];\n       \n       return `${prev}&order=${colName}&dir=${dir}`;\n     }\n    }\n  },\n  columns: [\n   'Name',\n   'Rarity',\n   {\n     name: 'Image',\n     width: '50px',\n     sort: false,\n     formatter: (img) => html(`<center><img src='${img}'/></center>`)\n   }\n  ],\n  server: {\n    url: 'https://api.scryfall.com/cards/search?q=Inspiring',\n    then: data => data.data.map(card => [card.name, card.rarity, card.image_uris.small]),\n    total: data => data.total_cards\n  } \n});\n",mdxType:"LiveExample"}))}l.isMDXComponent=!0}}]);