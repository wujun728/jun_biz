(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-291f"],{"+NYD":function(t,e,s){"use strict";var i=s("nvpU");s.n(i).a},"9GgJ":function(t,e,s){"use strict";var i={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},a=(s("zIzm"),s("KHd+")),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("flexbox",{staticClass:"xr-header"},[t.iconClass?s("div",{staticClass:"xr-header__icon",style:{backgroundColor:t.iconColor}},[s("i",{class:t.iconClass})]):t._e(),t._v(" "),s("div",{staticClass:"xr-header__label"},[t.$slots.label?t._t("label"):[t._v(t._s(t.label))]],2),t._v(" "),t.showSearch?s("el-input",t._b({staticClass:"xr-header__search",class:{"is-text":"text"===t.searchIconType},style:{"margin-top":t.ftTop},attrs:{placeholder:t.placeholder},on:{input:t.inputChange},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchClick(e):null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},"el-input",t.inputAttr,!1),["text"===t.searchIconType?s("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"},[t._v("搜索")]):s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"})],1):t._e(),t._v(" "),s("div",{staticClass:"xr-header__ft",style:{top:t.ftTop}},[t._t("ft")],2)],1)},[],!1,null,"7bba770c",null);n.options.__file="index.vue";e.a=n.exports},DxkF:function(t,e,s){},IJOt:function(t,e,s){"use strict";s.r(e);var i=s("FyfS"),a=s.n(i),n=s("hSIE"),c=s("Flj7"),l=s("C3Po"),o=s("pKm3"),r=s("9GgJ"),d=s("Mzjh"),u=s("t2rG"),h=s.n(u),m=s("IKCp"),p=s("kK4T"),f=s("7Qib"),v={components:{draggable:h.a,TaskQuickAdd:l.a,TaskDetail:o.a,XrHeader:r.a,TaskScreening:d.a},directives:{scrollx:m.a},mixins:[p.a],data:function(){return{taskHandleShow:!1,taskList:[],loading:!0,filterObj:{},filterValue:{sort:2,completedTask:!0},filterList:[{label:"按手动拖拽",value:1},{label:"按最近创建",value:2},{label:"按最近截止",value:3},{label:"按最近更新",value:4},{label:"按最高优先级",value:5}],search:"",screeningValue:{userIds:[],timeId:"",tagIds:[]},screeningShow:!1,screeningProps:{searchShow:!1,userRequest:n.c},taskID:"",detailIndex:-1,detailSection:-1,taskDetailShow:!1}},created:function(){var t=this;this.filterList.forEach(function(e){t.filterObj[e.value]=e.label}),this.getList()},mounted:function(){document.body.ondrop=function(t){t.preventDefault(),t.stopPropagation()}},methods:{searchClick:function(t){this.search=t,this.getList()},taskScreeningChange:function(t,e,s){this.screeningValue={userIds:t,timeId:e,tagIds:s},this.getList()},filterClick:function(t){this.filterValue.sort=t,this.getList()},getList:function(){var t=this;this.loading=!0,Object(n.f)({name:this.search,sort:this.filterValue.sort,completedTask:this.filterValue.completedTask,userIdList:this.screeningValue.userIds,stopTimeType:this.screeningValue.timeId,labelIdList:this.screeningValue.tagIds}).then(function(e){var s=!0,i=!1,n=void 0;try{for(var c,l=a()(e.data);!(s=(c=l.next()).done);s=!0){var o=c.value;o.checkedNum=0,o.showTaskAdd=!1;var r=!0,d=!1,u=void 0;try{for(var h,m=a()(o.list);!(r=(h=m.next()).done);r=!0){var p=h.value;5==p.status?(p.checked=!0,o.checkedNum+=1):p.checked=!1}}catch(t){d=!0,u=t}finally{try{!r&&m.return&&m.return()}finally{if(d)throw u}}}}catch(t){i=!0,n=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw n}}t.taskList=e.data,t.loading=!1}).catch(function(){t.loading=!1})},moveEndTask:function(t){if(document.dispatchEvent(new MouseEvent("mouseup")),t){var e=t.from.id,s=t.to.id;if(e==s&&t.oldIndex==t.newIndex)return;var i=this.taskList[e],a=i.list;this.updateTaskListCheckNum(i);var c=this.taskList[s],l=c.list;this.updateTaskListCheckNum(c);var o={};o=e==s?{toList:l.map(function(t){return t.taskId}),toTopId:s}:{fromList:a.map(function(t){return t.taskId}),fromTopId:e,toList:l.map(function(t){return t.taskId}),toTopId:s},Object(n.h)(o).then(function(t){}).catch(function(){})}},updateTaskListCheckNum:function(t){t.checkedNum=t.list.filter(function(t){return t.checked}).length},checkboxChange:function(t,e){t.checked?e.checkedNum++:e.checkedNum--,Object(c.n)({taskId:t.taskId,status:t.checked?5:1}).then(function(t){}).catch(function(){t.checked?e.checkedNum--:e.checkedNum++,t.checked=!t.checked})},showDetailView:function(t,e,s){this.taskID=t.taskId,this.detailIndex=s,this.detailSection=e,this.taskDetailShow=!0},detailHandle:function(t){if(0==t.index||t.index)if("title-check"==t.type){var e=this.taskList[t.section];this.$set(e.list[t.index],"checked",t.value),t.value?e.checkedNum++:e.checkedNum--,this.$set(e,"checkedNum",e.checkedNum)}else if("delete"==t.type)this.taskList[t.section].list.splice(t.index,1);else if("change-stop-time"==t.type){new Date(t.value).getTime()/1e3+86399>(new Date).getTime()/1e3?this.taskList[t.section].list[t.index].isEnd=!1:this.taskList[t.section].list[t.index].isEnd=!0,this.taskList[t.section].list[t.index].stopTime=t.value}else if("change-priority"==t.type)this.taskList[t.section].list[t.index].priority=t.value.id;else if("change-name"==t.type)this.taskList[t.section].list[t.index].name=t.value;else if("change-comments"==t.type){var s=this.taskList[t.section].list[t.index].commentCount;"add"==t.value?this.taskList[t.section].list[t.index].commentCount=s+1:this.taskList[t.section].list[t.index].commentCount=s-1}else"change-sub-task"==t.type?(this.taskList[t.section].list[t.index].childWCCount=t.value.subdonecount,this.taskList[t.section].list[t.index].childAllCount=t.value.allcount):"change-main-user"==t.type?this.taskList[t.section].list[t.index].mainUser=t.value:"change-label"==t.type&&(this.taskList[t.section].list[t.index].labelList=t.value)},closeBtn:function(){this.taskDetailShow=!1},exportClick:function(){var t=this;this.taskHandleShow=!1,this.loading=!0,Object(n.a)().then(function(e){Object(f.c)(e),t.loading=!1}).catch(function(){t.loading=!1})}}},k=(s("+NYD"),s("KHd+")),g=Object(k.a)(v,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-task"},[s("xr-header",{attrs:{"icon-class":"wk wk-task","icon-color":"#D376FF",placeholder:"请输入任务/描述","show-search":"","ft-top":"0"},on:{search:t.searchClick}},[s("span",{attrs:{slot:"label"},slot:"label"},[t._v("我的任务")]),t._v(" "),s("el-popover",{attrs:{slot:"label",placement:"bottom-start",width:"182"},slot:"label",model:{value:t.taskHandleShow,callback:function(e){t.taskHandleShow=e},expression:"taskHandleShow"}},[s("div",{staticClass:"project-list-popover-btn-list"},[s("p",{on:{click:t.exportClick}},[t._v("导出任务")])]),t._v(" "),s("i",{staticClass:"wk wk-manage set-img",attrs:{slot:"reference"},slot:"reference"})]),t._v(" "),s("template",{slot:"ft"},[s("el-dropdown",{attrs:{trigger:"click"},on:{command:t.filterClick}},[s("div",{staticClass:"el-dropdown-link"},[t._v("\n          "+t._s(t.filterObj[t.filterValue.sort])),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("div",{staticClass:"el-dropdown-title"},[t._v("排序")]),t._v(" "),t._l(t.filterList,function(e,i){return s("el-dropdown-item",{key:i,attrs:{command:e.value}},[t._v(t._s(e.label))])}),t._v(" "),s("flexbox",{staticClass:"el-dropdown-footer"},[t._v("\n            已完成任务默认排在最后"),s("el-switch",{on:{change:t.getList},model:{value:t.filterValue.completedTask,callback:function(e){t.$set(t.filterValue,"completedTask",e)},expression:"filterValue.completedTask"}})],1)],2)],1),t._v(" "),s("el-button",{staticClass:"filter-btn",attrs:{type:"primary",icon:"wk wk-screening"},on:{click:function(e){t.screeningShow=!0}}},[t._v("任务筛选")])],1)],2),t._v(" "),s("div",{staticClass:"my-task-body"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"},{name:"scrollx",rawName:"v-scrollx",value:{ignoreClass:["ignoreClass"]},expression:"{ ignoreClass :['ignoreClass']}"}],staticClass:"content-box"},t._l(t.taskList,function(e,i){return s("div",{key:i,staticClass:"board-column"},[s("flexbox",{staticClass:"board-column-wrapper ignoreClass",attrs:{orient:"vertical",align:"stretch"}},[s("div",{staticClass:"board-column-header"},[s("div",[s("span",{staticClass:"text"},[t._v(" "+t._s(e.title)+" ")]),t._v(" "),s("span",{staticClass:"text-num"},[t._v(t._s(e.checkedNum)+" / "+t._s(e.list.length))])]),t._v(" "),0==e.checkedNum?s("el-progress",{attrs:{percentage:0}}):s("el-progress",{attrs:{percentage:e.checkedNum/e.list.length*100}})],1),t._v(" "),s("draggable",{staticClass:"board-column-content",attrs:{list:e.list,options:{group:"mission",forceFallback:!1,dragClass:"sortable-drag"},id:i},on:{end:t.moveEndTask}},t._l(e.list,function(a,n){return s("div",{key:n,ref:"taskRow",refInFor:!0,class:a.checked?"board-item board-item-active":"board-item",style:{"border-color":t.getPriorityColor(a.priority).color},on:{click:function(e){t.showDetailView(a,i,n)}}},[s("flexbox",{attrs:{align:"stretch"}},[s("div",{on:{click:function(t){t.stopPropagation()}}},[s("el-checkbox",{on:{change:function(s){t.checkboxChange(a,e)}},model:{value:a.checked,callback:function(e){t.$set(a,"checked",e)},expression:"element.checked"}})],1),t._v(" "),s("div",{staticClass:"element-label"},[t._v(t._s(a.name)),a.workName?s("span",[t._v("（"+t._s(a.workName)+"）")]):t._e()]),t._v(" "),a.mainUser?s("xr-avatar",{staticClass:"head-png",attrs:{name:a.mainUser.realname,id:a.mainUser.userId,size:24,src:a.mainUser.img,disabled:!1,trigger:"hover"}}):t._e()],1),t._v(" "),s("div",{staticClass:"img-group"},[a.stopTime?s("div",{staticClass:"img-box"},[s("i",{staticClass:"wukong wukong-time-task",style:{color:1!=a.isEnd||a.checked?"#999":"red"}}),t._v(" "),s("span",{style:{color:1!=a.isEnd||a.checked?"#999":"red"}},[t._v(t._s(t._f("moment")(a.stopTime,"YYYY-MM-DD"))+" 截止")])]):t._e(),t._v(" "),a.childAllCount>0?s("div",{staticClass:"img-box"},[s("i",{staticClass:"wukong wukong-sub-task"}),t._v(" "),s("span",[t._v(t._s(a.childWCCount)+"/"+t._s(a.childAllCount))])]):t._e(),t._v(" "),a.fileCount?s("div",{staticClass:"img-box"},[s("i",{staticClass:"wukong wukong-file"}),t._v(" "),s("span",[t._v(t._s(a.fileCount))])]):t._e(),t._v(" "),a.commentCount?s("div",{staticClass:"img-box"},[s("i",{staticClass:"wukong wukong-comment-task"}),t._v(" "),s("span",[t._v(t._s(a.commentCount))])]):t._e(),t._v(" "),a.labelList.length<=2?t._l(a.labelList,function(e,i){return s("div",{key:i,staticClass:"item-label",style:{background:e.color}},[t._v("\n                    "+t._s(e.labelName)+"\n                  ")])}):[s("div",{staticClass:"item-label",style:{background:a.labelList[0].color}},[t._v(t._s(a.labelList[0].labelName))]),t._v(" "),s("div",{staticClass:"item-label",style:{background:a.labelList[1].color}},[t._v(t._s(a.labelList[1].labelName))]),t._v(" "),s("el-tooltip",{attrs:{placement:"top",effect:"light","popper-class":"tooltip-change-border task-tooltip"}},[s("div",{staticStyle:{margin:"10px 10px 10px 0"},attrs:{slot:"content"},slot:"content"},t._l(a.labelList,function(e,i){return s("div",{key:i,staticStyle:{display:"inline-block","margin-right":"10px"}},[i>=2?s("span",{staticClass:"k-name",staticStyle:{"border-radius":"4px",color:"#FFF",padding:"3px 10px"},style:{background:e.color?e.color:"#ccc"}},[t._v(t._s(e.labelName))]):t._e()])})),t._v(" "),s("div",{staticClass:"color-label-more"},[s("i",[t._v("...")])])])]],2)],1)})),t._v(" "),s("task-quick-add",{staticStyle:{margin:"0 10px"},attrs:{params:{isTop:e.isTop},"show-style":"hideBorder"},on:{send:t.getList}})],1)],1)}))]),t._v(" "),t.taskDetailShow?s("task-detail",{ref:"particulars",attrs:{id:t.taskID,"detail-index":t.detailIndex,"detail-section":t.detailSection,"no-listener-class":["board-item"]},on:{"on-handle":t.detailHandle,close:t.closeBtn}}):t._e(),t._v(" "),t.screeningShow?s("task-screening",{attrs:{props:t.screeningProps,data:t.screeningValue},on:{change:t.taskScreeningChange,close:function(e){t.screeningShow=!1}}}):t._e()],1)},[],!1,null,"228c1508",null);g.options.__file="index.vue";e.default=g.exports},IKCp:function(t,e,s){"use strict";var i=s("JqEL"),a=s("Kw5r"),n={isDown:!1,coord:{x:0,y:0}},c=null,l=[],o=function(t){this&&this.contains(t.target)&&(c.style.cursor="pointer",n.isDown=!0,n.coord.x=t.pageX,n.coord.y=t.pageY)},r=function(t){c.style.cursor="default",n.isDown=!1,n.coord.x=0,n.coord.y=0},d=function(t){if(n.isDown){var e=n.coord.x-t.pageX;n.coord.x=t.pageX,c.scrollLeft=c.scrollLeft+e}},u=function(t){h(t)?(c.style.cursor="default",n.isDown=!1):this&&this.contains(t.target)&&(c.scrollLeft+=t.deltaY)},h=function(t){var e=!1;return l.forEach(function(s){var i=document.getElementsByClassName(s);if(i&&!e)for(var a=0;a<i.length;a++){var n=i[a].getBoundingClientRect();if(t.clientY>n.top&&t.clientY<n.top+n.height&&t.clientX>n.left&&t.clientX<n.left+n.width){e=!0;break}}}),e};e.a=a.default.directive("scrollx",{bind:function(t,e,s){var i=e.value;l=i.ignoreClass},inserted:function(t){c=t,Object(i.b)(document,"mousedown",o.bind(t)),Object(i.b)(document,"wheel",u.bind(t)),Object(i.b)(document,"mouseup",r.bind(t)),Object(i.b)(document,"mousemove",d.bind(t))},unbind:function(t){Object(i.a)(document,"mousedown",o.bind(t)),Object(i.a)(document,"mouseup",r.bind(t)),Object(i.a)(document,"wheel",u.bind(t)),Object(i.a)(document,"mousemove",d.bind(t)),n={isDown:!1,coord:{x:0,y:0}}}})},Mzjh:function(t,e,s){"use strict";var i=s("FyfS"),a=s.n(i),n=s("QbLZ"),c=s.n(n),l=s("LWkM"),o=s("Ajln"),r=s("7Qib"),d=s("FdMb"),u=s("jtZb"),h={searchShow:!0,userRequest:null,userParams:null},m={props:{workId:[Number,String],data:Object,props:Object},data:function(){return{zIndex:Object(r.q)(),search:"",menuList:[{label:"成员",id:"1",expand:!1,list:[]},{label:"截止时间",id:"2",expand:!1,list:[{id:"1",name:"今天",type:"time",checked:!1},{id:"2",name:"明天",type:"time",checked:!1},{id:"3",name:"本周",type:"time",checked:!1},{id:"4",name:"本月",type:"time",checked:!1},{id:"5",name:"未设置截止时间",type:"time",checked:!1},{id:"6",name:"已延期",type:"time",checked:!1},{id:"7",name:"今日更新",type:"time",checked:!1}]},{label:"标签",id:"3",expand:!1,list:[]}]}},computed:{config:function(){return Object(u.a)(c()({},h),this.props||{})}},created:function(){var t=this;this.debouncedSeach=Object(d.a)(500,function(){t.searchChange()}),this.search=this.data.search,this.getUserList(),this.getTagList(),this.menuList[1].list.forEach(function(e){e.checked=t.data&&t.data.timeId==e.id})},mounted:function(){document.getElementById("app").addEventListener("click",this.taskShowHandle,!1)},methods:{getUserList:function(){var t=this;this.menuList[0].list=[];var e=this.config.userRequest||l.u,s=this.config.userParams;null===s&&(s={workId:this.workId}),e(s).then(function(e){t.menuList[0].list=e.data.map(function(e){return e.checked=t.data&&t.data.userIds&&t.data.userIds.includes(e.userId),e.name=e.realname,e.type="user",e})})},getTagList:function(){var t=this;this.menuList[2].list=[],Object(o.c)().then(function(e){t.menuList[2].list=e.data.map(function(e){return e.id=e.labelId,e.checked=t.data&&t.data.tagIds&&t.data.tagIds.includes(e.labelId),e.type="tag",e})}).catch(function(){})},close:function(){this.$emit("close")},rowChecked:function(t){if("time"==t.type){var e=!0,s=!1,i=void 0;try{for(var n,c=a()(this.menuList[1].list);!(e=(n=c.next()).done);e=!0){var l=n.value;t.id==l.id?l.checked=!l.checked:l.checked=!1}}catch(t){s=!0,i=t}finally{try{!e&&c.return&&c.return()}finally{if(s)throw i}}}else t.checked=!t.checked;var o=[],r=!0,d=!1,u=void 0;try{for(var h,m=a()(this.menuList[0].list);!(r=(h=m.next()).done);r=!0){var p=h.value;p.checked&&o.push(p.userId)}}catch(t){d=!0,u=t}finally{try{!r&&m.return&&m.return()}finally{if(d)throw u}}var f="",v=!0,k=!1,g=void 0;try{for(var b,_=a()(this.menuList[1].list);!(v=(b=_.next()).done);v=!0){var y=b.value;if(y.checked){f=y.id;break}}}catch(t){k=!0,g=t}finally{try{!v&&_.return&&_.return()}finally{if(k)throw g}}var x=[],C=!0,w=!1,L=void 0;try{for(var I,S=a()(this.menuList[2].list);!(C=(I=S.next()).done);C=!0){var T=I.value;T.checked&&x.push(T.id)}}catch(t){w=!0,L=t}finally{try{!C&&S.return&&S.return()}finally{if(w)throw L}}this.$emit("change",o,f,x,this.search)},searchChange:function(){this.$emit("change",this.data.userIds,this.data.timeId,this.data.tagIds,this.search)},resetBtn:function(){var t=!0,e=!1,s=void 0;try{for(var i,n=a()(this.menuList);!(t=(i=n.next()).done);t=!0){var c=i.value,l=!0,o=!1,r=void 0;try{for(var d,u=a()(c.list);!(l=(d=u.next()).done);l=!0){d.value.checked=!1}}catch(t){o=!0,r=t}finally{try{!l&&u.return&&u.return()}finally{if(o)throw r}}}}catch(t){e=!0,s=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw s}}this.search="",this.$emit("change",[],"",[],this.search)},rowFun:function(t){t.expand?t.expand=!1:t.expand=!0},taskShowHandle:function(t){this.$el.contains(t.target)||this.close()}}},p=(s("zrgI"),s("KHd+")),f=Object(p.a)(m,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-fade"}},[s("el-card",{staticClass:"project-screening",style:{"z-index":t.zIndex}},[s("p",{staticClass:"header"},[s("span",{staticClass:"label"},[t._v("任务筛选")]),t._v(" "),s("el-button",{attrs:{type:"text"},on:{click:t.resetBtn}},[t._v("重置")]),t._v(" "),s("span",{staticClass:"rt el-icon-close",on:{click:t.close}})],1),t._v(" "),s("div",{staticClass:"content"},[t.config.searchShow?s("el-input",{attrs:{placeholder:"搜索项目内任务"},on:{input:t.debouncedSeach},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e(),t._v(" "),t._l(t.menuList,function(e,i){return s("div",{key:i,staticClass:"menu-list"},[s("p",{staticClass:"item-label",on:{click:function(s){t.rowFun(e)}}},[t._v("\n          "+t._s(e.label)+"\n          "),s("span",{class:e.expand?"el-icon-arrow-right item-expand":"el-icon-arrow-down item-expand"})]),t._v(" "),t._l(e.list,function(a,n){return s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.expand,expression:"item.expand == false"}],key:n,class:["item-list",a.checked?"item-list-active":"",{"time-item-list":1==i}],on:{click:function(e){t.rowChecked(a)}}},["user"==a.type?s("xr-avatar",{staticClass:"user-img",attrs:{name:a.realname,size:24,src:a.img}}):t._e(),t._v(" "),"tag"==a.type?s("span",{staticClass:"tag-icon",style:{backgroundColor:a.color}},[s("i",{staticClass:"wk wk-label"})]):t._e(),t._v(" "),s("span",{staticClass:"item-list-label",class:{"is-tag":"tag"==a.type}},[t._v(t._s(a.name))]),t._v(" "),s("span",{staticClass:"el-icon-check rt"})],1)})],2)})],2)])],1)},[],!1,null,"52fcb0fb",null);f.options.__file="TaskScreening.vue";e.a=f.exports},ihDC:function(t,e,s){},nvpU:function(t,e,s){},zIzm:function(t,e,s){"use strict";var i=s("ihDC");s.n(i).a},zrgI:function(t,e,s){"use strict";var i=s("DxkF");s.n(i).a}}]);